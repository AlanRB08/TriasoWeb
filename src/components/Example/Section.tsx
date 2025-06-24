import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../../assets/images/IntegralAsphalt/reinforced.png';
import img2 from '../../assets/images/IntegralAsphalt/reinfo1.png';

gsap.registerPlugin(ScrollTrigger);

export default function Section() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);        // Este será #sectionNueva
  const startRef = useRef(null);            // Este será el elemento de inicio

  useEffect(() => {
    ScrollTrigger.create({
      trigger: startRef.current,
      endTrigger: containerRef.current,
      start: "top top",
      end: "top top",
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        // Controlar la animación manualmente con self.progress
        gsap.to(imgRef.current, {
          clipPath: `0% 0% inset(${(1 - self.progress) * 100}% 0%)`,
          ease: "none",
          overwrite: true
        });
      }
    });
  }, []);

  return (
    <div className="relative">
      {/* Elemento que marca el inicio del scroll */}
      <div ref={startRef} className="h-[100vh] bg-black flex items-center justify-center text-white">
        <h1 className="text-3xl">Inicio del scroll 👇</h1>
      </div>

      {/* Sección con las imágenes, será el endTrigger */}
      <div ref={containerRef} id="sectionNueva" className="relative h-[150vh] overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="relative w-[200px] h-[500px]">
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

      {/* Espacio extra para scroll */}
      <div className="h-[100vh] bg-black flex items-center justify-center text-white">
        <h1 className="text-3xl">Fin ☝️</h1>
      </div>
    </div>
  );
}
