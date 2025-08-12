import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FW from "../../assets/images/ColdMix/Planos/FW.png";
import FL from "../../assets/images/ColdMix/Planos/FL.png";
import A2GLA from '../../assets/images/ColdMix/Planos/2GLA.png';
import A2GLW from '../../assets/images/ColdMix/Planos/2GLW.png';
import A2GWA from '../../assets/images/ColdMix/Planos/2GWA.png';
import A2GWW from '../../assets/images/ColdMix/Planos/2GWW.png';
import A2TLA from '../../assets/images/ColdMix/Planos/2TLA.png';
import A2TWA from '../../assets/images/ColdMix/Planos/2TWA.png';
import A2TWW from '../../assets/images/ColdMix/Planos/2TWW.png';
import A3GLA from '../../assets/images/ColdMix/Planos/3GLA.png';
import A3GLW from '../../assets/images/ColdMix/Planos/3GLW.png';
import A3GWA from '../../assets/images/ColdMix/Planos/3GWA.png';
import A3GWW from '../../assets/images/ColdMix/Planos/3GWW.png';
import A3TLA from '../../assets/images/ColdMix/Planos/3TLA.png';
import A3TLW from '../../assets/images/ColdMix/Planos/3TLW.png';
import A3TWA from '../../assets/images/ColdMix/Planos/3TWA.png';
import A3TWW from '../../assets/images/ColdMix/Planos/3TWW.png';
import tolva3L1 from '../../assets/images/BinUnits/tolva3L1.png';
import tolva3Main from '../../assets/images/BinUnits/tolva3Main.png';
import tolva3Blue from '../../assets/images/BinUnits/tolva3Blue.png';
import tolva2L2 from '../../assets/images/BinUnits/tolva2L2.png';
import tolva2L1 from '../../assets/images/BinUnits/tolva2L1.png';
import tolva2F1 from '../../assets/images/BinUnits/tolva2F1.png';
import tolva2Main from '../../assets/images/BinUnits/tolva2Main.png';
import tolva1L2 from '../../assets/images/BinUnits/tolva1L2.png';
import tolva1L1 from '../../assets/images/BinUnits/tolva1L1.png';
import tolva1F from '../../assets/images/BinUnits/tolva1F.png';
import tolva1Main from '../../assets/images/BinUnits/tolva1Main.png';
import tolva3L2 from '../../assets/images/BinUnits/tolva3L2.png';



gsap.registerPlugin(ScrollTrigger);




