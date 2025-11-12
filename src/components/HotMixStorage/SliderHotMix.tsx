import React, { useState, useEffect, useRef } from "react";

interface ImageData {
  src: string;
  title: string;
  texto: string;
}

interface Props {
  images: ImageData[];
}

export default function SliderHotMix({ images }: Props) {
  const [windowWidth, setWindowWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 1024;
  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = images.length - (isMobile ? 0 : itemsPerPage) + 1;

  // Desktop navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  };

  // Mobile touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile || !containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5; // Ajusta la sensibilidad del desplazamiento
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8 y-10 bg-bgMain mt-10 md:mt-20 relative mb-10">
      {/* Desktop navigation buttons */}
      {!isMobile && (
        <div className="absolute -bottom-10 right-[15%] flex gap-2 justify-end">
          <button
            onClick={prevSlide}
            className="bg-[#d2d2d2] hover:bg-[#bcbcbc] text-black px-1 py-1 rounded-full shadow"
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke="#393939"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#d2d2d2] hover:bg-[#bcbcbc] text-black px-1 py-1 rounded-full shadow"
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="#393939"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Slider container */}
      <div className="relative w-full h-auto overflow-hidden">
        <div
          ref={containerRef}
          className={`flex ${
            isMobile
              ? "overflow-x-auto touch-pan-x snap-x snap-mandatory no-scrollbar gap-6 px-4"
              : "gap-4 transition-transform duration-500 ease-in-out"
          }`}
          style={{
            transform: isMobile ? undefined : `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            cursor: isMobile ? (isDragging ? 'grabbing' : 'grab') : 'auto',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`flex-shrink-0 ${
                isMobile ? "snap-start pl-2" : "px-2"
              } bg-white p-2 rounded-2xl`}
              style={{
                width: isMobile ? '85%' : `calc(25% - 16px)`,
                minWidth: isMobile ? '85%' : `calc(25% - 16px)`,
                scrollSnapAlign: isMobile ? 'start' : undefined,
              }}
            >
              <div className="px-4">
                <img
                  src={img.src}
                  alt={img.title}
                  className="h-14 object-cover"
                />
                <div className="text-start font-bold text-grisT">
                  {img.title}
                </div>
              </div>
              
              <div className="font-normal text-grisT text-sm md:text-base px-4">
                {img.texto}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}