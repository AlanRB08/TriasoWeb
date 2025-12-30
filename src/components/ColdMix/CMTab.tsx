// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/CMTLevel.png", alt: "Discharge at truck level" },
  { id: 1, src: "/Gallery/CMGLevel.png", alt: "Discharge at ground level" },
];

export default function CMTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-10 mb-6">
      <div className="flex w-full border-b border-gray-200">
        {images.map((img, index) => (
          <button
            key={index}
            aria-label="Tab Selector"
            onClick={() => setActiveIndex(index)}
            className={`
              flex-1
              py-3
              text-center
              text-sm sm:text-base md:text-xl
              transition
              ${
                activeIndex === index
                  ? "border-b-2 border-redBg text-black font-bold"
                  : "border-b-2 border-transparent text-grisT font-normal"
              }
            `}
          >
            {index === 0
              ? "Discharge at truck level"
              : "Discharge at ground level"}
          </button>
        ))}
      </div>

      <div className="mt-8 w-full flex justify-center">
        <div
          className="
            w-full
            max-w-5xl
            aspect-[16/9]
            sm:aspect-[4/3]
            md:aspect-[16/9]
            bg-gray-100
            rounded-2xl
            overflow-hidden
            flex
            items-center
            justify-center
          "
        >
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
