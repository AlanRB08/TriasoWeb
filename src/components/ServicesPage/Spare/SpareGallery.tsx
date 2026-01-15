import React from "react";
import { useState } from "react";
import img1 from "../../../assets/images/Service/Spare/Gallery/SpareParts01.webp";
import img2 from "../../../assets/images/Service/Spare/Gallery/SpareParts-02.webp";
import img3 from "../../../assets/images/Service/Spare/Gallery/SpareParts-03.webp";
import img4 from "../../../assets/images/Service/Spare/Gallery/SpareParts-04.webp";
import img5 from "../../../assets/images/Service/Spare/Gallery/SpareParts-05.webp";
import img6 from "../../../assets/images/Service/Spare/Gallery/SpareParts-06.webp";
import img7 from "../../../assets/images/Service/Spare/Gallery/SpareParts-07.webp";
import img8 from "../../../assets/images/Service/Spare/Gallery/SpareParts-08.webp";
import img9 from "../../../assets/images/Service/Spare/Gallery/SpareParts-10.webp";
import img10 from "../../../assets/images/Service/Spare/Gallery/SpareParts-11.webp";
import img11 from "../../../assets/images/Service/Spare/Gallery/SpareParts-12.webp";
import img12 from "../../../assets/images/Service/Spare/Gallery/SpareParts-13.webp";
const SpareGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [currentAlt, setCurrentAlt] = useState("");
  const ItemGallery = [
    { title: "GEARBOXES", image: img1, altTitle:"GEARBOXES" },
    { title: "ELECTRIC MOTORS", image: img2, altTitle:"ELECTRIC MOTORS" },
    { title: "BANDS", image: img3, altTitle:"BANDS" },
    { title: "ROLLERS", image: img4, altTitle:"ROLLERS" },
    { title: "ELEVATOR CHAIN PARTS", image: img5, altTitle:"ELEVATOR CHAIN PARTS" },
    { title: "PULLEYS", image: img6, altTitle:"PULLEYS" },
    { title: "DRUM RINGS", image: img7, altTitle:"DRUM RINGS" },
    { title: "ROLES", image: img8, altTitle:"ROLES" },
    { title: "CONTROL COMPONENTS", image: img9, altTitle:"CONTROL COMPONENTS" },
    { title: "ELECTRICAL PARTS", image: img10, altTitle:"ELECTRICAL PARTS" },
    { title: "TRIASO VALVES", image: img11, altTitle:"TRIASO VALVES" },
    { title: "EXPORT OF SPARE PARTS", image: img12, altTitle:"EXPORT OF SPARE PARTS" },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full mt-6 flex justify-center items-center">
        <h1 className="font-bold text-xl md:text-2xl">GALLERY</h1>
      </div>
      <div className="w-full px-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 py-10 max-w-7xl">
        {ItemGallery.map((element, i) => (
          <div
            className="w-full bg-white flex cursor-pointer shadow hover:scale-105 transition-transform"
            onClick={() => {
              setCurrentImg(element.image.src);
              setCurrentAlt (element.altTitle)
              setIsOpen(true);
            }}
          >
            <div className="w-1 md:w-2 self-stretch bg-blueMain text-blueMain px-1 md:px-2"></div>

            <div className="w-full relative group">
              <img
                src={element.image.src}
                alt={element.title}
                className="w-full h-auto z-10"
                loading="lazy"
              />
              <div
                className="w-full h-full flex items-center justify-center bg-black/50 absolute top-0 z-20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              >
                <h1 className="text-xs md:text-sm text-white font-bold text-center">
                  {element.title}
                </h1>
              </div>
            </div>
          </div>
        ))}

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-11/12 md:w-1/2">
              {/* Botón cerrar */}
              <button
                className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 shadow hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>

              {/* Imagen */}
              <img
                src={currentImg}
                alt={currentAlt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpareGallery;
