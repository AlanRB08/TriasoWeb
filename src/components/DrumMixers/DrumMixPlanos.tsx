import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import caseta1 from '../../assets/images/DrumMixers/caseta1.png';
import caseta2 from '../../assets/images/DrumMixers/caseta2.png';
import tab3Main2 from '../../assets/images/DrumMixers/tab3Main2.png';
import tab3Right from '../../assets/images/DrumMixers/tab3Right.png';
import tab6Right from '../../assets/images/DrumMixers/tab6Right.png';
import tab6Left from '../../assets/images/DrumMixers/tab6Left.png';
import tab5Main from '../../assets/images/DrumMixers/tab5Main.png';
import tab5Left from '../../assets/images/DrumMixers/tab5Left.png';
import tab5Right from '../../assets/images/DrumMixers/tab5Right.png';
import tab1Main from '../../assets/images/DrumMixers/tab1Main.png';
import tab1Left from '../../assets/images/DrumMixers/tab1Left.png';
import tab1Right from '../../assets/images/DrumMixers/tab5Right.png';
import tab2Main from '../../assets/images/DrumMixers/tab2Main.png';
import tab2Left from '../../assets/images/DrumMixers/tab2L.png';
import tab6Main from '../../assets/images/DrumMixers/tab6M.png';



gsap.registerPlugin(ScrollTrigger);

