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
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-10 mb-4 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-3 w-full justify-center items-stretch text-center">
        {images.map((img, index) => (
          <button
            aria-label='Tab Selector'
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
                Standard chassis <span className="hidden md:inline">for <br />mobility of empty plant</span>
              </>
            ) : index === 1 ? (
              <>
                <span className="hidden md:inline"> All mounted on a </span> Lightweight chassis <br /> <span className="hidden md:inline"> with support legs </span>
              </>
            
            ) : (
              <>
                Reinforced chassis  <span className="hidden md:inline">for full- <br /> loaded plant mobility</span>
              </>
               // Texto para el nuevo tab
            )}
          </button>
        ))}
      </div>

      <div className="w-full h-[50vh] flex justify-center items-center bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="w-full h-full object-contain" // o `object-cover` si prefieres recortar
        />
      </div>
    </div>
  );
}