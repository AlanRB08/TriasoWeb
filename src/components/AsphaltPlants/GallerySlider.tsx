import React, { useState, useEffect, useRef } from "react";

interface ImageData {
  src: string;
  title: string;
}

interface Props {
  images: ImageData[];
}

export default function GallerySlider({ images }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [modalIndex, setModalIndex] = useState<number | null>(null);
  
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const itemsPerPage = windowWidth < 768 ? 1 : 3;
    const totalPages = Math.ceil(images.length / itemsPerPage);
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
    };
  
    const offset = -(currentIndex * (100 / totalPages));
  
    return (
      <div className="w-full mx-auto py-8 bg-blueMain mt-10 md:mt-20">
        <h1 className="text-3xl md:text-4xl text-white mb-4 px-8">GALLERY</h1>
        <div className="relative overflow-hidden w-full h-[300px]">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(images.length / itemsPerPage) * 100}%`,
              transform: `translateX(${offset}%)`,
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-2 cursor-pointer"
                style={{ width: `${100 / images.length}%` }}
                onClick={() => setModalIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover rounded shadow hover:scale-105 transition"
                />
                <div className="mt-4 text-start font-bold text-white">{img.title}</div>
              </div>
            ))}
          </div>
          {/* Botones */}
          
          
        </div>
        <div className="text-end mr-4 flex gap-2 justify-end ">
          <button
            onClick={prevSlide}
            className="bg-[#d2d2d2] hover:bg-[#bcbcbc] text-black px-1 py-1 rounded-full shadow"
          >
            <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 6L9 12L15 18" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#d2d2d2] hover:bg-[#bcbcbc] text-black px-1 py-1 rounded-full shadow"
          >
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 6L15 12L9 18" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>
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
