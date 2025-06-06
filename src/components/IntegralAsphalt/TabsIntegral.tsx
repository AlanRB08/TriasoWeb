// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/baghouses1.png", alt: "Imagen 1" },
  { id: 1, src: "/Gallery/baghouses2.png", alt: "Imagen 2" },
];

export default function TabsIntegral() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 mt-10 mb-4 px-8">
      <div className="flex lg:flex-col items-stretch justify-around gap-4 md:gap-20">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-center md:text-start font-normal border-b-2 md:pr-4 md:w-8/12 text-sm md:text-base ${
              activeIndex === index ? "border-red-500" : "border-transparent"
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
      </div>

      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        className="border border-blueMain rounded-2xl"
      />
    </div>
  );
}
