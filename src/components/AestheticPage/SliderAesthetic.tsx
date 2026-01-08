import React, { useState } from "react";

const SliderAesthetic = () => {
  const sidePanels = [
    {
      nombre: "Drum mixer",
      imagen: "src/assets/images/SidePanels/FEPlaC_1.webp",
    },
    {
      nombre: "Asphalt storage tanks",
      imagen: "src/assets/images/SidePanels/TqesFeChasis_1.webp",
    },
    {
      nombre: "Bin Units",
      imagen: "src/assets/images/SidePanels/TolvasFE.webp",
    },
    {
      nombre: "Cold Mix Asphalt Plants",
      imagen: "src/assets/images/SidePanels/FEPlaC1_1.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sidePanels.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sidePanels.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = sidePanels[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 flex flex-col gap-4 items-center bg-white rounded-2xl shadow-md min-h-[400px] justify-center">
      {/* Imagen */}
      <div className="relative w-full flex justify-center">
        <img
          src={currentSlide.imagen}
          alt={currentSlide.nombre}
          className="w-full max-w-[700px] h-auto object-contain rounded-xl transition-all duration-500"
        />
      </div>

      {/* Título y controles */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3">
        <h2 className="text-black text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left">
          {currentSlide.nombre}
        </h2>

        <div className="flex gap-3 justify-center">
          <button
            aria-label="Prev slide"
            onClick={prevSlide}
            className="bg-gray-200 hover:bg-gray-300 text-black p-1 rounded-full shadow-md transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            aria-label="Next slide"
            onClick={nextSlide}
            className="bg-gray-200 hover:bg-gray-300 text-black p-1 rounded-full shadow-md transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
      </div>
    </div>
  );
};

export default SliderAesthetic;
