import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import tab3Main2 from '../../assets/images/DrumMixers/tab3Main2.png';
import tab3Right from '../../assets/images/DrumMixers/tab3Right.png';
import tab1Main from '../../assets/images/DrumMixers/tab1Main.png';
import tab1Left from '../../assets/images/DrumMixers/tab1Left.png';

const toggleConfig = [
    {
        width: 86,
        height: 108.7,
        length: 82,
    }
]
gsap.registerPlugin(ScrollTrigger);

const FPHPlanos = () => {
  //tabs states
  const [activeTab, setActiveTab] = useState(3);
  //animation 
  const boxRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const otroElemento = useRef<HTMLDivElement>(null);
  const columnGrid1 = useRef<HTMLDivElement>(null);
  const columnGrid2 = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const clipTargetRef = useRef<HTMLDivElement>(null);
    // valor de cm a pies
const cmToFeet = 0.0328084;
  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  //ESTADOS DE LOS DROPWDOWNS
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    C1_1: false,
    C1_2: false,
    C1_3: false,
    C2_1: false,
    C2_2: false,
    C2_3: false,
    C3_1: false,
    C3_2: false,
    C3_3: false,
    C3_4: false,
    C3_5: false,
    C4_1: false,
    C4_2: false,
    C5_1: false,
    C5_2: false,
  });

  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };
 useEffect(() => {
  const box = boxRef.current;
  const target = nextSectionRef.current;
  const otro = otroElemento.current;
  const options = optionsRef.current;
  const col1 = columnGrid1.current;
  const col2 = columnGrid2.current;
  const img = imgRef.current;
  const clipTarget = clipTargetRef.current;
  

  if (!box || !target || !otro || !img|| !clipTarget|| !options || !col1 || !col2) return;


  if (activeTab !== 3) {
    gsap.set(box, {
      y: 0,
      opacity: 0,
      display: 'none',
    });
    gsap.set(img, {
      clipPath: 'inset(100% 0% 0% 0%)', // Oculta completamente la imagen
      opacity: 0,
    });
    return;
  }

  gsap.set(box, {
    opacity: 1,
    display: 'block',
  });

   // Cálculo de posiciones absolutas
    const boxTopAbs = box.getBoundingClientRect().top + window.scrollY;
    const boxHeight = box.offsetHeight;
    const boxBottomAbs = boxTopAbs + boxHeight;
    const targetTopAbs = target.getBoundingClientRect().top + window.scrollY;
    const clipTargetTopAbs = clipTarget.getBoundingClientRect().top + window.scrollY;

    // Desplazamiento total (se mantiene con el target original)
    const distanceToMove = targetTopAbs - boxTopAbs;

    // Nuevos cálculos para clipPath basado en clipTarget
    const clipStart = (clipTargetTopAbs - boxBottomAbs) / distanceToMove;
    const clipEnd = (clipTargetTopAbs - boxTopAbs) / distanceToMove;
    const clipStartClamped = Math.max(0, Math.min(clipStart, 1));
    const clipEndClamped = Math.max(0, Math.min(clipEnd, 1));
    
    const scrollDistanceReductionFactor = 0.8; // Reduce el scroll a la mitad (50%)
  const adjustedDistanceToMove = distanceToMove; // Mantenemos la misma distancia física
  const adjustedScrollDistance = distanceToMove * scrollDistanceReductionFactor; // Scroll más corto

  const scrollTrig = ScrollTrigger.create({
    id: 'boxScroll',
    trigger: box,
    start: 'top+=70 20%',
    end: `+=${adjustedScrollDistance}`,
    scrub: true,
    markers: false,
    animation: gsap.to(box, {
      y: adjustedDistanceToMove,
      ease: 'none',
    }),
    onUpdate: (self) => {
      const p = self.progress;
       // ClipPath interpolado usando clipTarget
              let clipProgress = 0;
              if (clipEndClamped > clipStartClamped) {
                clipProgress = (p - clipStartClamped) / (clipEndClamped - clipStartClamped);
              }
              clipProgress = Math.max(0, Math.min(clipProgress, 1));
        
              gsap.set(img, {
                clipPath: `inset(0% 0% ${clipProgress * 100}% 0%)`,
              });

      gsap.to(otro, {
        opacity: p >= 0.8 && p <= 1.0 ? 1 : 0,
        y: p >= 0.8 && p <= 1.0 ? 0 : -50,
        scale: p >= 0.8 && p <= 1.0 ? 1 : 0.95,
        ease: 'none',
        duration: 0.8,
      });

      gsap.to(options, {
        opacity: p >= 0.9 && p <= 1.0 ? 1 : 0,
        y: p >= 0.9 && p <= 1.0 ? 0 : -50,
        scale: p >= 0.9 && p <= 1.0 ? 1 : 0.95,
        ease: 'none',
        duration: 0.8,
      });

      gsap.to(col1, {
        opacity: p >= 0.9 && p <= 1 ? 1 : 0,
        x: p >= 0.9 && p <= 1 ? 0 : -50,
        scale: p >= 0.9 && p <= 1 ? 1 : 0.95,
        ease: 'none',
        duration: 0.8,
      });

      gsap.to(col2, {
        opacity: p >= 0.9 && p <= 1.0 ? 1 : 0,
        x: p >= 0.9 && p <= 1.0 ? 0 : 50,
        scale: p >= 0.9 && p <= 1.0 ? 1 : 0.95,
        ease: 'none',
        duration: 0.8,
      });
    }
  });

  const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

  return () => {
    scrollTrig?.kill(); // <-- evita error si no existe
    clearTimeout(refreshTimer);
  };
}, [activeTab]);

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="h-[150vh] relative flex items-center justify-center bg-bgMain w-full">
      <div 
        className='absolute bottom-0 w-full h-4/6 overflow-hidden'
        style={{
            backgroundImage: 'url(/fondoAsphalt.png)',
            backgroundRepeat: 'repeat-x', // Se repetirá horizontalmente si es necesario
            backgroundPosition: 'center bottom',
            backgroundSize: 'auto 100%' // Mantiene la altura completa y el ancho automático (se repetirá)
        }}
        ></div>
        <div
          id='boxScroll'
          ref={boxRef}
          className="text-white font-bold
           flex items-center justify-center
            rounded will-change-transform transform-gpu
             z-20 w-[250px] h-[600px]"
        >
          <img
            src={tab1Main.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen de fondo"
            style={{
      display: activeTab === 3 ? 'block' : 'none',
      opacity: activeTab === 3 ? 1 : 0,
      visibility: activeTab === 3 ? 'visible' : 'hidden',
    }}
          />
          <img
            ref={imgRef}
            src={tab3Main2.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen superior"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>
      </div>
      <div 
        ref={clipTargetRef}
            id='sectionNueva'  
            className="bg-[url('/fondopatron.png')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
        >
        <header className='mt-10 text-white' ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">Specifications</h1>
          <div className='flex items-center justify-center mt-10'>
            <h1 className='mr-3' id='measure'>MEASURE:</h1>
            <div
                onClick={toggleUnit}
                className="relative w-48 h-10 rounded-full border border-white cursor-pointer select-none"
                >
                {/* Fondo deslizante */}
                <div
                    className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${
                    unit === 'metric' ? 'translate-x-full' : ''
                    }`}
                ></div>

                {/* Texto sobrepuesto */}
                <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-bold">
                    <span className={unit === 'imperial' ? 'text-black' : 'text-white'}>
                    IMPERIAL
                    </span>
                    <span className={unit === 'metric' ? 'text-black' : 'text-white'}>
                    METRIC
                    </span>
                </div>
                </div>
          </div>
        </header>
        <div className="w-full px-8 lg:px-8 mt-14">
      {/* Contenedor de los botones */}
      <div id='options' ref={optionsRef} className='w-full'>
      {/*<h1 className='text-white lg:text-xl text-lg text-center mb-10'>PRODUCTION CAPACITY:</h1>
      <div className="flex justify-center gap-2 md:gap-10">
         Botón 3 
        <button
          onClick={() => setActiveTab(3)}
          className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-3xl md:rounded-full ${
            activeTab === 3
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          140-180 Tph
        </button> 
      </div>*/}
      </div>
      {/* Contenido de los tabs */}
      <div className="w-full mt-20 mb-10" id='tabsSection' ref={nextSectionRef}>
        {activeTab === 3 && (
                    <div className='flex flex-col items-center justify-center' ref={containerRef}>
                        <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full'>
                            <div className='flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1' id='column1' ref={columnGrid1}>
                                <div className='flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0'>
                                    <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-base w-full pb-3'>DESIGN & OPERATION</h1>
                                        <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C1_1: !prev.C1_1
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C1_1 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <ul className={`font-thin transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                        <li>Specifically designed for use with Triaso burners.</li>
                                        <li>Compatible with alternate fuels for efficient combustion.</li>
                                        <li>Prevents contamination of the mix with fuel residues.</li>
                                    </ul>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                                <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-base w-full pb-3'>HEATING & SYSTEM</h1>
                                        <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C1_2: !prev.C1_2
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C1_2 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <ul className={`font-thin transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                        <li>In-line electric resistance of 13.5 kW.</li>
                                        <li>Heats fuel up to 40 °C with a flow of 840 liters per hour.</li>
                                        <li>Safety feature prevents activation if no fuel is present in the pipeline.</li>
                                        <li>Accurate control of the desired temperature.</li>
                                    </ul>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                                <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-base w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                                        <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C1_2: !prev.C1_2
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C1_2 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <ul className={`font-thin transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                        <li>Industrial-grade motors and components</li>
                                        <li>Simple wiring system for easy maintenance</li>
                                        <li>Weather-protected electrical connections</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-2 flex items-start justify-center w-full min-h-[600px] order-1 md:order-2'>
                                
                            </div>
                            <div className='flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10' id='column2' ref={columnGrid2}>
                                <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                                    <div className='w-full flex justify-between border-b border-b-white'>
                                            <h1 className='font-bold lg:text-xl text-base w-full pb-3'>FILTRATION SYSTEM</h1>
                                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                            ...prev,
                                            C2_1: !prev.C2_1
                                            }))}>
                                                <svg width="28px" height="28px"
                                                stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" color="#000000"
                                                className={`transition-transform duration-300 transform ${
                                                    openSections.C2_1 ? "rotate-180" : ""
                                                }`}>
                                                    <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul className={`font-thin transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                            <li>Integrated strainer for internal fuel filtration.</li>
                                            <li>Removes impurities larger than mesh 100.</li>
                                            <li>Easy to clean, no tools required.</li>
                                        </ul>
                                </div>
                                <div className='text-white font-normal w-full flex flex-col gap-4 justify-between h-full'>
                                        <div className='w-full flex justify-between border-b border-b-white'>
                                            <h1 className='font-bold lg:text-xl text-base w-full pb-3'>MAINTENANCE & ADVANTAGES</h1>
                                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                            ...prev,
                                            C2_2: !prev.C2_2
                                            }))}>
                                                <svg width="28px" height="28px"
                                                stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" color="#000000"
                                                className={`transition-transform duration-300 transform ${
                                                    openSections.C2_2 ? "rotate-180" : ""
                                                }`}>
                                                    <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block md:mb-0`}>
                                            <li>Includes all required piping and valves for operation.</li>
                                            <li>Independent components for quick and low-cost maintenance.</li>
                                            <li>Reliable and durable design for continuous operation.</li>
                                        </ul>
                                </div>
                                <div className='text-white font-normal w-full flex flex-col gap-4 justify-between h-full'>
                                        <div className='w-full flex justify-between border-b border-b-white'>
                                            <h1 className='font-bold lg:text-xl text-base w-full pb-3'>DURABILITY & SAFETY</h1>
                                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                            ...prev,
                                            C2_2: !prev.C2_2
                                            }))}>
                                                <svg width="28px" height="28px"
                                                stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" color="#000000"
                                                className={`transition-transform duration-300 transform ${
                                                    openSections.C2_2 ? "rotate-180" : ""
                                                }`}>
                                                    <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block md:mb-0`}>
                                            <li>Thermal insulation to reduce external surface temperature.</li>
                                            <li>Corrosion-resistant construction for extended service life.</li>
                                            <li>Bolted joints and coated surfaces for durability.</li>
                                            <li>Electrostatic paint finish with strong adhesion.</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap'>
                        <div className='flex flex-col items-center justify-center shrink-0 min-w-[272px]'>
                        <div className='flex items-center justify-center w-[135px] h-[60px] self-start'>
                            <div className='border-dotted border-l border-l-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4'>
                                {unit === 'metric'
                                ? `${toggleConfig[0].width.toFixed(1) ?? ''} cm`
                                : `${((toggleConfig[0].width ?? 0) * cmToFeet).toFixed(1)} ft`}
                            </p>
                            <div className='border-dotted border-r border-r-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14"  // Ajustado para recortar espacio vacío
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='w-[372px] h-[285px] flex items-center justify-center'>
                            <img 
                                src={tab1Left.src} 
                                alt="" 
                                className='max-w-full max-h-full object-contain'
                            />
                        </div>
                            </div>
                            <div className='flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0'>
                                <div className='border-dotted border-t border-t-white w-full h-full flex items-center justify-center'>
                                    <div className='bg-white w-[1px] h-full relative'>
                                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
                                            <svg 
                                                width="8" 
                                                height="8" 
                                                viewBox="6 5 12 10"  // Área ajustada al contenido real
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="block p-0 m-0 overflow-visible"
                                                style={{ shapeRendering: 'crispEdges' }}
                                                >
                                                <path 
                                                    fill-rule="evenodd" 
                                                    clip-rule="evenodd" 
                                                    d="M5.30711 15.287C5.4232 15.5673 5.69668 15.75 6.00002 15.75H18C18.3034 15.75 18.5768 15.5673 18.6929 15.287C18.809 15.0068 18.7449 14.6842 18.5304 14.4697L12.5304 8.46967C12.2375 8.17678 11.7626 8.17678 11.4697 8.46967L5.46969 14.4697C5.25519 14.6842 5.19103 15.0068 5.30711 15.287Z" 
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <p className='text-white text-lg'>
                                        {unit === 'metric'
                                ? `${toggleConfig[0].height?.toFixed(1) ?? ''} cm`
                                : `${((toggleConfig[0].height ?? 0) * cmToFeet).toFixed(1)} ft`}
                                    </p>
                                </div>
                                <div className='border-dotted border-b border-b-white w-full h-full flex items-center justify-center'>
                                    <div className='bg-white w-[1px] h-full relative'>
                                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                                            <svg 
                                                width="8" 
                                                height="8" 
                                                viewBox="6 8 12 10"  // Área ajustada al contenido real
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="block p-0 m-0 overflow-visible"
                                                style={{ shapeRendering: 'crispEdges' }}
                                                >
                                                <path 
                                                    fill-rule="evenodd" 
                                                    clip-rule="evenodd" 
                                                    d="M5.30711 8.71299C5.4232 8.43273 5.69668 8.25 6.00002 8.25H18C18.3034 8.25 18.5768 8.43273 18.6929 8.71299C18.809 8.99324 18.7449 9.31583 18.5304 9.53033L12.5304 15.5303C12.2375 15.8232 11.7626 15.8232 11.4697 15.5303L5.46969 9.53033C5.25519 9.31583 5.19103 8.99324 5.30711 8.71299Z" 
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center shrink-0 min-w-[744px]'>
                                <div className='flex items-center justify-center w-full h-[60px]'>
                                    <div className='border-dotted border-l border-l-white h-full w-full flex items-center justify-center'>
                                        <div className='bg-white h-[1px] w-full relative'>
                                            <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                            <svg 
                                                width="8" 
                                                height="8" 
                                                viewBox="8 5 8 14" 
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="block p-0 m-0 overflow-visible"
                                                style={{ shapeRendering: 'crispEdges' }}
                                                >
                                                <path 
                                                    fill-rule="evenodd" 
                                                    clip-rule="evenodd" 
                                                    d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z" 
                                                    fill="#ffffff"
                                                />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-white lg:text-lg text-base w-full text-center mx-4'>
                                        {unit === 'metric'
                                ? `${toggleConfig[0].length?.toFixed(1) ?? ''} cm`
                                : `${((toggleConfig[0].length ?? 0) * cmToFeet).toFixed(1)} ft`}
                                    </p>
                                    <div className='border-dotted border-r border-r-white h-full w-full flex items-center justify-center'>
                                        <div className='bg-white h-[1px] w-full relative'>
                                            <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                                            <svg 
                                                width="8" 
                                                height="8" 
                                                viewBox="8 5 8 14"  // Ajustado para recortar espacio vacío
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="block p-0 m-0 overflow-visible"
                                                style={{ shapeRendering: 'crispEdges' }}
                                                >
                                                <path 
                                                    fill-rule="evenodd" 
                                                    clip-rule="evenodd" 
                                                    d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z" 
                                                    fill="#ffffff"
                                                />
                                                </svg>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[285px] w-[744px] flex justify-center items-center'>
                                    <img src={tab3Right.src} alt="" className='h-full w-auto'/>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10'>
                            <div className='col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full'>
                                <div className='grid grid-cols-1 md:grid-cols-2 w-full md:gap-10'>
                                    <div className='text-white font-normal flex flex-col gap-4'>
                                    <div className='w-full flex justify-between border-b border-b-white'>
                                    <h1 className='font-bold lg:text-xl text-base w-full pb-3'>DIMENSIONS</h1>
                                    <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                    ...prev,
                                    C3_1: !prev.C3_1
                                    }))}>
                                        <svg width="28px" height="28px"
                                        stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#000000"
                                        className={`transition-transform duration-300 transform ${
                                            openSections.C3_1 ? "rotate-180" : ""
                                        }`}>
                                            <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${openSections.C3_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                        <div className='flex justify-between'>
                                            <h1>Length:</h1>
                                            <p>
                                                {unit === 'metric'
                                ? `${toggleConfig[0].length?.toFixed(1) ?? ''} cm`
                                : `${((toggleConfig[0].length ?? 0) * cmToFeet).toFixed(1)} ft`}
                                            </p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h1>Width:</h1>
                                            <p >
                                                {unit === 'metric'
                                ? `${toggleConfig[0].width?.toFixed(1) ?? ''} cm`
                                : `${((toggleConfig[0].width ?? 0) * cmToFeet).toFixed(1)} ft`}
                                            </p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h1>Height:</h1>
                                            <p >
                                                {unit === 'metric'
                                ? `${toggleConfig[0].height?.toFixed(1) ?? ''} cm`
                                : `${((toggleConfig[0].height ?? 0) * cmToFeet).toFixed(1)} ft`}
                                            </p>
                                        </div>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                )}
      </div>
    </div>
      </div>
    </div>
  );
};

export default FPHPlanos;
