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
    <div className="w-full mx-auto py-8 mt-10 md:mt-20">
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
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              
            </div>
          ))}
        </div>

        {/* Botones de navegación - solo visible en desktop */}
        {windowWidth >= 768 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.9697 16.0303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L10.9697 7.96967C11.2626 7.67678 11.7374 7.67678 12.0303 7.96967C12.3232 8.26256 12.3232 8.73744 12.0303 9.03033L9.81066 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303C11.7374 16.3232 11.2626 16.3232 10.9697 16.0303Z" fill="#000000"></path></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.0303 7.96967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L13.0303 16.0303C12.7374 16.3232 12.2626 16.3232 11.9697 16.0303C11.6768 15.7374 11.6768 15.2626 11.9697 14.9697L14.1893 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H14.1893L11.9697 9.03033C11.6768 8.73744 11.6768 8.26256 11.9697 7.96967C12.2626 7.67678 12.7374 7.67678 13.0303 7.96967Z" fill="#000000"></path></svg>
            </button>
          </>
        )}
      </div>

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