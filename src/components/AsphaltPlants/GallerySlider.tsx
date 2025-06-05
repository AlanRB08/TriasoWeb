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
                <div className="mt-2 text-start font-bold text-white">{img.title}</div>
              </div>
            ))}
          </div>
          {/* Botones */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-2 rounded-r shadow"
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.9697 16.0303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L10.9697 7.96967C11.2626 7.67678 11.7374 7.67678 12.0303 7.96967C12.3232 8.26256 12.3232 8.73744 12.0303 9.03033L9.81066 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303C11.7374 16.3232 11.2626 16.3232 10.9697 16.0303Z" fill="#000000"></path></svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-2 rounded-l shadow"
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.0303 7.96967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L13.0303 16.0303C12.7374 16.3232 12.2626 16.3232 11.9697 16.0303C11.6768 15.7374 11.6768 15.2626 11.9697 14.9697L14.1893 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H14.1893L11.9697 9.03033C11.6768 8.73744 11.6768 8.26256 11.9697 7.96967C12.2626 7.67678 12.7374 7.67678 13.0303 7.96967Z" fill="#000000"></path></svg>
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
