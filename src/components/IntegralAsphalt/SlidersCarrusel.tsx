import React, { useState, useEffect, useRef } from "react";

interface ImageData {
  src: string;
  title: string;
  texto: string;
}

interface Props {
  images: ImageData[];
}

export default function SlidersCarrusel({ images }: Props) {
    const [windowWidth, setWindowWidth] = useState(0);
    const [modalIndex, setModalIndex] = useState<number | null>(null);
  
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowWidth < 1024;
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = isMobile ? 1 : 3;
    const totalPages = Math.ceil(images.length / itemsPerPage);
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
    };
  
    const offset = -(currentIndex * (100 / totalPages));
  
    return (
      <div className="w-full mx-auto y-10 bg-bgMain mt-10 md:mt-20 relative px-0 md:px-44 mb-10">
        
        {/* Botones solo en desktop */}
        {!isMobile && (
            <div className="absolute -bottom-10 right-[15%] flex gap-2 justify-end">
              <button
              aria-label='Prev slide'
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
              aria-label='Next slide'
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
        {/* Contenedor deslizable */}
        <div className="relative overflow-hidden w-full h-auto">
          <div
            ref={containerRef}
            className={`flex transition-transform duration-500 ease-in-out ${
              isMobile
                ? "overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                : ""
            }`}
            style={{
              transform: isMobile ? undefined : `translateX(${offset}%)`,
              width: isMobile ? "100%" : `${(images.length / itemsPerPage) * 100}%`,
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 px-2 cursor-pointer ${
                  isMobile ? "snap-start" : ""
                }`}
                style={{
                  width: isMobile ? "80%" : `${100 / images.length}%`,
                }}
                onClick={() => setModalIndex(i)}
              >
                <div className="p-4 bg-white rounded-sm">
                    <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-64 object-cover shadow hover:scale-105 transition"
                    />
                    <div className="mt-4 text-start font-bold text-blueMain">
                    {img.title}
                    </div>
                </div>
                
                <div className="mt-4 text-justify font-bold text-grisT text-sm md:text-base px-4">
                <p dangerouslySetInnerHTML={{ __html: img.texto }}></p>
                </div>
              </div>
            ))}
          </div>
  
          
        </div>
  
        {/* Modal para imagen ampliada */}
        {modalIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setModalIndex(null)}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <img
                src={images[modalIndex].src}
                alt={images[modalIndex].title}
                className="w-full max-h-[80vh] object-contain rounded"
              />
              <button
                aria-label='Close modal'
                onClick={() => setModalIndex(null)}
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black px-3 py-1 rounded"
              >
                ✕
              </button>
              <div className="text-white text-center mt-2 text-lg font-medium">
                {images[modalIndex].title}
              </div>
            </div>
          </div>
        )}
      </div>
    );
}