const CMPlanos = () => {
    //logica de cambio de imagenes
    const [activeVersion, setActiveVersion] = useState('withPanels');
    const [dischargeVersion, setDischargeVersion] = useState('groundLevel');
    const [mountedVersion, setMountedVersion] = useState('legs');
  //tabs states
  const [activeTab, setActiveTab] = useState(3);

  //combinaciones de las imagenes
  const imageMap = {
    "2-withPanels-groundLevel-legs": A2GLA,
    "2-withPanels-groundLevel-wheels": A2GWA,
    "2-withPanels-truckLevel-legs": A2TLA,
    "2-withPanels-truckLevel-wheels": A2TWA,
    "2-withoutPanels-groundLevel-legs": A2GLW,
    "2-withoutPanels-groundLevel-wheels": A2GWW,
    "2-withoutPanels-truckLevel-legs": A2TLA,
    "2-withoutPanels-truckLevel-wheels": A2TWW,
    "3-withPanels-groundLevel-legs": A3GLA,
    "3-withPanels-groundLevel-wheels": A3GWA,
    "3-withoutPanels-groundLevel-legs": A3GLW,
    "3-withoutPanels-groundLevel-wheels": A3GWW,
    "3-withPanels-truckLevel-legs": A3TLA,
    "3-withPanels-truckLevel-wheels": A3TWA,
    "3-withoutPanels-truckLevel-legs": A3TLW,
    "3-withoutPanels-truckLevel-wheels": A3TWW,
  }
  const key = `${activeTab}-${activeVersion}-${dischargeVersion}-${mountedVersion}`;
    const selectedImage = imageMap[key as keyof typeof imageMap];

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

  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    updateElements(newUnit); // Actualiza los elementos en el DOM
  };
  //ESTADOS DE LOS DROPWDOWNS
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    C1_1: false,
    C1_2: false,
    C2_1: false,
    C2_2: false,
    C2_3: false,
    C3_1: false,
    C3_2: false,
    C3_3: false,
    C4_1: false,
    C4_2: false,
    C4_3: false,
  });

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
  const target = nextSectionRef.current;//target original
  const clipTarget = clipTargetRef.current;//target del clipath
  const img = imgRef.current;
  const otro = otroElemento.current;
  const options = optionsRef.current;
  const col1 = columnGrid1.current;
  const col2 = columnGrid2.current;
  

  if (!box || !target || !clipTarget || !img || !otro || !options || !col1 || !col2) return;


  if (activeTab !== 3) {
    gsap.set(box, {
      y: 0,
      opacity: 0,
      display: 'none',
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
             z-20 w-[120px] h-[560px]"
        >
          <img
            src={tolva3Blue.src}
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
            src={tolva3Main.src}
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
        
        <div className='w-full grid grid-cols-2 md:grid-cols-4 justify-between'>
          <div>
                <h1 className='text-white lg:text-xl text-lg text-center mb-10'>BIN UNITS</h1>
                <div className="grid grid-cols-2 gap-3 justify-center w-full items-center justify-items-center">
                    {/* Botón 2 */}
                    <button
                    onClick={() => setActiveTab(2)}
                    className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 max-w-[100px] ${
                        activeTab === 2
                        ? 'text-gray-900 bg-white border-white'
                        : 'text-white bg-transparent border-white'
                    }`}
                    >
                    2 UNITS
                    </button>
                    {/* Botón 3 */}
                    <button
                    onClick={() => setActiveTab(3)}
                    className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full max-w-[100px] ${
                        activeTab === 3
                        ? 'text-gray-900 bg-white border-white'
                        : 'text-white bg-transparent border-white'
                    }`}
                    >
                    3 UNITS
                    </button>
                </div>
          </div>
          <div>
                <h1 className='text-white lg:text-xl text-lg text-center mb-10'>DISCHARGE</h1>
                <div className="flex flex-col gap-3 justify-center w-full items-center justify-items-center">
                    {/* Botón 2 */}
                    <button
                    onClick={() => setDischargeVersion("groundLevel")}
                    className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 w-2/3 ${
                        dischargeVersion === "groundLevel"
                        ? 'text-gray-900 bg-white border-white'
                        : 'text-white bg-transparent border-white'
                    }`}
                    >
                    At ground level
                    </button>
                    {/* Botón 3 */}
                    <button
                    onClick={() => setDischargeVersion("truckLevel")}
                    className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full w-2/3 ${
                        dischargeVersion === "truckLevel"
                        ? 'text-gray-900 bg-white border-white'
                        : 'text-white bg-transparent border-white'
                    }`}
                    >
                    At Truck level
                    </button>
                </div>
          </div>
          <div>
                <h1 className='text-white lg:text-xl text-lg text-center mb-10'>MOUNTED ON</h1>
                <div className="grid grid-cols-2 gap-3 justify-center w-full items-center justify-items-center">
                    {/* Botón 2 */}
                    <button
                    onClick={() => setMountedVersion("legs")}
                    className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 max-w-[100px] ${
                        mountedVersion === 'legs'
                        ? 'text-gray-900 bg-white border-white'
                        : 'text-white bg-transparent border-white'
                    }`}
                    >
                    Legs
                    </button>
                    {/* Botón 3 */}
                    <button
                    onClick={() => setMountedVersion("wheels")}
                    className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full max-w-[100px] ${
                        mountedVersion === 'wheels'
                        ? 'text-gray-900 bg-white border-white'
                        : 'text-white bg-transparent border-white'
                    }`}
                    >
                    Wheels
                    </button>
                </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
                <h1 className='text-white lg:text-xl text-lg text-center mb-10'>EXTERIOR:</h1>
                <div className="version-selector flex flex-col gap-6 justify-center w-2/3">
                <button
                    
                    onClick={() => setActiveVersion('withPanels')}
                    className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                        activeVersion === 'withPanels' 
                        ? 'text-black bg-white border-white' 
                        : 'text-white bg-transparent border-white'
                    }`}
                    >
                    Aesthetic Flanks
                    </button>
                    <button
                    onClick={() => setActiveVersion('withoutPanels')}
                    className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                        activeVersion === 'withoutPanels' 
                        ? 'text-black bg-white border-white' 
                        : 'text-white bg-transparent border-white'
                    }`}
                    >
                    Without Aesthetic Flanks
                    </button>
                </div>
          </div>

        </div>
     

      </div>
      

      {/* Contenido de los tabs */}
      <div className="w-full mt-20 mb-10" id='tabsSection' ref={nextSectionRef}>
        {activeTab === 2 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>FEEDING SYSTEM</h1>
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
                        <li>Aggregate bin with adjustable discharge gate</li>
                        <li>Feeding conveyor with vulcanized belt</li>
                        <li>Manual or motorized flow control</li>
                        <li>Optional vibrator for consistent discharge</li>  
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
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
                        <li>Digital or manual control panel</li>
                        <li>VFD for dosing and mixing adjustment</li>
                        <li>Recipe memory (if digital system selected)</li>
                        <li>Centralized emergency stop</li>
                        <li>Pre-wired system for plug-and-play setup</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>DURABILITY & SAFETY</h1>
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
                        <li>All moving parts with perforated metal guards</li>
                        <li>Non-slip working areas</li>
                        <li>Corrosion-resistant paint</li>
                        <li>Low-maintenance components</li>

                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2'>
                <img src={tolva2Main.src} alt="" className='w-[200px] h-[600px]' />
            </div>
            <div className='flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CONSTRUCTION & DESIGN</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Reinforced materials for heavy-duty operation</li>
                        <li>Low-profile structure for stable and efficient transport</li>
                        <li>Pre-set height support legs, foldable for transport</li>
                        <li>Transport skids for quick coupling and parking</li>
                        <li>Galvanized bolts and corrosion-resistant hardware</li>
                        <li>Electrostatic paint for long-lasting durability</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Siemens motors and electrical components</li>
                        <li>Heavy-duty wiring with grounded connections</li>
                        <li>Quick-connect terminals with weather protection</li>
                        <li>Steel pulley system with bushing-mounted transmissions</li>
                        <li>Industrial-grade gear reducers for mixer and feeders</li>
                        <li>110V internal system for controls and lighting (optional)</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CHASSIS & STRUCTURE</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Mounted on steel frame with telescopic legs or fixed supports</li>
                        <li>Heavy-duty structure with reinforced joints</li>
                        <li>Galvanized bolts and electrostatic paint</li>
                        <li>Lifting lugs and base skids for easy transport and assembly</li>
                    </ul>
                </div>
            </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10'>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>EMULSION AND ADDITIVES INJECTION</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>Bitumen/emulsion pump with frequency inverter</li>
                            <li>Flowmeter for precision dosing</li>
                            <li>Optional water/additive tank with pump</li>
                            <li>Integrated pipe and filter system</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPLIANCE WITH <br /> INDUSTRY STANDARDS</h1>
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
                        <ul className={`list-disc ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>
                                EPA
                            </li>
                            <li>OSHA</li>
                            <li>DOT</li>
                            <li>UL wiring</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>PORTABILITY</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>Modular and compact for transport</li>
                            <li> Quick assembly without foundation</li>
                            <li> Disassemblable for relocation</li>
                            <li> Option to mount on trailer chassis</li>
                        </ul>
                    </div>
                </div>
                <div className='flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto'>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='268.22 cm' data-metric='8.8 ft'>8.8 ft</p>
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
                        {mountedVersion === 'wheels' ? (
                                <img src={FW.src} alt="Mounted on wheels" className='h-[353px] w-[744px]'/>
                            ) : (
                                <img src={FL.src} alt="Mounted on legs" className='h-[353px] w-[744px]'/>
                            )}
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
                            <p className='text-white text-lg' data-imperial='381 cm' data-metric='12.75 ft'>12.75 ft</p>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='722.37 cm' data-metric='23.7 ft'>23.7 ft</p>
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
                        <div className='h-[353px] w-[744px] flex justify-center items-center'>
                        <img src={selectedImage.src} alt="Dinámica con paneles" className='h-[353px] w-[744px]'/>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10'>
                    <div className='text-white font-normal flex flex-col gap-4'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>TANK DIMENSIONS</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
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
                        <div className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <div className='flex justify-between'>
                                <h1>Length:</h1>
                                <p data-imperial='365.75 cm' data-metric='12.0 ft'>12.0 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Width:</h1>
                                <p data-imperial='268.22 cm' data-metric='8.8 ft'>8.8 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Height:</h1>
                                <p data-imperial='201.17 cm' data-metric='6.6 ft'>6.6 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Capacity:</h1>
                                <p>20 tons</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-white font-normal flex flex-col gap-4'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CHASSIS & STRUCTURE</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
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
                        <div className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <div className='flex justify-between'>
                                <h1>Total length (including hitch):</h1>
                                <p data-imperial='1088.14 cm' data-metric='23.27 ft'>23.27 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Axle configuration: </h1>
                                <p>One Axle</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Fifth-wheel hitch height:</h1>
                                <p data-imperial='134.11 cm' data-metric='4.4 ft'>4.4 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Total Height:</h1>
                                <p data-imperial='260.00 cm' data-metric='8.5 ft'>8.5 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Discharge height (from ground):</h1>
                                <p data-imperial='381.00 cm' data-metric='12.5 ft'>12.5 ft</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-white font-normal flex flex-col gap-4'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>FEEDING & DISCHARGE <br />SYSTEM</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                            ...prev,
                            C4_3: !prev.C4_3
                            }))}>
                                <svg width="28px" height="28px"
                                stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000"
                                className={`transition-transform duration-300 transform ${
                                    openSections.C4_3 ? "rotate-180" : ""
                                }`}>
                                    <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 `}>
                            <div className='flex justify-between'>
                                <h1>Feeding belt width:</h1>
                                <p data-imperial='1088.14 cm' data-metric='23.27 ft'>23.27 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Collector belt width: </h1>
                                <p>One Axle</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-white font-normal flex flex-col gap-4'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>PUGMILL MIXING SYSTEM</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                            ...prev,
                            C4_4: !prev.C4_4
                            }))}>
                                <svg width="28px" height="28px"
                                stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000"
                                className={`transition-transform duration-300 transform ${
                                    openSections.C4_4 ? "rotate-180" : ""
                                }`}>
                                    <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_4 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Twin-shaft horizontal pugmill </li>
                        <li> High-resistance steel liners</li>
                        <li> Interchangeable paddles</li>
                        <li>Adjustable mixing time</li>
                        <li>Direct discharge gate to stockpile or truck</li>
                        <li>Driven by 10–15 HP electric motor</li>
                        <li>Speed reducer transmission</li>

                    </ul>
                    </div>
                </div>
            </div>
          
        )}
        {activeTab === 3 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1' id='column1' ref={columnGrid1}>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>FEEDING & DOSIGN SYSTEM</h1>
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
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>Vibrators on fine bins to ensure consistent feed</li>
                        <li>Rubber-coated head pulleys and CEMA-standard rollers</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Collector belt receives material from all bins for final dosing</li>
                        <li>Seamless integration with cold or hot mix asphalt plants</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>DURABILITY & SAFETY</h1>
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
                        <li>Galvanized bolts and anti-corrosion coating</li>
                        <li>Polyurethane and urethane belt cleaners for longer belt lifespan</li>
                        <li>Electrostatic paint finish for durability</li>
                        <li>Anti-slip aluminum panels for operator safety</li>
                        <li>Perforated guards and OSHA-compliant protections</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-[628px] order-1 md:order-2'>
                
            </div>
            <div className='flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3' id='column2' ref={columnGrid2}>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CONSTRUCTION & DESIGN</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Reinforced steel chassis for heavy-duty operation</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Foldable support legs</li>
                        <li>Removable transport skids</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Industrial Siemens motors</li>
                        <li>Grounded electrical wiring</li>
                        <li>Quick-connect terminals with weather protection</li>
                        <li>Motor control center with Siemens VFDs</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CONTROL & OPERATION</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                        <li>Diesel burner with automatic temperature control</li>
                        <li>Two operating modes: Manual and Automatic</li>
                        <li>Digital thermometers with programmable set points</li>
                        <li>Siemens PLC-based control system</li>
                        <li>100 L thermal oil expansion tank</li>
                    </ul>
                </div>
            </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10'>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>PORTABILITY</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>Fifth-wheel hitch for secure towing</li>
                            <li>Integrated braking and lighting system</li>
                            <li>DOT-compliant for road transport</li>
                            <li>Support legs for parking and stability</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>OPERATING CONFIGURATION</h1>
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
                        <div className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <div className='flex justify-between'>
                                    <h1>Maximum feeding capacity:</h1>
                                    <p>Up to 650 TPH</p>
                            </div>
                            <div className='flex justify-between text-end'>
                                    <h1>Feeding system:</h1>
                                    <p>Variable-speed dosing belts <br /> with fine motor control adjustment for precise dosing.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>OPERATING CONFIGURATION</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>EPA</li>
                            <li>OSHA</li>
                            <li>DOT</li>
                            <li>UL wiring</li>
                        </ul>
                    </div>
                </div>
                <div className='flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto'>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='268.22 cm' data-metric='8.8 ft'>8.8 ft</p>
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
                        <div className='w-[200px] h-[253px] flex items-center justify-center'>
                            {
                                mountedVersion === 'legs' ?
                                <img 
                                src={FL.src} 
                                alt="" 
                                className='max-w-full max-h-full object-contain'
                            />:
                            <img 
                                src={FW.src} 
                                alt="" 
                                className='max-w-full max-h-full object-contain'
                            />
                            }
                            
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end w-[90px] h-[253px]'>
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
                            <p className='text-white text-lg' data-imperial='381 cm' data-metric='12.75 ft'>12.75 ft</p>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='722.37 cm' data-metric='23.7 ft'>23.7 ft</p>
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
                        <div className='h-[253px] w-[744px] flex justify-center items-center'>
                            <img src={selectedImage.src} alt="Dinámica con paneles" className='h-[253px] w-[744px]'/>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10'>
                    <div className='text-white font-normal flex flex-col gap-4'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>SINGLE UNIT DIMENSIONS</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
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
                        <div className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <div className='flex justify-between'>
                                <h1>Length:</h1>
                                <p data-imperial='365.75 cm' data-metric='12.0 ft'>12.0 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Width:</h1>
                                <p data-imperial='268.22 cm' data-metric='8.8 ft'>8.8 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Height:</h1>
                                <p data-imperial='201.17 cm' data-metric='6.6 ft'>6.6 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Capacity:</h1>
                                <p>20 tons</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-white font-normal flex flex-col gap-4'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>CHASSIS & STRUCTURE</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
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
                        <div className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <div className='flex justify-between'>
                                <h1>Total length (including hitch):</h1>
                                <p data-imperial='1088.14 cm' data-metric='23.27 ft'>23.27 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Axle configuration: </h1>
                                <p>One Axle</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Fifth-wheel hitch height:</h1>
                                <p data-imperial='134.11 cm' data-metric='4.4 ft'>4.4 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Total width:</h1>
                                <p data-imperial='260.00 cm' data-metric='8.5 ft'>8.5 ft</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Height with bins in operation:</h1>
                                <p data-imperial='381.00 cm' data-metric='12.5 ft'>12.5 ft</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>BIN OPTIONS</h1>
                            <button className='block md:hidden' onClick={() => setOpenSections(prev => ({
                            ...prev,
                            C4_3: !prev.C4_3
                            }))}>
                                <svg width="28px" height="28px"
                                stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000"
                                className={`transition-transform duration-300 transform ${
                                    openSections.C4_3 ? "rotate-180" : ""
                                }`}>
                                    <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 `}>
                            <ul className='ml-6 list-disc'>
                                    <li>Grizzlies</li>
                                    <li>Bin level indicators</li>
                                    <li>Adjustable depth control gates</li>
                                    <li>Cable trays</li>
                                    <li>Bulkheads (available in full height)</li>
                                    <li>Self-relieving feeder throats</li>
                                    <li>Bin dividers</li>
                                    <li>Walkways</li>
                                </ul>
                                <ul className='ml-6 list-disc'>
                                    <li>Bin covers</li>
                                    <li>Built-in retaining walls</li>
                                    <li>Air cannons</li>
                                    <li>Moisture probes</li>
                                    <li>Wire mesh guarding</li>
                                    <li>Bin vibrators</li>
                                    <li>Bin extensions</li>
                                    <li>Built-in scalping screens</li>
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

export default CMPlanos;
