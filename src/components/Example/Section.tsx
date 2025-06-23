import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../../assets/images/IntegralAsphalt/reinforced.png';
import img2 from '../../assets/images/IntegralAsphalt/reinfo1.png';

gsap.registerPlugin(ScrollTrigger);

export default function Section() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      clipPath: "inset(0% 0% 100% 0%)", // recorta de arriba a abajo
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="relative">
      {/* Espacio arriba */}
      <div className="h-[100vh] bg-black flex items-center justify-center text-white">
        <h1 className="text-3xl">Scroll hacia abajo 👇</h1>
      </div>

      {/* Contenedor con la animación */}
      <div ref={containerRef} className="relative h-[200vh] overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="relative w-[250px] h-[600px]">
          <img
            src={img1.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen de fondo"
          />
          <img
            ref={imgRef}
            src={img2.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen superior"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>
      </div>

      {/* Espacio abajo */}
      <div className="h-[100vh] bg-black flex items-center justify-center text-white">
        <h1 className="text-3xl">Fin de la animación ☝️</h1>
      </div>
    </div>
  );
}
