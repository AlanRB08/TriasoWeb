<<<<<<< HEAD
import React from "react";
import { useState } from "react";
=======
import React from 'react'
import { useState } from 'react';
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
import img1 from "../../../assets/images/Service/Spare/Gallery/SpareParts01.jpg";
import img2 from "../../../assets/images/Service/Spare/Gallery/SpareParts-02.jpg";
import img3 from "../../../assets/images/Service/Spare/Gallery/SpareParts-03.jpg";
import img4 from "../../../assets/images/Service/Spare/Gallery/SpareParts-04.jpg";
import img5 from "../../../assets/images/Service/Spare/Gallery/SpareParts-05.jpg";
import img6 from "../../../assets/images/Service/Spare/Gallery/SpareParts-06.jpg";
import img7 from "../../../assets/images/Service/Spare/Gallery/SpareParts-07.jpg";
import img8 from "../../../assets/images/Service/Spare/Gallery/SpareParts-08.jpg";
import img9 from "../../../assets/images/Service/Spare/Gallery/SpareParts-10.jpg";
import img10 from "../../../assets/images/Service/Spare/Gallery/SpareParts-11.jpg";
import img11 from "../../../assets/images/Service/Spare/Gallery/SpareParts-12.jpg";
import img12 from "../../../assets/images/Service/Spare/Gallery/SpareParts-13.jpg";
const SpareGallery = () => {
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const ItemGallery = [
    { title: "REDUCTORES", image: img1 },
    { title: "MOTORES ELECTRICOS", image: img2 },
    { title: "BANDAS", image: img3 },
    { title: "RODILLOS", image: img4 },
    { title: "PARTES DE CADENAS DE ELEVADORES", image: img5 },
    { title: "POLEAS", image: img6 },
    { title: "AROS DE TAMBORES", image: img7 },
    { title: "ROLES", image: img8 },
    { title: "PARTES DE CONTROL", image: img9 },
    { title: "PARTES ELECTRICAS", image: img10 },
    { title: "VÁLVULAS TRIASO", image: img11 },
    { title: "EXPORTACIÓN DE REFACCIONES", image: img12 },
  ];
  return (
    <div className="w-full px-8 md:px-72 grid grid-cols-2 md:grid-cols-3 gap-10 py-10">
      {ItemGallery.map((element, i) => (
        <div
          className="w-full bg-white flex cursor-pointer shadow hover:scale-105 transition-transform"
          onClick={() => {
            setCurrentImg(element.image.src);
            setIsOpen(true);
          }}
        >
          <div className="w-2 self-stretch bg-blueMain text-blueMain px-2"></div>

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
=======
    const [isOpen, setIsOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState("");
    const ItemGallery = [
         {title:"REDUCTORES",
            image : img1
        },
         {title:"MOTORES ELECTRICOS",
            image : img2
        },
         {title:"BANDAS",
            image : img3
        },
         {title:"RODILLOS",
            image : img4
        },
         {title:"PARTES DE CADENAS DE ELEVADORES",
            image : img5
        },
         {title:"POLEAS",
            image : img6
        },
         {title:"AROS DE TAMBORES",
            image : img7
        },
         {title:"ROLES",
            image : img8
        },
         {title:"PARTES DE CONTROL",
            image : img9
        },
         {title:"PARTES ELECTRICAS",
            image : img10
        },
         {title:"VÁLVULAS TRIASO",
            image : img11
        },
         {title:"EXPORTACIÓN DE REFACCIONES",
            image : img12
        }
    ]
  return (
    <div className="w-full px-8 md:px-72 grid grid-cols-2 md:grid-cols-3 gap-10 py-10">
      {ItemGallery.map((element, i) => (
        <div className="w-full bg-white flex cursor-pointer shadow hover:scale-105 transition-transform"
  onClick={() => {
    setCurrentImg(element.image.src);
    setIsOpen(true);
  }}
>
  <div className="w-2 self-stretch bg-blueMain text-blueMain px-2"></div>

  <div className="w-full relative group">
    <img 
      src={element.image.src} 
      alt={element.title} 
      className="w-full h-auto z-10" 
      loading="lazy"
    />
    <div className="w-full h-full flex items-center justify-center bg-black/50 absolute top-0 z-20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <h1 className="text-xs md:text-sm text-white font-bold text-center">
        {element.title}
      </h1>
    </div>
  </div>
</div>

>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
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
              alt="Spare Part"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
};

export default SpareGallery;
=======
}

export default SpareGallery
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
