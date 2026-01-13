// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/tolva1.webp", alt: "Imagen 1" },
  { id: 1, src: "/Gallery/tolva2.webp", alt: "Imagen 2" },
  { id: 2, src: "/Gallery/tolva3.webp", alt: "Imagen 3" }, 
];

export default function TabsIntegral() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-10 mb-4 max-w-7xl mx-auto px-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full text-center gap-2">
        {images.map((img, index) => (
          <button
            aria-label="Tab Selector"
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`min-w-0 break-words border-b-2 py-2 px-2 text-sm sm:text-base ${activeIndex === index
                ? "border-redBg text-black font-bold"
                : "border-transparent text-grisT font-normal"
              }`}
          >
            {index === 0 ? (
              <>
                Standard chassis{" "}
                <span className="hidden md:inline">
                  for <br />
                  mobility of empty plant
                </span>
              </>
            ) : index === 1 ? (
              <>
                <span className="hidden md:inline"> All mounted on a </span>{" "}
                Lightweight chassis <br />{" "}
                <span className="hidden md:inline"> with support legs </span>
              </>
            ) : (
              <>
                Reinforced chassis{" "}
                <span className="hidden md:inline">
                  for full- <br /> loaded plant mobility
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      <div className="w-full h-[40vh] sm:h-[50vh] flex justify-center items-center bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>

  );
}
