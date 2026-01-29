import React, { useState, useEffect } from "react";

interface ImageData {
  src: string;
  title: string;
  texto: string;
}

interface SlidersCarruselProps {
  images: ImageData[];
}

const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else if (width < 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerPage;
};

const NavigationButton = ({
  direction,
  onClick,
  disabled
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) => {
  const isNext = direction === "next";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={`${isNext ? "Next" : "Prev"} slide`}
      className={`
        bg-[#d2d2d2] text-black p-2 rounded-full shadow transition-all z-10
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#bcbcbc] hover:scale-110"}
      `}
    >
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <path
          d={isNext ? "M9 6L15 12L9 18" : "M15 6L9 12L15 18"}
          stroke="#393939"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default function SlidersCarrusel({ images }: SlidersCarruselProps) {
  const itemsPerPage = useItemsPerPage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState<ImageData | null>(null);
  const maxIndex = Math.ceil(images.length / itemsPerPage) - 1;

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const isMobile = itemsPerPage === 1;

  return (
    <div className="relative w-full mx-auto mt-10 mb-10 px-4 md:px-12 lg:px-20 xl:px-44 bg-bgMain">

      <div className="overflow-hidden w-full h-auto py-4">
        <div
          className={`
            flex transition-transform duration-500 ease-out h-full
            ${isMobile ? "overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4" : ""}
          `}
          style={{
            transform: !isMobile ? `translateX(-${currentIndex * 100}%)` : "none",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setModalImage(img)}
              className={`
                flex-shrink-0 cursor-pointer px-2 transition-all duration-300
                ${isMobile ? "snap-center w-[85%]" : ""}
              `}
              style={{
                width: isMobile ? undefined : `${100 / itemsPerPage}%`,
              }}
            >
              <div className="bg-white rounded-md shadow-sm hover:shadow-lg h-full flex flex-col transition-shadow duration-300">
                <div className="overflow-hidden rounded-t-md h-56 lg:h-64 flex-shrink-0">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-blueMain text-lg mb-3 text-start leading-tight">
                    {img.title}
                  </h3>

                  <div className="text-justify text-grisT text-sm md:text-base flex-grow">
                    <div dangerouslySetInnerHTML={{ __html: img.texto }} />
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400 font-semibold uppercase tracking-wide text-right">
                    See more
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-5 right-0 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full"
            >
              ✕
            </button>

            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="w-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="bg-white w-full max-w-2xl p-6 mt-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-blueMain mb-2">{modalImage.title}</h2>
              <div
                className="text-gray-600 text-sm md:text-base overflow-y-auto max-h-[20vh] pr-2 custom-scrollbar"
                dangerouslySetInnerHTML={{ __html: modalImage.texto }}
              />
            </div>
          </div>
        </div>
      )}

      {!isMobile && images.length > itemsPerPage && (
        <div className=" flex justify-end gap-3">
          <NavigationButton direction="prev" onClick={prevSlide} disabled={false} />
          <NavigationButton direction="next" onClick={nextSlide} disabled={false} />
        </div>
      )}
    </div>
  );
}