import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reinfo1 from '../../assets/images/IntegralAsphalt/reinfo1.png';
import reinforcedBlue from '../../assets/images/IntegralAsphalt/reinforced.png';
import UnitSwitch from './UnitSwitch';
import TabsPlane from './TabsPlane';

gsap.registerPlugin(ScrollTrigger);

const PlanoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !nextSectionRef.current || !imageContainerRef.current) return;

    const container = containerRef.current;
    const nextSection = nextSectionRef.current;
    const imageContainer = imageContainerRef.current;

    const ctx = gsap.context(() => {
      // Animación de desplazamiento vertical sincronizada con scroll
      gsap.to(imageContainer, {
        y: () => {
          const containerRect = container.getBoundingClientRect();
          const nextRect = nextSection.getBoundingClientRect();
          // Queremos que la imagen se desplace hasta que su top toque el top de la siguiente sección
          return nextSection.offsetTop - container.offsetTop - imageContainer.offsetTop;
        },
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          endTrigger: nextSection,
          end: 'top top',
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
        }
      });

      // Animación clip reveal que empieza cuando el bottom de la imagen toque el top de la siguiente sección
      gsap.fromTo(
  topImageRef.current,
  { clipPath: 'inset(0 0 0% 0)' },
  {
    clipPath: 'inset(0 0 100% 0)',
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: () => {
        const imageBottomAbs = imageContainer.getBoundingClientRect().bottom + window.scrollY;
        const nextTopAbs = nextSection.offsetTop;
        // Queremos que empiece justo cuando bottom de imagen toque top de next section
        const startPosition = nextTopAbs - container.offsetTop;
        return `top+=${startPosition} top`;
      },
      end: () => {
        // Duración de la animación, por ejemplo 200px después de start
        const imageBottomAbs = imageContainer.getBoundingClientRect().bottom + window.scrollY;
        const nextTopAbs = nextSection.offsetTop;
        const startPosition = nextTopAbs - container.offsetTop;
        return `top+=${startPosition} top`;
      },
      scrub: true,
      markers: true,
      invalidateOnRefresh: true,
    }
  }
);

    }, containerRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center bg-green-400'>
      <div 
        className='px-8 md:px-52 bg-slate-500 relative h-screen flex items-center justify-center z-30' 
        ref={containerRef}
      >
        <div 
          ref={imageContainerRef}
          className='relative w-[255px] h-[697px] mx-auto'
          style={{ willChange: 'transform' }}
        >
          <div className='absolute inset-0 z-10'>
            <img 
              src={reinforcedBlue.src} 
              alt="" 
              className='w-full h-full object-cover'
            />
          </div>
          
          <div 
            ref={topImageRef}
            className='absolute inset-0 z-20 overflow-hidden'
            style={{ 
              clipPath: 'inset(0 0 100% 0)',
              willChange: 'clip-path'
            }}
          >
            <img 
              src={reinfo1.src} 
              alt="" 
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      <div 
        id='nadaSection' 
        ref={nextSectionRef} 
        className="bg-[url('/fondopatron.png')] bg-cover bg-center w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
      >
        <header className='mt-10 text-white'>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">Specifications</h1>
          <div className='flex items-center justify-center mt-10'>
            <h1 className='mr-3'>MEASURE:</h1>
            <UnitSwitch onChange={(unit) => console.log('Sistema cambiado a:', unit)} />
          </div>
        </header>
        <TabsPlane />  
      </div>
    </div>
  );
};

export default PlanoSection;
