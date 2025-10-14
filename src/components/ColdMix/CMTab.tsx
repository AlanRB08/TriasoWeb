// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/CMTLevel.png", alt: "Imagen 1" },
  { id: 1, src: "/Gallery/CMGLevel.png", alt: "Imagen 2" },
];

export default function CMTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-10 mb-4 px-8 lg:px-52">
      <div className="grid grid-cols-2 w-full justify-center items-center text-center">
        {images.map((img, index) => (
          <div className="w-full flex justify-center">
            <button
            aria-label='Tab Selector'
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-center border-b-2 md:pr-4 w-1/2 px-5 md:mx-10 text-base md:text-xl ${
              activeIndex === index 
                ? "border-redBg text-black font-bold" 
                : "border-transparent text-grisT font-normal"
            }`}
          >
            {index === 0 ? (
              <>
                Discharge at truck level 
              </>
            ) : index === 1 ? (
              <>
                <span> Discharge at ground level </span>
              </>
            ):null}
          </button>
          </div>
        ))}
      </div>
        <br />
      <div className="w-full h-full md:h-[400px] flex justify-center items-center bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="w-full h-full object-contain" // o `object-cover` si prefieres recortar
        />
      </div>
    </div>
  );
}