const DrumMixPlanos = () => {
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

  ScrollTrigger.refresh();

  return () => {
    scrollTrig?.kill(); // <-- evita error si no existe
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
        className="bg-[url('/fondopatron.png')] bg-cover bg-center w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
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
      <h1 className='text-white lg:text-xl text-lg text-center mb-10'>PRODUCTION CAPACITY:</h1>
      <div className="flex justify-center gap-2 md:gap-10">
        {/* Botón 1 */}
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-3xl md:rounded-full transition-all duration-300 ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          80-110 Tph
        </button>

        {/* Botón 2 */}
        <button
          onClick={() => setActiveTab(2)}
          className={`px-4 py-2 text-sm font-medium border rounded-3xl md:rounded-full transition-all duration-300 ${
            activeTab === 2
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
        110-150 Tph
        </button>

        {/* Botón 3 */}
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
        
      </div>
      <br />
      <div className="flex justify-center gap-2 md:gap-10">
        {/* Botón 4 */}
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-3xl md:rounded-full ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          200-270 Tph
        </button>
        {/* Botón 5 */}
        <button
          onClick={() => setActiveTab(5)}
          className={`px-4 py-2 text-sm font-medium border rounded-3xl md:rounded-full transition-all duration-300 ${
            activeTab === 5
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          300-400 Tph
        </button>

        {/* Botón 6 */}
        <button
          onClick={() => setActiveTab(6)}
          className={`px-4 py-2 text-sm font-medium border rounded-3xl md:rounded-full transition-all duration-300 ${
            activeTab === 6
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
        400-540 Tph
        </button>

        {/* Botón 7 
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-3xl md:rounded-full ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          500-650 Tph
        </button>*/}
      </div>

      </div>
      

      {/* Contenido de los tabs */}
      <div className="w-full mt-20 mb-10" id='tabsSection' ref={nextSectionRef}>
        {activeTab === 1 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1'>
                <div className='flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                        <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>FLIGHTS</h1>
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
                    <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>Mixing Flights</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                <div className='w-full flex justify-between border-b border-b-white'>
                        <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CONTROL & OPERATION</h1>
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
                    <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Fully automatic or manual operation</li>
                        <li>Digital temperature monitoring and regulation</li>
                        <li>Independent controls for each plant component</li>
                        <li>Simple and intuitive interface</li>
                        <li>Control system designed for field reliabilit</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                            ...prev,
                            C1_3: !prev.C1_3
                            }))}>
                                <svg width="28px" height="28px"
                                stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000"
                                className={`transition-transform duration-300 transform ${
                                    openSections.C1_3 ? "rotate-180" : ""
                                }`}>
                                    <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Industrial-grade motors and components</li>
                        <li>Simple wiring system for easy maintenance</li>
                        <li>Weather-protected electrical connections</li>
                        <li>Pulley and bushing transmission system</li>
                    </ul>
                </div>
                
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2'>
                <img src={tab1Main.src} alt="" className='w-[250px] h-auto'/>
            </div>
            <div className='flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10'>
                <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>BURNER SYSTEM</h1>
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
                        <ul className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>
                            <div className='flex justify-between w-full'>
                            <h1>Modulating burner:</h1>
                            <p data-imperial='300.00 cm' data-metric='9.88 ft'>XXXX million BTU/hr</p>
                            </div>
                        </li>
                        <li>Fueled with total-air control system</li>
                        <li className='list-none'>
                            <ul className='ml-6'>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">Diesel</li>
                                <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">Gas</li>
                            </ul>
                        </li>
                        <li>UV sensors for flame monitoring</li>
                        <li>Separate pilot and main flame system</li>
                        <li>Fuel filtration and safety regulation system</li>
                    </ul>
                </div>
                <div className='text-white font-normal w-full flex flex-col gap-4 justify-between h-full'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>BAGHOUSE CAPACITY</h1>
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
                        <div className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block md:mb-0`}>
                            <div className='flex justify-between'>
                                <h1>ACFM:</h1>
                                <p data-imperial='300.00 cm' data-metric='9.88 ft'>35 Tph</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Filtering Area:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>XXXX</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Fiberglass insulation:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>2"</p>
                            </div>
                        </div>
                    </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>DURABILITY & SAFETY</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                            ...prev,
                            C2_3: !prev.C2_3
                            }))}>
                                <svg width="28px" height="28px"
                                stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000"
                                className={`transition-transform duration-300 transform ${
                                    openSections.C2_3 ? "rotate-180" : ""
                                }`}>
                                    <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_3 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>High-resistance structure for long-term operation</li>
                        <li>Bolted components with anti-corrosion coating</li>
                        <li>Thermal insulation reduces surface temperature</li>
                        <li>Reinforced structure for heavy-duty use</li>
                        <li>Labyrinth seals to reduce air loss and heat escape</li>
                        <li>Galvanized bolts and electrostatic paint for durability with strong adhesion</li>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='287.06 cm' data-metric='9.41 ft'>9.41 ft</p>
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
                        <div className='w-[272px] h-[185px] flex items-center justify-center'>
                            <img 
                                src={tab1Left.src} 
                                alt="" 
                                className='max-w-full max-h-full object-contain'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end min-w-[90px] h-[185px] shrink-0'>
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
                            <p className='text-white text-lg' data-imperial='705.37 cm' data-metric='23.14 ft'>23.14 ft</p>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='1,868.09 cm' data-metric='61.28 ft'>61.28 ft</p>
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
                        <div className='h-[185px] w-[744px] flex justify-center items-center'>
                            <img src={tab1Right.src} alt="" className='max-w-full max-h-full object-contain'/>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10'>
                    <div className='col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full gap-4 md:gap-10 h-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-10'>
                            <div className='text-white font-normal'>
                            <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>DRUM DIMENSIONS</h1>
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
                        <div className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                <div className='flex justify-between'>
                                    <h1>Length:</h1>
                                    <p data-imperial='653.41 cm' data-metric='21.42ft'>21.42 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Width:</h1>
                                    <p data-imperial='287.06 cm' data-metric='9.41 ft'>9.41 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Height:</h1>
                                    <p data-imperial='264.31 cm' data-metric='8.67 ft'>8.67 ft</p>
                                </div>
                        </div>
                                
                            </div>
                            <div className='text-white font-normal'>
                                <div className='w-full flex justify-between border-b border-b-white'>
                                    <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CHASSIS & STRUCTURE</h1>
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
                                <div className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                    <div className='flex justify-between'>
                                        <h1>Total length (including hitch):</h1>
                                        <p data-imperial='2,127.37 cm' data-metric='69.79 ft'>69.79 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Axle configuration:</h1>
                                        <p>Three Axle</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Fifth-wheel hitch height:</h1>
                                        <p data-imperial='140.00 cm' data-metric='4.59 ft'>4.59 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Total width:</h1>
                                        <p data-imperial='287.06 cm' data-metric='9.41 ft'>9.41 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Total height:</h1>
                                        <p data-imperial='731.29 cm' data-metric='23.99 ft'>23.99 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Transportation height:</h1>
                                        <p data-imperial='427.57 cm' data-metric='14.02 ft'>14.02 ft</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-10'>
                            <div className='text-white font-normal'>
                                <div className='w-full flex justify-between border-b border-b-white'>
                                    <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>PRODUCTION RATE</h1>
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
                                <div className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_3 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                    <div className='flex justify-between'>
                                        <h1>3% humidity:</h1>
                                        <p data-imperial='389.2 cm' data-metric='12.94 ft'>180 Tph</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>5% humidity:</h1>
                                        <p data-imperial='128 cm' data-metric='4.2 ft'>140 Tph</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-white font-normal'>
                                <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>RAP INCORPORATION</h1>
                                        <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C3_4: !prev.C3_4
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C3_4 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                <div className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_4 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                    <div className='flex justify-between'>
                                        <h1>3% humidity:</h1>
                                        <p data-imperial='389.2 cm' data-metric='12.94 ft'>40%</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>5% humidity:</h1>
                                        <p data-imperial='128 cm' data-metric='4.2 ft'>XX%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start text-white'>
                            <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARS</h1>
                                        <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C3_5: !prev.C3_5
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C3_5 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <ul className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_5 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                    <li>EPA</li>
                                    <li>OSHA</li>
                                    <li>DOT</li>
                                    <li>UL wiring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full h-full flex flex-col gap-0 md:gap-10'>
                        <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                            <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>DRUM DRIVE SYSTEM</h1>
                                        <button className='block' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C4_1: !prev.C4_1
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C4_1 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                            </div>
                            <ul className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"}`}>
                                <li>Driven by four 3 HP motors</li>
                                <li>Trunnion-driven system for reliable, continuous operation</li>
                                <li>Digital VFDs for precise speed adjustments</li>
                                <li>Trunnions and tires forged, machined, and heat-treated for durability.</li>
                                <li>Precision-machined for balanced, deformation-resistant performance</li>
                                <li>Spring-mounted to absorb load shifts and thermal expansion</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white w-full'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>PORTABILITY</h1>
                                        <button className='block' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C4_2: !prev.C4_2
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C4_2 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                            </div>
                            <ul className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"}`}>
                                <li>Mounted on standard transport chassis</li>
                                <li>Dual axles with 8-lug hubs</li>
                                <li>16” highway-rated wheels</li>
                                <li>Pull-type hitch with safety coupling</li>
                                <li>Includes brakes and road lighting system</li>
                                <li>Reinforced for loaded or empty transport</li>
                                <li>Transport skids for quick coupling and parking</li>
                                <li>Forged tires mounted on flexible springs</li>
                                <li>Foldable support legs with preset working height</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10'>
                    <div className='col-span-2 overflow-x-auto'>
                        <div className='flex justify-start md:justify-center items-end my-10'>
                        <div className='flex flex-col items-center justify-center'>
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
                                <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
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
                            <div className='w-[272px] h-[353px] flex items-center justify-center'>
                                <img 
                                    src={caseta1.src} 
                                    alt="" 
                                    className='max-w-full max-h-full object-contain'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-end w-[90px] h-[353px]'>
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
                                <p className='text-white text-lg' data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
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
                        <div className='flex flex-col items-center justify-center'>
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
                                <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
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
                            <div className='h-[353px] w-[497px] flex justify-center items-center'>
                                <img src={caseta2.src} alt="" className='max-w-full max-h-full object-contain'/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-span-1 w-full flex flex-col items-start justify-center gap-4 md:gap-10'>
                        <div className='text-white font-normal col-span-1 w-full'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CONTROL CABIN DIMENSIONS</h1>
                                        <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C5_1: !prev.C5_1
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C5_1 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                            </div>
                            <div className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C5_1 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                <div className='flex justify-between'>
                                    <h1>Length:</h1>
                                    <p data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Width:</h1>
                                    <p data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Height:</h1>
                                    <p data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                                        <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CONTROL CABIN</h1>
                                        <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                                        ...prev,
                                        C5_2: !prev.C5_2
                                        }))}>
                                            <svg width="28px" height="28px"
                                            stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000"
                                            className={`transition-transform duration-300 transform ${
                                                openSections.C5_2 ? "rotate-180" : ""
                                            }`}>
                                                <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                            </div>
                            <ul className={`transition-all duration-500 overflow-hidden ml-6 list-disc list-inside ${openSections.C5_2 ? "max-h-96 opacity-1" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                <li>7' x 10' control cabin, towable.</li>
                                <li>Portable, with hitch, 3,000 lb axle, two 8-14.5 tires, and electric brakes.</li>
                                <li>Insulated panel-style walls.</li>
                                <li>110-volt electrical installation with interior lighting.</li>
                                <li>Panoramic windows.</li>
                                <li>1.5-ton air conditioning unit.</li>
                                <li>Standard road lights: brake and turn signals.</li>
                                <li>Jack stand for parking and hitch height adjustment.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
          
        )}

        {activeTab === 2 && (
                    <div className='flex flex-col items-center justify-center' ref={containerRef}>
                        <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center'>
                    <div className='flex flex-col items-start justify-between gap-4 w-full h-full order-2 md:order-1'>
                        <div className='flex flex-col items-start justify-start gap-4 text-white w-full'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FLIGHTS</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Inlet Flights</li>
                                <li>Drying Veiling Flights</li>
                                <li>Radiation Flights</li>
                                <li>Heating Flights</li>
                                <li>Mixing Flights</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Fully automatic or manual operation</li>
                                <li>Digital temperature monitoring and regulation</li>
                                <li>Independent controls for each plant component</li>
                                <li>Simple and intuitive interface</li>
                                <li>Control system designed for field reliabilit</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Industrial-grade motors and components</li>
                                <li>Simple wiring system for easy maintenance</li>
                                <li>Weather-protected electrical connections</li>
                                <li>Pulley and bushing transmission system</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2'>
                        <img src={tab2Main.src} alt="" className='w-[150px] h-[600px]' />
                    </div>
                    <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1 w-full order-3 md:order-3'>
                    <div className='flex flex-col items-start justify-center gap-4 text-white'>
                        <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>BURNER SYSTEM</h1>
                        <ul className='ml-6 list-disc'>
                            <li>Reinforced structure for heavy-duty use</li>
                            <li>Low-profile frame for stable and easy transport</li>
                            <li>Foldable support legs with preset working height</li>
                            <li>Transport skids for quick coupling and parking</li>
                            <li>Forged tires mounted on flexible springs</li>
                            <li>Labyrinth seals to reduce air loss and heat escape</li>
                            <li>Galvanized bolts and electrostatic paint for durability</li>
                        </ul>
                    </div>
                    <div className='text-white font-normal w-full'>
                            <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BAGHOUSE CAPACITY</h1>
                            <div className='flex justify-between'>
                                <h1>ACFM:</h1>
                                <p data-imperial='300.00 cm' data-metric='9.88 ft'>35 Tph</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Filtering Area:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>XXXX</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Fiberglass insulation:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>2"</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                            <ul className='ml-6 list-disc'>
                                <li>High-resistance structure for long-term operation</li>
                                <li>Protected by electrostatic paint with strong adhesion</li>
                                <li>Bolted components with anti-corrosion coating</li>
                                <li>Thermal insulation reduces surface temperature</li>
                                <li>Guarded access to moving and hot parts for operator safety</li>
                            </ul>
                        </div>
                    </div>
                        </div>
                        <div className='flex justify-center items-end my-10'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex items-center justify-center w-1/2 h-[60px] self-start'>
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
                                    <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
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
                                <div className='w-[272px] h-[185px] flex items-center justify-center'>
                                    <img 
                                        src={tab1Left.src} 
                                        alt="" 
                                        className='max-w-full max-h-full object-contain'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-end w-[90px] h-[185px]'>
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
                                    <p className='text-white text-lg' data-imperial='705.37 cm' data-metric='23.14 ft'>23.14 ft</p>
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
                            <div className='flex flex-col items-center justify-center'>
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
                                    <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='2,007.70 cm' data-metric='65.86 ft'>65.86 ft</p>
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
                                <div className='h-[185px] w-[744px] flex justify-center items-center'>
                                    <img src={tab2Left.src} alt="" className='max-w-full max-h-full object-contain'/>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-10'>
                    <div className='col-span-2 flex flex-col items-start justify-start w-full gap-10 h-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10'>
                            <div className='text-white font-normal'>
                                    <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>DRUM DIMENSIONS</h1>
                                    <div className='flex justify-between'>
                                        <h1>Length:</h1>
                                        <p data-imperial='898.95 cm' data-metric='29.49 ft'>29.49 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Width:</h1>
                                        <p data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Height:</h1>
                                        <p data-imperial='264.31 cm' data-metric='8.67 ft'>8.67 ft</p>
                                    </div>
                            </div>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                                <div className='flex justify-between'>
                                    <h1>Total length (including hitch):</h1>
                                    <p data-imperial='2,007.70 cm' data-metric='65.86 ft'>65.86 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Axle configuration:</h1>
                                    <p>Three Axle</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Fifth-wheel hitch height:</h1>
                                    <p data-imperial='140.00 cm' data-metric='4.59 ft'>4.59 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Total width:</h1>
                                    <p data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Total height:</h1>
                                    <p data-imperial='705.37 cm' data-metric='23.14 ft'>23.14 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Transportation height:</h1>
                                    <p data-imperial='424.57 cm' data-metric='13.92 ft'>13.92 ft</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>PRODUCTION RATE</h1>
                                <div className='flex justify-between'>
                                    <h1>3% humidity:</h1>
                                    <p data-imperial='389.2 cm' data-metric='12.94 ft'>180 Tph</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>5% humidity:</h1>
                                    <p data-imperial='128 cm' data-metric='4.2 ft'>140 Tph</p>
                                </div>
                            </div>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>RAP INCORPORATION</h1>
                                <div className='flex justify-between'>
                                    <h1>3% humidity:</h1>
                                    <p data-imperial='389.2 cm' data-metric='12.94 ft'>40%</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>5% humidity:</h1>
                                    <p data-imperial='128 cm' data-metric='4.2 ft'>XX%</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-white'>
                                <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
                                <ul className='ml-6 list-disc'>  
                                    <li>EPA</li>
                                    <li>OSHA</li>
                                    <li>DOT</li>
                                    <li>UL wiring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full flex flex-col gap-10'>
                        <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DRUM DRIVE SYSTEM</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Driven by four 3 HP motors</li>
                                <li>Trunnion-driven system for reliable, continuous operation</li>
                                <li>Four high-efficiency electric motors</li>
                                <li>Digital VFDs for precise speed adjustments</li>
                                <li>Trunnions and tires forged, machined, and heat-treated for durability.</li>
                                <li>Drum tires made from normalized high-carbon alloy steel</li>
                                <li>Mounted on fixed central pivot bases for alignment and drum flotation</li>
                                <li>Equipped with industrial self-aligning bearings</li>
                                <li>Precision-machined for balanced, deformation-resistant performance</li>
                                <li>Spring-mounted to absorb load shifts and thermal expansion</li>
                                <li>Single-point trunnion adjustment for quick field alignment</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Mounted on standard transport chassis</li>
                                <li>Dual axles with 8-lug hubs</li>
                                <li>16” highway-rated wheels</li>
                                <li>Pull-type hitch with safety coupling</li>
                                <li>Includes brakes and road lighting system</li>
                                <li>Reinforced for loaded or empty transport</li>
                            </ul>
                        </div>
                    </div>
                </div>
                       
                        <div className='grid grid-cols-4 justify-center items-center w-full mt-10 gap-10'>
                        <div className='col-span-3'>
                                <div className='flex justify-center items-end my-10'>
                                <div className='flex flex-col items-center justify-center'>
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
                                        <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
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
                                    <div className='w-[272px] h-[353px] flex items-center justify-center'>
                                        <img 
                                            src={caseta1.src} 
                                            alt="" 
                                            className='max-w-full max-h-full object-contain'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-end w-[90px] h-[353px]'>
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
                                        <p className='text-white text-lg' data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
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
                                <div className='flex flex-col items-center justify-center'>
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
                                        <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
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
                                    <div className='h-[353px] w-[497px] flex justify-center items-center'>
                                        <img src={caseta2.src} alt="" className='max-w-full max-h-full object-contain'/>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div className='col-span-1 w-full h-full'>
                            <div className='text-white font-normal col-span-1'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CONTROL CABINDIMENSIONS</h1>
                                <div className='flex justify-between'>
                                    <h1>Length:</h1>
                                    <p data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Width:</h1>
                                    <p data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Height:</h1>
                                    <p data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-white'>
                                <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL CABIN</h1>
                                <ul className='ml-6 list-disc'>
                                    <li>7' x 10' control cabin, towable.</li>
                                    <li>Portable, with hitch, 3,000 lb axle, two 8-14.5 tires, and electric brakes.</li>
                                    <li>Insulated panel-style walls.</li>
                                    <li>110-volt electrical installation with interior lighting.</li>
                                    <li>Panoramic windows.</li>
                                    <li>1.5-ton air conditioning unit.</li>
                                    <li>Standard road lights: brake and turn signals.</li>
                                    <li>Jack stand for parking and hitch height adjustment.</li>
                                </ul>
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                
                )}

        {activeTab === 3 && (
          <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-between h-full gap-4 w-full order-2 md:order-1' id='column1' ref={columnGrid1}>
                        <div className='flex flex-col items-start justify-start gap-4 text-white w-full'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FLIGHTS</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Inlet Flights</li>
                                <li>Drying Veiling Flights</li>
                                <li>Radiation Flights</li>
                                <li>Heating Flights</li>
                                <li>Mixing Flights</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Fully automatic or manual operation</li>
                                <li>Digital temperature monitoring and regulation</li>
                                <li>Independent controls for each plant component</li>
                                <li>Simple and intuitive interface</li>
                                <li>Control system designed for field reliabilit</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Industrial-grade motors and components</li>
                                <li>Simple wiring system for easy maintenance</li>
                                <li>Weather-protected electrical connections</li>
                                <li>Pulley and bushing transmission system</li>
                            </ul>
                        </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-[628px] order-1 md:order-2'>
                
            </div>
            <div className='flex flex-col items-start justify-start gap-4 col-span-1 h-full w-full order-3 md:order-3' id='column2' ref={columnGrid2}>
                     <div className='flex flex-col items-start justify-center gap-4 text-white'>
                        <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>BURNER SYSTEM</h1>
                        <ul className='ml-6 list-disc'>
                            <li>Reinforced structure for heavy-duty use</li>
                            <li>Low-profile frame for stable and easy transport</li>
                            <li>Foldable support legs with preset working height</li>
                            <li>Transport skids for quick coupling and parking</li>
                            <li>Forged tires mounted on flexible springs</li>
                            <li>Labyrinth seals to reduce air loss and heat escape</li>
                            <li>Galvanized bolts and electrostatic paint for durability</li>
                        </ul>
                    </div>
                    <div className='text-white font-normal w-full'>
                            <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BAGHOUSE CAPACITY</h1>
                            <div className='flex justify-between'>
                                <h1>ACFM:</h1>
                                <p data-imperial='300.00 cm' data-metric='9.88 ft'>35 Tph</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Filtering Area:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>XXXX</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Fiberglass insulation:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>2"</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                            <ul className='ml-6 list-disc'>
                                <li>High-resistance structure for long-term operation</li>
                                <li>Protected by electrostatic paint with strong adhesion</li>
                                <li>Bolted components with anti-corrosion coating</li>
                                <li>Thermal insulation reduces surface temperature</li>
                                <li>Guarded access to moving and hot parts for operator safety</li>
                            </ul>
                        </div>
            </div>
                </div>
                
                <div className='flex justify-center items-end my-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-start justify-center w-1/2 h-[60px] self-start'>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='290.5 cm' data-metric='9.37 ft'>9.37 ft</p>
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
                        <div className='w-[272px] h-[185px]'>
                            <img src={tab1Left.src} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end w-[90px] h-[185px]'>
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
                            <p className='text-white text-lg' data-imperial='421 cm' data-metric='12.828 ft'>12.828 ft</p>
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
                    <div className='flex flex-col items-center justify-center'>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='876 cm' data-metric='28.75 ft'>28.75 ft</p>
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
                        <div className='h-[185px] w-[744px]'>
                            <img src={tab3Right.src} alt="" className='h-[185px] w-[744px]'/>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-10'>
                    <div className='col-span-2 flex flex-col items-start justify-start w-full gap-10 h-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10'>
                            <div className='text-white font-normal'>
                                    <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>DRUM DIMENSIONS</h1>
                                    <div className='flex justify-between'>
                                        <h1>Length:</h1>
                                        <p data-imperial='898.95 cm' data-metric='29.49 ft'>29.49 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Width:</h1>
                                        <p data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Height:</h1>
                                        <p data-imperial='264.31 cm' data-metric='8.67 ft'>8.67 ft</p>
                                    </div>
                            </div>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                                <div className='flex justify-between'>
                                    <h1>Total length (including hitch):</h1>
                                    <p data-imperial='2,007.70 cm' data-metric='65.86 ft'>65.86 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Axle configuration:</h1>
                                    <p>Three Axle</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Fifth-wheel hitch height:</h1>
                                    <p data-imperial='140.00 cm' data-metric='4.59 ft'>4.59 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Total width:</h1>
                                    <p data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Total height:</h1>
                                    <p data-imperial='705.37 cm' data-metric='23.14 ft'>23.14 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Transportation height:</h1>
                                    <p data-imperial='424.57 cm' data-metric='13.92 ft'>13.92 ft</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>PRODUCTION RATE</h1>
                                <div className='flex justify-between'>
                                    <h1>3% humidity:</h1>
                                    <p data-imperial='389.2 cm' data-metric='12.94 ft'>180 Tph</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>5% humidity:</h1>
                                    <p data-imperial='128 cm' data-metric='4.2 ft'>140 Tph</p>
                                </div>
                            </div>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>RAP INCORPORATION</h1>
                                <div className='flex justify-between'>
                                    <h1>3% humidity:</h1>
                                    <p data-imperial='389.2 cm' data-metric='12.94 ft'>40%</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>5% humidity:</h1>
                                    <p data-imperial='128 cm' data-metric='4.2 ft'>XX%</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-white'>
                                <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
                                <ul className='ml-6 list-disc'>  
                                    <li>EPA</li>
                                    <li>OSHA</li>
                                    <li>DOT</li>
                                    <li>UL wiring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full flex flex-col gap-10'>
                        <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DRUM DRIVE SYSTEM</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Driven by four 3 HP motors</li>
                                <li>Trunnion-driven system for reliable, continuous operation</li>
                                <li>Four high-efficiency electric motors</li>
                                <li>Digital VFDs for precise speed adjustments</li>
                                <li>Trunnions and tires forged, machined, and heat-treated for durability.</li>
                                <li>Drum tires made from normalized high-carbon alloy steel</li>
                                <li>Mounted on fixed central pivot bases for alignment and drum flotation</li>
                                <li>Equipped with industrial self-aligning bearings</li>
                                <li>Precision-machined for balanced, deformation-resistant performance</li>
                                <li>Spring-mounted to absorb load shifts and thermal expansion</li>
                                <li>Single-point trunnion adjustment for quick field alignment</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Mounted on standard transport chassis</li>
                                <li>Dual axles with 8-lug hubs</li>
                                <li>16” highway-rated wheels</li>
                                <li>Pull-type hitch with safety coupling</li>
                                <li>Includes brakes and road lighting system</li>
                                <li>Reinforced for loaded or empty transport</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 justify-center items-center w-full mt-10 gap-10'>
                        <div className='col-span-3'>
                                <div className='flex justify-center items-end my-10'>
                                <div className='flex flex-col items-center justify-center'>
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
                                        <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
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
                                    <div className='w-[272px] h-[353px] flex items-center justify-center'>
                                        <img 
                                            src={caseta1.src} 
                                            alt="" 
                                            className='max-w-full max-h-full object-contain'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-end w-[90px] h-[353px]'>
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
                                        <p className='text-white text-lg' data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
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
                                <div className='flex flex-col items-center justify-center'>
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
                                        <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
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
                                    <div className='h-[353px] w-[497px] flex justify-center items-center'>
                                        <img src={caseta2.src} alt="" className='max-w-full max-h-full object-contain'/>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div className='col-span-1 w-full h-full'>
                            <div className='text-white font-normal col-span-1'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CONTROL CABINDIMENSIONS</h1>
                                <div className='flex justify-between'>
                                    <h1>Length:</h1>
                                    <p data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Width:</h1>
                                    <p data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Height:</h1>
                                    <p data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-white'>
                                <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL CABIN</h1>
                                <ul className='ml-6 list-disc'>
                                    <li>7' x 10' control cabin, towable.</li>
                                    <li>Portable, with hitch, 3,000 lb axle, two 8-14.5 tires, and electric brakes.</li>
                                    <li>Insulated panel-style walls.</li>
                                    <li>110-volt electrical installation with interior lighting.</li>
                                    <li>Panoramic windows.</li>
                                    <li>1.5-ton air conditioning unit.</li>
                                    <li>Standard road lights: brake and turn signals.</li>
                                    <li>Jack stand for parking and hitch height adjustment.</li>
                                </ul>
                            </div>
                        </div>        
                </div>
            </div>
        )}
        {activeTab === 5 && (
                    <div className='flex flex-col items-center justify-center' ref={containerRef}>
                        <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center'>
                    <div className='flex flex-col items-start justify-center gap-4 w-full order-2 md:order-1'>
                    <div className='flex flex-col items-start justify-start gap-4 text-white w-full'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FLIGHTS</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Inlet Flights</li>
                                <li>Drying Veiling Flights</li>
                                <li>Radiation Flights</li>
                                <li>Heating Flights</li>
                                <li>Mixing Flights</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Fully automatic or manual operation</li>
                                <li>Digital temperature monitoring and regulation</li>
                                <li>Independent controls for each plant component</li>
                                <li>Simple and intuitive interface</li>
                                <li>Control system designed for field reliabilit</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Industrial-grade motors and components</li>
                                <li>Simple wiring system for easy maintenance</li>
                                <li>Weather-protected electrical connections</li>
                                <li>Pulley and bushing transmission system</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2'>
                        <img src={tab5Main.src} alt="" className='w-[120px] h-auto' />
                    </div>
                    <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1 w-full order-3 md:order-3'>
                    <div className='flex flex-col items-start justify-center gap-4 text-white'>
                        <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>BURNER SYSTEM</h1>
                        <ul className='ml-6 list-disc'>
                            <li>Reinforced structure for heavy-duty use</li>
                            <li>Low-profile frame for stable and easy transport</li>
                            <li>Foldable support legs with preset working height</li>
                            <li>Transport skids for quick coupling and parking</li>
                            <li>Forged tires mounted on flexible springs</li>
                            <li>Labyrinth seals to reduce air loss and heat escape</li>
                            <li>Galvanized bolts and electrostatic paint for durability</li>
                        </ul>
                    </div>
                    <div className='text-white font-normal w-full'>
                            <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BAGHOUSE CAPACITY</h1>
                            <div className='flex justify-between'>
                                <h1>ACFM:</h1>
                                <p data-imperial='300.00 cm' data-metric='9.88 ft'>35 Tph</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Filtering Area:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>XXXX</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Fiberglass insulation:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>2"</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                            <ul className='ml-6 list-disc'>
                                <li>High-resistance structure for long-term operation</li>
                                <li>Protected by electrostatic paint with strong adhesion</li>
                                <li>Bolted components with anti-corrosion coating</li>
                                <li>Thermal insulation reduces surface temperature</li>
                                <li>Guarded access to moving and hot parts for operator safety</li>
                            </ul>
                        </div>
                    </div>
                        </div>
                        <div className='flex justify-center items-end my-10'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex items-center justify-center w-1/2 h-[60px] self-center'>
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
                                    <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
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
                                <div className='w-[272px] h-[185px] flex items-center justify-center'>
                                    <img 
                                        src={tab5Left.src} 
                                        alt="" 
                                        className='max-w-full max-h-full object-contain'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-end w-[90px] h-[185px]'>
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
                                    <p className='text-white text-lg' data-imperial='705.37 cm' data-metric='23.14 ft'>23.14 ft</p>
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
                            <div className='flex flex-col items-center justify-center'>
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
                                    <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='2,007.70 cm' data-metric='65.86 ft'>65.86 ft</p>
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
                                <div className='h-[185px] w-[744px] flex justify-center items-center'>
                                    <img src={tab5Right.src} alt="" className='max-w-full max-h-full object-contain'/>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-10'>
                    <div className='col-span-2 flex flex-col items-start justify-start w-full gap-10 h-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10'>
                            <div className='text-white font-normal'>
                                    <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>DRUM DIMENSIONS</h1>
                                    <div className='flex justify-between'>
                                        <h1>Length:</h1>
                                        <p data-imperial='898.95 cm' data-metric='29.49 ft'>29.49 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Width:</h1>
                                        <p data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Height:</h1>
                                        <p data-imperial='264.31 cm' data-metric='8.67 ft'>8.67 ft</p>
                                    </div>
                            </div>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                                <div className='flex justify-between'>
                                    <h1>Total length (including hitch):</h1>
                                    <p data-imperial='2,007.70 cm' data-metric='65.86 ft'>65.86 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Axle configuration:</h1>
                                    <p>Three Axle</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Fifth-wheel hitch height:</h1>
                                    <p data-imperial='140.00 cm' data-metric='4.59 ft'>4.59 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Total width:</h1>
                                    <p data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Total height:</h1>
                                    <p data-imperial='705.37 cm' data-metric='23.14 ft'>23.14 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Transportation height:</h1>
                                    <p data-imperial='424.57 cm' data-metric='13.92 ft'>13.92 ft</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>PRODUCTION RATE</h1>
                                <div className='flex justify-between'>
                                    <h1>3% humidity:</h1>
                                    <p data-imperial='389.2 cm' data-metric='12.94 ft'>180 Tph</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>5% humidity:</h1>
                                    <p data-imperial='128 cm' data-metric='4.2 ft'>140 Tph</p>
                                </div>
                            </div>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>RAP INCORPORATION</h1>
                                <div className='flex justify-between'>
                                    <h1>3% humidity:</h1>
                                    <p data-imperial='389.2 cm' data-metric='12.94 ft'>40%</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>5% humidity:</h1>
                                    <p data-imperial='128 cm' data-metric='4.2 ft'>XX%</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-white'>
                                <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
                                <ul className='ml-6 list-disc'>  
                                    <li>EPA</li>
                                    <li>OSHA</li>
                                    <li>DOT</li>
                                    <li>UL wiring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full flex flex-col gap-10'>
                        <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DRUM DRIVE SYSTEM</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Driven by four 3 HP motors</li>
                                <li>Trunnion-driven system for reliable, continuous operation</li>
                                <li>Four high-efficiency electric motors</li>
                                <li>Digital VFDs for precise speed adjustments</li>
                                <li>Trunnions and tires forged, machined, and heat-treated for durability.</li>
                                <li>Drum tires made from normalized high-carbon alloy steel</li>
                                <li>Mounted on fixed central pivot bases for alignment and drum flotation</li>
                                <li>Equipped with industrial self-aligning bearings</li>
                                <li>Precision-machined for balanced, deformation-resistant performance</li>
                                <li>Spring-mounted to absorb load shifts and thermal expansion</li>
                                <li>Single-point trunnion adjustment for quick field alignment</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Mounted on standard transport chassis</li>
                                <li>Dual axles with 8-lug hubs</li>
                                <li>16” highway-rated wheels</li>
                                <li>Pull-type hitch with safety coupling</li>
                                <li>Includes brakes and road lighting system</li>
                                <li>Reinforced for loaded or empty transport</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 justify-center items-center w-full mt-10 gap-10'>
                        <div className='col-span-3'>
                                <div className='flex justify-center items-end my-10'>
                                <div className='flex flex-col items-center justify-center'>
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
                                        <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
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
                                    <div className='w-[272px] h-[353px] flex items-center justify-center'>
                                        <img 
                                            src={caseta1.src} 
                                            alt="" 
                                            className='max-w-full max-h-full object-contain'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-end w-[90px] h-[353px]'>
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
                                        <p className='text-white text-lg' data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
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
                                <div className='flex flex-col items-center justify-center'>
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
                                        <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
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
                                    <div className='h-[353px] w-[497px] flex justify-center items-center'>
                                        <img src={caseta2.src} alt="" className='max-w-full max-h-full object-contain'/>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div className='col-span-1 w-full h-full'>
                            <div className='text-white font-normal col-span-1'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CONTROL CABINDIMENSIONS</h1>
                                <div className='flex justify-between'>
                                    <h1>Length:</h1>
                                    <p data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Width:</h1>
                                    <p data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Height:</h1>
                                    <p data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-white'>
                                <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL CABIN</h1>
                                <ul className='ml-6 list-disc'>
                                    <li>7' x 10' control cabin, towable.</li>
                                    <li>Portable, with hitch, 3,000 lb axle, two 8-14.5 tires, and electric brakes.</li>
                                    <li>Insulated panel-style walls.</li>
                                    <li>110-volt electrical installation with interior lighting.</li>
                                    <li>Panoramic windows.</li>
                                    <li>1.5-ton air conditioning unit.</li>
                                    <li>Standard road lights: brake and turn signals.</li>
                                    <li>Jack stand for parking and hitch height adjustment.</li>
                                </ul>
                            </div>
                        </div>        
                </div>
                        
                    </div>
                
                )}
        {activeTab === 6 && (
                    <div className='flex flex-col items-center justify-center' ref={containerRef}>
                        <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center'>
                    <div className='flex flex-col items-start justify-center gap-4 w-full order-2 md:order-1'>
                    <div className='flex flex-col items-start justify-start gap-4 text-white w-full'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FLIGHTS</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Inlet Flights</li>
                                <li>Drying Veiling Flights</li>
                                <li>Radiation Flights</li>
                                <li>Heating Flights</li>
                                <li>Mixing Flights</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Fully automatic or manual operation</li>
                                <li>Digital temperature monitoring and regulation</li>
                                <li>Independent controls for each plant component</li>
                                <li>Simple and intuitive interface</li>
                                <li>Control system designed for field reliabilit</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Industrial-grade motors and components</li>
                                <li>Simple wiring system for easy maintenance</li>
                                <li>Weather-protected electrical connections</li>
                                <li>Pulley and bushing transmission system</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2'>
                        <img src={tab5Main.src} alt="" className='w-[120px] h-auto' />
                    </div>
                    <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1 w-full order-3 md:order-3'>
                    <div className='flex flex-col items-start justify-center gap-4 text-white'>
                        <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>BURNER SYSTEM</h1>
                        <ul className='ml-6 list-disc'>
                            <li>Reinforced structure for heavy-duty use</li>
                            <li>Low-profile frame for stable and easy transport</li>
                            <li>Foldable support legs with preset working height</li>
                            <li>Transport skids for quick coupling and parking</li>
                            <li>Forged tires mounted on flexible springs</li>
                            <li>Labyrinth seals to reduce air loss and heat escape</li>
                            <li>Galvanized bolts and electrostatic paint for durability</li>
                        </ul>
                    </div>
                    <div className='text-white font-normal w-full'>
                            <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BAGHOUSE CAPACITY</h1>
                            <div className='flex justify-between'>
                                <h1>ACFM:</h1>
                                <p data-imperial='300.00 cm' data-metric='9.88 ft'>35 Tph</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Filtering Area:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>XXXX</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Fiberglass insulation:</h1>
                                <p data-imperial='112.32 cm' data-metric='3.68 ft'>2"</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                            <ul className='ml-6 list-disc'>
                                <li>High-resistance structure for long-term operation</li>
                                <li>Protected by electrostatic paint with strong adhesion</li>
                                <li>Bolted components with anti-corrosion coating</li>
                                <li>Thermal insulation reduces surface temperature</li>
                                <li>Guarded access to moving and hot parts for operator safety</li>
                            </ul>
                        </div>
                    </div>
                        </div>
                        <div className='flex justify-center items-end my-10'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex items-center justify-center w-1/2 h-[60px] self-center'>
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
                                    <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
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
                                <div className='w-[272px] h-[185px] flex items-center justify-center'>
                                    <img 
                                        src={tab5Left.src} 
                                        alt="" 
                                        className='max-w-full max-h-full object-contain'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-end w-[90px] h-[185px]'>
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
                                    <p className='text-white text-lg' data-imperial='705.37 cm' data-metric='23.14 ft'>23.14 ft</p>
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
                            <div className='flex flex-col items-center justify-center'>
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
                                    <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='2,007.70 cm' data-metric='65.86 ft'>65.86 ft</p>
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
                                <div className='h-[185px] w-[744px] flex justify-center items-center'>
                                    <img src={tab5Right.src} alt="" className='max-w-full max-h-full object-contain'/>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-10'>
                    <div className='col-span-2 flex flex-col items-start justify-start w-full gap-10 h-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10'>
                            <div className='text-white font-normal'>
                                    <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>DRUM DIMENSIONS</h1>
                                    <div className='flex justify-between'>
                                        <h1>Length:</h1>
                                        <p data-imperial='898.95 cm' data-metric='29.49 ft'>29.49 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Width:</h1>
                                        <p data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1>Height:</h1>
                                        <p data-imperial='264.31 cm' data-metric='8.67 ft'>8.67 ft</p>
                                    </div>
                            </div>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                                <div className='flex justify-between'>
                                    <h1>Total length (including hitch):</h1>
                                    <p data-imperial='2,007.70 cm' data-metric='65.86 ft'>65.86 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Axle configuration:</h1>
                                    <p>Three Axle</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Fifth-wheel hitch height:</h1>
                                    <p data-imperial='140.00 cm' data-metric='4.59 ft'>4.59 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Total width:</h1>
                                    <p data-imperial='299.09 cm' data-metric='9.81 ft'>9.81 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Total height:</h1>
                                    <p data-imperial='705.37 cm' data-metric='23.14 ft'>23.14 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Transportation height:</h1>
                                    <p data-imperial='424.57 cm' data-metric='13.92 ft'>13.92 ft</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>PRODUCTION RATE</h1>
                                <div className='flex justify-between'>
                                    <h1>3% humidity:</h1>
                                    <p data-imperial='389.2 cm' data-metric='12.94 ft'>180 Tph</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>5% humidity:</h1>
                                    <p data-imperial='128 cm' data-metric='4.2 ft'>140 Tph</p>
                                </div>
                            </div>
                            <div className='text-white font-normal'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>RAP INCORPORATION</h1>
                                <div className='flex justify-between'>
                                    <h1>3% humidity:</h1>
                                    <p data-imperial='389.2 cm' data-metric='12.94 ft'>40%</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>5% humidity:</h1>
                                    <p data-imperial='128 cm' data-metric='4.2 ft'>XX%</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-white'>
                                <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
                                <ul className='ml-6 list-disc'>  
                                    <li>EPA</li>
                                    <li>OSHA</li>
                                    <li>DOT</li>
                                    <li>UL wiring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full flex flex-col gap-10'>
                        <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DRUM DRIVE SYSTEM</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Driven by four 3 HP motors</li>
                                <li>Trunnion-driven system for reliable, continuous operation</li>
                                <li>Four high-efficiency electric motors</li>
                                <li>Digital VFDs for precise speed adjustments</li>
                                <li>Trunnions and tires forged, machined, and heat-treated for durability.</li>
                                <li>Drum tires made from normalized high-carbon alloy steel</li>
                                <li>Mounted on fixed central pivot bases for alignment and drum flotation</li>
                                <li>Equipped with industrial self-aligning bearings</li>
                                <li>Precision-machined for balanced, deformation-resistant performance</li>
                                <li>Spring-mounted to absorb load shifts and thermal expansion</li>
                                <li>Single-point trunnion adjustment for quick field alignment</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white'>
                            <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                            <ul className='ml-6 list-disc'>
                                <li>Mounted on standard transport chassis</li>
                                <li>Dual axles with 8-lug hubs</li>
                                <li>16” highway-rated wheels</li>
                                <li>Pull-type hitch with safety coupling</li>
                                <li>Includes brakes and road lighting system</li>
                                <li>Reinforced for loaded or empty transport</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 justify-center items-center w-full mt-10 gap-10'>
                        <div className='col-span-3'>
                                <div className='flex justify-center items-end my-10'>
                                <div className='flex flex-col items-center justify-center'>
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
                                        <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
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
                                    <div className='w-[272px] h-[353px] flex items-center justify-center'>
                                        <img 
                                            src={caseta1.src} 
                                            alt="" 
                                            className='max-w-full max-h-full object-contain'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-end w-[90px] h-[353px]'>
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
                                        <p className='text-white text-lg' data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
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
                                <div className='flex flex-col items-center justify-center'>
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
                                        <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
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
                                    <div className='h-[353px] w-[497px] flex justify-center items-center'>
                                        <img src={caseta2.src} alt="" className='max-w-full max-h-full object-contain'/>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div className='col-span-1 w-full h-full'>
                            <div className='text-white font-normal col-span-1'>
                                <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CONTROL CABINDIMENSIONS</h1>
                                <div className='flex justify-between'>
                                    <h1>Length:</h1>
                                    <p data-imperial='434.71 cm' data-metric='14.26 ft'>14.26 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Width:</h1>
                                    <p data-imperial='222.93 cm' data-metric='7.31 ft'>7.31 ft</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Height:</h1>
                                    <p data-imperial='309.34 cm' data-metric='10.14 ft'>10.14 ft</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-white'>
                                <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL CABIN</h1>
                                <ul className='ml-6 list-disc'>
                                    <li>7' x 10' control cabin, towable.</li>
                                    <li>Portable, with hitch, 3,000 lb axle, two 8-14.5 tires, and electric brakes.</li>
                                    <li>Insulated panel-style walls.</li>
                                    <li>110-volt electrical installation with interior lighting.</li>
                                    <li>Panoramic windows.</li>
                                    <li>1.5-ton air conditioning unit.</li>
                                    <li>Standard road lights: brake and turn signals.</li>
                                    <li>Jack stand for parking and hitch height adjustment.</li>
                                </ul>
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

export default DrumMixPlanos;
