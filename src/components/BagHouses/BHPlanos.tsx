import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reinfo1 from '../../assets/images/IntegralAsphalt/reinfo1.png';
import reinforcedBlue from '../../assets/images/IntegralAsphalt/reinforced.png';

gsap.registerPlugin(ScrollTrigger);

const BHPlanos = () => {
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
  const imgRef = useRef<HTMLImageElement | null>(null);
  const clipTargetRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLImageElement | null>(null);

  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  //ESTADOS DE LOS DROPWDOWNS
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    C1_1: false,
    C1_2: false,
    C2_1: false,
    C2_2: false,
    C3_1: false,
    C3_2: false,
    C3_3: false,
    C4_1: false,
    C5_1: false,
    C5_2: false,
    C5_3: false,
  });
  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    updateElements(newUnit); // Actualiza los elementos en el DOM
  };
  // Función que busca elementos con data-metric/data-imperial y los actualiza
  const updateElements = (currentUnit: "metric" | "imperial") => {
    const elements = document.querySelectorAll("[data-metric][data-imperial]");
    elements.forEach((element) => {
      const value = element.getAttribute(`data-${currentUnit}`);
      if (value) {
        element.textContent = value;
      }
    });
  };
  // Efecto para actualizar al cargar (opcional)
  useEffect(() => {
    updateElements(unit);
  }, []);
  //clipath
  useEffect(() => {
    const box = boxRef.current;
    const target = nextSectionRef.current; // Target original para el desplazamiento
    const clipTarget = clipTargetRef.current; // Nuevo target para el clipPath
    const img = imgRef.current;
    const otro = otroElemento.current;
    const options = optionsRef.current;
    const col1 = columnGrid1.current;
    const col2 = columnGrid2.current;
    const blue = blueRef.current;
  
    // Verificación de elementos
    if (!box || !target || !clipTarget || !img || !otro || !options || !col1 || !col2 || !blue ) return;

    // Reset si no es la pestaña activa
  if (activeTab !== 3) {
  gsap.set(box, {
    y: 0,
    opacity: 0,
    display: 'none',
  });
  gsap.set(blue, {
    opacity: 0,
    display: 'none',
    visibility: "hidden",
  });
  gsap.set(img, {
    opacity: 0,
    display: 'none',
    clipPath: "inset(0% 0% 100% 0%)", // <- esta línea es importante
  });
  return;
}

// Configuración inicial cuando el tab es 3
gsap.set(box, {
  opacity: 1,
  display: 'block',
});
gsap.set(blue, {
  opacity: 1,
  display: 'block',
  visibility: 'visible',
});
gsap.set(img, {
  opacity: 1,
  display: 'block',
  clipPath: "inset(0% 0% 0% 0%)",
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
    // ScrollTrigger principal
    const scrollTrig = ScrollTrigger.create({
      id: 'boxScroll',
      trigger: box,
      start: 'top+=70 20%',
      end: `+=${adjustedScrollDistance}`,
      scrub: true,
      markers: false, // Cambiar a true para debugging si necesitas
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
  
        // Animaciones de otros elementos (se mantienen igual)
        gsap.to(otro, {
          opacity: p >= 0.8 ? 1 : 0,
          y: p >= 0.8 ? 0 : -50,
          scale: p >= 0.8 ? 1 : 0.95,
          ease: 'none',
          duration: 0.8,
        });
  
        gsap.to(options, {
          opacity: p >= 0.9 ? 1 : 0,
          y: p >= 0.9 ? 0 : -50,
          scale: p >= 0.9 ? 1 : 0.95,
          ease: 'none',
          duration: 0.8,
        });
  
        gsap.to(col1, {
          opacity: p >= 0.9 ? 1 : 0,
          x: p >= 0.9 ? 0 : -50,
          scale: p >= 0.9 ? 1 : 0.95,
          ease: 'none',
          duration: 0.8,
        });
  
        gsap.to(col2, {
          opacity: p >= 0.9 ? 1 : 0,
          x: p >= 0.9 ? 0 : 50,
          scale: p >= 0.9 ? 1 : 0.95,
          ease: 'none',
          duration: 0.8,
        });
      },
    });
  
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);
  
    return () => {
      scrollTrig?.kill();
      clearTimeout(refreshTimer);
    };
}, [activeTab]);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="h-[150vh] relative flex items-center justify-center w-full">
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
             z-20 w-[200px] h-[588px]"
        >
          <img
            ref={blueRef}
            src={reinforcedBlue.src}
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
            src={reinfo1.src}
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
        
      </div>
      

      {/* Contenido de los tabs */}
      <div className="w-full mt-20 mb-10" id='tabsSection' ref={nextSectionRef}>
        {activeTab === 3 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full'>
                <div className='flex flex-col w-full h-full items-start justify-between gap-0 order-2 md:order-1' id='column1' ref={columnGrid1}>
                    <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-base w-full pb-3'>MAINTENANCE & ADVANTAGES</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>Easy bag replacement with quick-change frames.</li>
                            <li>Factory-installed bag powder, no startup waiting time.</li>
                            <li>Access doors and inspection hatches for fast servicing</li>
                            <li>Galvanized bolts for rust-free durability and easy disassembly.</li>
                            <li>Reduced wear and extended bag life due to optimized airflow design.</li>
                            <li>Energy savings through improved cleaning efficiency and reduced backpressure.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-base w-full pb-3'>DURABILITY & SAFETY</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>Thermal insulation with 2" fiberglass to prevent overcooling.</li>
                            <li>Heat resistance up to 204 °C continuous / 220 °C peak with Nomex bags.</li>
                            <li>Up to 260 °C peak with P84 polyimide bags.</li>
                            <li>Protective sheet metal guards with perforations for operator safety.</li>
                            <li>Automatic exhaust damper with electric actuator for overtemperature protection.</li>
                            <li>Cold-air window system prevents bag damage in overheating conditions.</li>
                            <li>Chimney with ecological test ports for environmental monitoring.</li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-2 flex items-start mb-6 md:mb-0 justify-center w-full h-[588px] order-1 md:order-2'>
                </div>
                <div className='flex flex-col items-start justify-between w-full h-full col-span-1 order-3 md:order-3' id='column2' ref={columnGrid2}>
                    <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-base w-full pb-3'>DESIGN & OPERATION</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>Foldable support legs and transport skids for fast setup.</li>
                            <li>Exhaust fan with curved blades: quieter and more efficient.</li>
                            <li>Gas extractor with centrifugal separation, removes ~70% of dust load before reaching bags.</li>
                            <li>Knockout chamber and internal baffles ensure smooth airflow and bag protection.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-base w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>Siemens motors and industrial-grade components.</li>
                            <li>DHeavy-duty wiring, polarized for safe grounding.</li>
                            <li>Quick-connect plugs with weather protection and clear labeling.</li>
                            <li>Oversized Browning reducers and steel pulleys with bushing system.</li>
                            <li>Integrated PLC control system with configurable cleaning programs.</li>
                            <li>Touch-screen interface for cycle adjustment and monitoring.</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-center items-start'>
                    <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                                <h1 className='font-bold lg:text-xl text-base w-full pb-3'>FILTRATION SYSTEM</h1>
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
                            <ul className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                <li>99.99% filtration efficiency from startup.</li>
                                <li>Supersonic 3D-printed carbon alloy nozzles for. cleaning pulses.</li>
                                <li>Pulse jet cleaning cycles, programmable via PLC.</li>
                                <li>Uniform fines return into the drum mixer.</li>
                                <li>Self-contained, integrated systems for portable or stationary plants.</li>
                            </ul>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-4 text-white col-span-2  w-full px-0 md:px-10 lg:px-36 self-center'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                                <h1 className='font-bold lg:text-xl text-base w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
                                <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                ...prev,
                                C3_2: !prev.C3_2
                                }))}>
                                    <svg width="28px" height="28px"
                                    stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000"
                                    className={`transition-transform duration-300 transform ${
                                        openSections.C3_2 ? "rotate-180" : ""
                                    }`}>
                                        <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <ul className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                <li>EPA</li>
                                <li>OSHA</li>
                                <li>DOT</li>
                                <li>UL wiring</li>
                            </ul>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                                <h1 className='font-bold lg:text-xl text-base w-full pb-3'>PORTABILITY</h1>
                                <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                ...prev,
                                C3_3: !prev.C3_3
                                }))}>
                                    <svg width="28px" height="28px"
                                    stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000"
                                    className={`transition-transform duration-300 transform ${
                                        openSections.C3_3 ? "rotate-180" : ""
                                    }`}>
                                        <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <ul className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                <li>Designed for relocation.</li>
                                <li>Low-profile body for easy transport and stability</li>
                                <li>Transportable on flatbed trailer.</li>
                                <li>Setup no requires crane or hoisting equipment.</li>
                                <li>Bolt-on support legs for fast on-site assembly.</li>
                                <li>DOT-compliant lighting and reflective markings for transport visibility.</li>
                                <li>Transport via flatbed or container-style chassis.</li>
                            </ul>
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

export default BHPlanos;
