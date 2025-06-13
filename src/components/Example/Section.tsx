import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reinfo1 from '../../assets/images/IntegralAsphalt/reinfo1.png';
import reinforcedBlue from '../../assets/images/IntegralAsphalt/reinforced.png';

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const img3DRef = useRef<HTMLImageElement>(null);
  const imgPlanoRef = useRef<HTMLImageElement>(null);
  const text3DRef = useRef<HTMLDivElement>(null);
  const textPlanoRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !img3DRef.current ||
      !imgPlanoRef.current ||
      !text3DRef.current ||
      !textPlanoRef.current ||
      !cloudsRef.current
    )
      return;

    // Timeline para la animación scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true, // Descomenta para debug
      },
    });

    // Fondo nubes: leve movimiento vertical
    tl.to(
      cloudsRef.current,
      {
        y: -50,
        ease: "none",
      },
      0
    );

    // Imagen 3D: subir, desvanecer y reducir escala
    tl.to(
      img3DRef.current,
      {
        y: -120,
        opacity: 0,
        scale: 0.8,
        ease: "power1.out",
      },
      0
    );

    // Texto 3D: desaparecer
    tl.to(
      text3DRef.current,
      {
        opacity: 0,
        y: -30,
        ease: "power1.out",
      },
      0
    );

    // Imagen plano: bajar, aparecer y escalar a 1
    tl.fromTo(
      imgPlanoRef.current,
      { y: 120, opacity: 0, scale: 1.2 },
      { y: 0, opacity: 1, scale: 1, ease: "power1.out" },
      0
    );

    // Texto plano: aparecer
    tl.fromTo(
      textPlanoRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, ease: "power1.out" },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white font-sans relative">
      <div style={{ height: "100vh" }} />
      <section
        ref={containerRef}
        className="relative w-full h-[700px] max-w-5xl mx-auto overflow-hidden"
      >
        {/* Fondo nubes (opcional) */}
        <div
          ref={cloudsRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20 pointer-events-none"
        />

        {/* Imagen 3D del avión */}
        <img
          ref={img3DRef}
          src="https://via.placeholder.com/900x450/1e3a8a/ffffff?text=Avión+3D"
          alt="Avión 3D"
          className="absolute top-1/2 left-1/2 max-w-full w-[900px] -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ transformOrigin: "center center" }}
        />

        {/* Texto 3D */}
        <div
          ref={text3DRef}
          className="absolute top-10 left-1/2 -translate-x-1/2 z-30 text-center text-3xl font-bold drop-shadow-lg"
        >
          Vista 3D del avión
        </div>

        {/* Imagen plano CAD */}
        <img
          ref={imgPlanoRef}
          src="https://via.placeholder.com/900x450/22c55e/ffffff?text=Plano+CAD"
          alt="Plano CAD"
          className="absolute top-1/2 left-1/2 max-w-full w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-0 z-10"
          style={{ transformOrigin: "center center" }}
        />

        {/* Texto plano */}
        <div
          ref={textPlanoRef}
          className="absolute top-10 left-1/2 -translate-x-1/2 z-30 text-center text-3xl font-bold drop-shadow-lg opacity-0"
        >
          Vista planos CAD
        </div>
      </section>
      <div style={{ height: "100vh" }} />
    </div>
  );
};
export default Section;