import React from 'react'
import reinfo1 from '../../assets/images/IntegralAsphalt/reinfo1.png';
import reinforcedBlue from '../../assets/images/IntegralAsphalt/reinforced.png';
import UnitSwitch from './UnitSwitch';
import TabsPlane from './TabsPlane';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const PlanoSection = () => {
   const containerRef = useRef(null);
  const topImageRef = useRef(null);
  const bottomImageRef = useRef(null);
  const nextSectionRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current || !topImageRef.current || !bottomImageRef.current || !nextSectionRef.current) return;

    // Calculamos la posición donde debe quedar fija la imagen inferior
    const finalPosition = window.innerHeight * 0.8; // Ajusta este valor según necesites

    // Animación para la imagen superior (se mueve y desaparece)
    gsap.to(topImageRef.current, {
      y: finalPosition,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        endTrigger: "#nadaSection",
        end: "top 20%",
        scrub: true,
        markers: true
      }
    });

    // Animación para la imagen inferior (se mueve pero no desaparece)
    gsap.to(bottomImageRef.current, {
      y: finalPosition,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        endTrigger: "#nadaSection",
        end: "top 20%",
        scrub: true,
        markers: true,
        onLeave: () => {
          // Cuando termina el scroll, fijamos la imagen inferior en la siguiente sección
          gsap.set(bottomImageRef.current, {
            position: 'fixed',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10
          });
        },
        onEnterBack: () => {
          // Si el usuario hace scroll hacia arriba, volvemos a la posición inicial
          gsap.set(bottomImageRef.current, {
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'none'
          });
        }
      }
    });

    // Pin del contenedor principal
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 20%",
      endTrigger: "#nadaSection",
      end: "top 20%",
      pin: true,
      markers: true
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  
  return (
    <div className='w-full flex flex-col items-center justify-center bg-green-400'>
      
       <div className='px-8 md:px-52 bg-slate-500 relative h-screen' ref={containerRef}>
        {/* Imagen superior (se mueve y desaparece) */}
        <div ref={topImageRef} className='absolute top-0 left-0 w-[255px] h-[697px] z-20'>
          <img src={reinfo1.src} alt="" className='w-full h-full object-cover' />
        </div>

        {/* Imagen inferior (se mueve y luego queda fija) */}
        <div ref={bottomImageRef} className='absolute top-0 left-0 w-[255px] h-[697px] z-10'>
          <img src={reinforcedBlue.src} alt="" className='w-full h-full object-cover' />
        </div>
      </div>



      

      <div id='nadaSection' ref={nextSectionRef} className="bg-[url('/fondopatron.png')] bg-cover bg-center w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10">
        <header className='mt-10 text-white'>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">Specifications</h1>
          <div className='flex items-center justify-center mt-10'>
              <h1 className='mr-3'>MEASURE:</h1>
              <UnitSwitch  onChange={(unit) => {
  console.log('Sistema cambiado a:', unit);
  // Aquí puedes cambiar tus variables dependiendo de "value"
}}/>
          </div>
        </header>
        <TabsPlane></TabsPlane>  
      </div>
    </div>
    
  )
  
}

export default PlanoSection;