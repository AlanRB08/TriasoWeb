// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/baghouses1.png", alt: "Imagen 1" },
  { id: 1, src: "/Gallery/baghouses2.png", alt: "Imagen 2" },
];

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 mt-10 mb-4 md:px-32">
      <div className="flex lg:flex-col items-stretch justify-around gap-4 md:gap-10">
        {images.map((img, index) => (
          <button
            aria-label="Select tab"
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-center md:text-start font-normal p-4 rounded-xl md:pr-4 md:w-8/12 text-sm md:text-base ${
              activeIndex === index ? "border-red-500 text-white bg-blueMain" : "border-transparent bg-white text-grisT"
            }`}
          >
            {index === 0 ? (
              <>
                Mounted on the same <br/>
                chassis <span className="hidden md:inline">as the drum mixer</span>
              </>
            ) : (
              "Self-contained"
            )}
          </button>
        ))}
        <p className="font-bold text-grisT text-base md:text-lg">
        Self-contained, integrated dust control systems for effective air filtration and particle capture in asphalt plants—configurable 
        for both portable and stationary setups.
        </p>
      </div>

      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        className="border-2 border-blueMain rounded-2xl h-[350px] w-full"
      />
    </div>
  );
}
