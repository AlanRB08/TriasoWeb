// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/baghouses1.webp", alt: "Bag house mounted on the same chassis as the drum mixer" },
  { id: 1, src: "/Gallery/baghouses2.webp", alt: "Bag house self-contained" },
];

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 mt-10 mb-4">

      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        className=" w-full object-contain md:object-cover lg:object-cover"
      />
      
      <div className="flex flex-col items-stretch justify-around gap-4 md:gap-20">
        {images.map((img, index) => (
          <button
            aria-label="Select tab"
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-center md:text-start font-normal border-b-2 md:pr-4 md:w-8/12 text-sm md:text-base ${activeIndex === index
              ? "border-red-500 text-black"
              : "border-transparent"
              }`}
          >
            {index === 0 ? (
              <>
                Mounted on the same <br />
                chassis{" "}
                <span className="hidden md:inline">as the drum mixer</span>
              </>
            ) : (
              "Self-contained"
            )}
          </button>
        ))}

        <div className="flex flex-col">
          <div>
            <h2>Different Types of Filter Bags and Their Specific Applications:</h2>
          </div>
          <div className="pl-5 font-semibold text-[#5d5d5d]">
            <li>Polyester</li>
            <li>Nomex</li>
            <li>Polyamide (P84)</li>
          </div>
        </div>
      </div>

    </div>
  );
}
