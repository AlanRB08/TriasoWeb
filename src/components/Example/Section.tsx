'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current || !nextSectionRef.current) return;

    const box = boxRef.current;
    const target = nextSectionRef.current;

    // Calculamos la distancia entre top del box y top del siguiente section
    const distanceToMove =
      target.getBoundingClientRect().top -
      box.getBoundingClientRect().top;

    const ctx = gsap.context(() => {
      gsap.to(box, {
        y: distanceToMove + 100,
        ease: 'none',
        scrollTrigger: {
          trigger: box,
          start: 'top-=200 20%', // cuando el top del box toca el top del viewport
          end: () => `+=${distanceToMove}`, // cuando se mueve la misma distancia
          scrub: true,
          markers: true
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Espaciado para iniciar scroll */}
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div
          ref={boxRef}
          className="w-32 h-32 bg-blue-500 text-white font-bold flex items-center justify-center shadow-lg rounded will-change-transform transform-gpu"
        >
          Muevo
        </div>
      </div>

      {/* Sección destino */}
      <div
        ref={nextSectionRef}
        className="h-screen bg-red-300 flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold">Destino</h2>
      </div>
    </div>
  );
};

export default Section;
