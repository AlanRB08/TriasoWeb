import React from 'react'
import { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState("");
    const ItemGallery = [
         {title:"Reductores",
            image : img1
        },
         {title:"Motores eléctricos",
            image : img2
        },
         {title:"Bandas",
            image : img3
        },
         {title:"Rodillos",
            image : img4
        },
         {title:"Partes de cadenas de elevadores",
            image : img5
        },
         {title:"Poleas",
            image : img6
        },
         {title:"Aros de tambores",
            image : img7
        },
         {title:"Roles",
            image : img8
        },
         {title:"Partes de control",
            image : img9
        },
         {title:"Partes eléctricas",
            image : img10
        },
         {title:"Válvulas Triaso",
            image : img11
        },
         {title:"Exportación de refacciones",
            image : img12
        }
    ]
  return (
    <div className="w-full px-8 md:px-72 grid grid-cols-2 md:grid-cols-3 gap-10 py-10">
      {ItemGallery.map((element, i) => (
        <div
          key={i}
          className="w-full bg-white cursor-pointer shadow hover:scale-105 transition-transform"
          onClick={() => {
            setCurrentImg(element.image.src);
            setIsOpen(true);
          }}
        >
          <img src={element.image.src} alt={element.title} className="w-full h-auto" />
          <div className="w-full p-3 bg-blueMain">
            <h2 className="text-base md:text-lg font-bold text-white">
              {element.title}
            </h2>
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
              alt="Spare Part"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SpareGallery