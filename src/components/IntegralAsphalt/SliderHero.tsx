import React, { useState, useEffect } from "react";
import Hero1 from "../../assets/images/IntegralAsphalt/Hero1.webp";
import Hero2 from "../../assets/images/IntegralAsphalt/Hero2.webp";
import Hero3 from "../../assets/images/IntegralAsphalt/Hero3.webp";
import Hero4 from "../../assets/images/IntegralAsphalt/Hero4.webp";

const SliderHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Sliders = [
    {
      titulo: "Ideal for pothole repair programs",
      texto:
        "An efficient solution for pothole patching and road maintenance, with immediate production of asphalt mix directly on the job site.",
      img: Hero1,
    },
    {
      titulo: "Zero emissions, ready to operate in any place",
      texto:
        "Designed to operate in the most inaccessible locations, this all-in-one asphalt plant easily handles the narrowest and most challenging roads.",
      img: Hero2,
    },
    {
      titulo: "Mobility that drives your work",
      texto:
        "Thanks to its integrated design and optimized structure, this asphalt plant can be easily relocated without complex maneuvers or special equipment, allowing operations to start where others simply can’t reach.",
      img: Hero3,
    },
    {
      titulo: "Hassle-free transportation, unlimited production",
      texto:
        "This compact asphalt plant is designed to move easily over rough terrain and tight spaces, eliminating the logistical barriers that other equipment can’t overcome. Ideal for projects in remote or hard-to-reach locations.",
      img: Hero4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Sliders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [Sliders.length]);

  return (
    <div className="relative w-full overflow-hidden mt-[66px]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Sliders.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.img.src}
              alt={`slide-${index}`}
              className="w-full object-cover h-[400px] md:h-[600px]"
            />
            <div className="absolute top-10 left-10 text-white p-6 max-w-md rounded-md bg-blueMain">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {slide.titulo}
              </h2>
              <p className="text-sm md:text-base">{slide.texto}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botones navegación */}
      <button
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
        onClick={() =>
          setCurrentSlide((currentSlide - 1 + Sliders.length) % Sliders.length)
        }
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
        onClick={() => setCurrentSlide((currentSlide + 1) % Sliders.length)}
      >
        ›
      </button>

      {/* Puntos indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Sliders.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-blueMain" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderHero;
