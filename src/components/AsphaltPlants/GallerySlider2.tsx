import React, { useState, useEffect, useRef } from "react";

interface ImageData {
  src: string;
  title: string;
}

interface Props {
  images: ImageData[];
}

export default function GallerySlider2({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mostrar 1 imagen en móvil (con scroll), 6 en desktop
  const itemsPerPage = windowWidth < 768 ? 1 : 6;

  const nextSlide = () => {
    if (windowWidth >= 768) {
      setCurrentIndex((prev) => (prev + 1 > images.length - itemsPerPage ? 0 : prev + 1));
    } else if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (windowWidth >= 768) {
      setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - itemsPerPage : prev - 1));
    } else if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  // Manejo de scroll táctil para móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    if (windowWidth >= 768) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || windowWidth >= 768) return;
    e.preventDefault();
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Ajusta la sensibilidad del scroll
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const offset = windowWidth < 768 ? 0 : -(currentIndex * (100 / itemsPerPage));

  return (
    <div className="w-full mx-auto pt-8 pb-2 mt-10 md:mt-20 md:border md:border-grisSubP">
      <div 
        ref={sliderRef}
        className={`relative w-full ${windowWidth < 768 ? 'overflow-x-auto snap-x snap-mandatory' : 'overflow-hidden'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          WebkitOverflowScrolling: 'touch' // Mejor scroll en iOS
        }}
      >
        <div
          ref={containerRef}
          className={`flex ${windowWidth < 768 ? 'w-max' : 'transition-transform duration-300 ease-out'}`}
          style={{
            transform: windowWidth < 768 ? 'none' : `translateX(${offset}%)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`flex-shrink-0 ${windowWidth < 768 ? 'snap-start px-4 w-[85vw]' : 'px-2'}`}
              style={{ 
                width: windowWidth < 768 ? '85vw' : `${100 / itemsPerPage}%`,
              }}
              onClick={() => setModalIndex(i)}
            >
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden hover:border-2 hover:border-blueMain">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              
            </div>
          ))}
        </div>

        
      </div>
      {/* Botones de navegación - solo visible en desktop */}
      {windowWidth >= 768 && (
          <div className="text-end mr-4 flex gap-2 justify-end mt-4">
            <button
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white/30 text-black py-1 px-3 rounded-md shadow-sm"
            >
              <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 6L9 12L15 18" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white/30 text-black py-1 px-3 rounded-md shadow-sm"
            >
              <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 6L15 12L9 18" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
          </div>
        )}

      {/* Modal para imagen ampliada */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setModalIndex(null)}
        >
          <div className="relative w-full max-w-4xl">
            <img
              src={images[modalIndex].src}
              alt={images[modalIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalIndex(null);
              }}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full"
            >
              ✕
            </button>
            <div className="text-white text-center mt-4 text-xl font-semibold">
              {images[modalIndex].title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}