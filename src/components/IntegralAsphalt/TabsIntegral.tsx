// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/tolva1.png", alt: "Imagen 1" },
  { id: 1, src: "/Gallery/tolva2.png", alt: "Imagen 2" },
  { id: 2, src: "/Gallery/tolva3.png", alt: "Imagen 3" }, // Nueva imagen
];

export default function TabsIntegral() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-10 mb-4 px-8 md:px-52">
      <div className="grid grid-cols-3 w-full justify-center items-stretch text-center">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-center border-b-2 md:pr-4 w-full text-sm md:text-base ${
              activeIndex === index 
                ? "border-redBg text-black font-bold" 
                : "border-transparent text-grisT font-normal"
            }`}
          >
            {index === 0 ? (
              <>
                Standard chassis for <br />mobility of empty plant
              </>
            ) : index === 1 ? (
              <>
                All mounted on a lightweight chassis <br /> with support legs
              </>
            
            ) : (
              <>
                Reinforced chassis for full- <br /> loaded plant mobility
              </>
               // Texto para el nuevo tab
            )}
          </button>
        ))}
      </div>

      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        className="rounded-2xl"
      />
    </div>
  );
}