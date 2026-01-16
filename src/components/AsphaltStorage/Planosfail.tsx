import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ATMain from "../../assets/images/AsphaltStorage/ATMain.png";
import HLeftBS1 from '../../assets/images/HotMix/Silosf50-1.webp';
import HMainBR1 from '../../assets/images/HotMix/Silo-SF50TBpS.png';
import HMainBR2 from '../../assets/images/HotMix/Silo-SF100TBpS.png';
import HMainBR3 from '../../assets/images/HotMix/Silo-SF150TBpS.webp';
import HMainBR4 from '../../assets/images/HotMix/Silo-SF200TBpS.png';
import ATR1 from '../../assets/images/AsphaltStorage/ATR1.png';
import ATR2 from '../../assets/images/AsphaltStorage/ATR2.png';
import ATR3 from '../../assets/images/AsphaltStorage/ATR3.png';
import ATR4 from '../../assets/images/AsphaltStorage/ATR4.png';
import ATR5 from '../../assets/images/AsphaltStorage/ATR5.png';
import ATL1 from '../../assets/images/AsphaltStorage/ATL1.png';
import AS12 from "../../assets/images/AsphaltStorage/AS12.png";
import AS15 from "../../assets/images/AsphaltStorage/AS15.png";
import AS20 from "../../assets/images/AsphaltStorage/AS20.png";
import AS25 from "../../assets/images/AsphaltStorage/AS25.png";
import AS30 from "../../assets/images/AsphaltStorage/AS30.png";
gsap.registerPlugin(ScrollTrigger);

const toggleConfig = [
    {
        id:'12',
        dimensions:{
            width: 338.38,
            height: 424.34,
            length: 1281.50,
            tanklenght: 704,
            tangheight:274.10,
            capacity:45000,
            wheel:149.50
        }
    },
    {
        id:'15',
        dimensions:{
            width: 344.45,
            height: 424.34,
            length: 1498.75,
            tanklenght: 921,
            tangheight:274.10,
            capacity:60000,
            wheel:149.50
        }
    },
    {
        id:'20',
        dimensions:{
            width: 358.85,
            height: 424.34,
            length: 1726.26,
            tanklenght: 1149,
            tangheight:274.10,
            capacity:45000,
            wheel:149.50
        }
    },
    {
        id:'25',
        dimensions:{
            width: 371.47,
            height: 424.34,
            length: 2000.38,
            tanklenght: 1423.56,
            tangheight:274.10,
            capacity:100000,
            wheel:149.50
        }
    },
    {
        id:'30',
        dimensions:{
            width: 384.09,
            height: 424.34,
            length: 2274.51,
            tanklenght: 1697.51,
            tangheight:274.10,
            capacity:120000,
            wheel:149.50
        }
    }
]
const ASPlanos2 = () => {
    //logica de cambio de imagenes
    const [activeVersion, setActiveVersion] = useState('12');
  //tabs states
  const [activeTab, setActiveTab] = useState(1);
    // valor de cm a pies
    const cmToFeet = 0.0328084;
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

  //RENDERIZADO CONDICIONAL DE IMAGENES
  type VersionType = '12' | '15' | '20' | '25' | '30';
  const imageMap: Record<VersionType, string> = {
  '12': HMainBR1.src,
  '15': HMainBR2.src,
  '20': HMainBR3.src,
  '25': HMainBR4.src,
  '30': HMainBR4.src,
  // Agrega más versiones aquí
};
const imageMap2: Record<VersionType, string> = {
    '12': ATR1.src,
    '15': ATR2.src,
    '20': ATR3.src,
    '25': ATR4.src,
    '30': ATR5.src,
    // Agrega más versiones aquí
  };
  const imageMap3: Record<VersionType, string> = {
    '12': "AS12.src",
    '15': AS15.src,
    '20': AS20.src,
    '25': AS25.src,
    '30': AS30.src,
    // Agrega más versiones aquí
  };

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
    C4_1: false,
    C4_2: false,
  });


const activeData = toggleConfig.find(item => item.id === activeVersion);
const selectedImage = imageMap[activeVersion as VersionType] || HLeftBS1.src;
const selectedImage2 = imageMap2[activeVersion as VersionType] || HLeftBS1.src;
const selectedImage3 = imageMap3[activeVersion as VersionType] || AS12.src;

  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };
  // Función que busca elementos con data-metric/data-imperial y los actualiza
  

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
     let scrollTrig: ScrollTrigger | undefined;
   
 
    
     const updatePositions = () => {
         requestAnimationFrame(()=>{
             scrollTrig?.kill();
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
   
 
   scrollTrig = ScrollTrigger.create({
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
         })
     };
   if (activeVersion !== "12") {
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
   }else{
     gsap.set(box, {
     opacity: 1,
     display: 'block',
   });
   requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    updatePositions();
  });
});

   
   }
 
   
     // --- Listeners para recalcular ---
   const handleResize = () => updatePositions();
   const handleLayoutChange = () => updatePositions();
 
   window.addEventListener('resize', handleResize);
   window.addEventListener('layoutChange', handleLayoutChange);
   const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);
 
   return () => {
     scrollTrig?.kill(); // <-- evita error si no existe
     clearTimeout(refreshTimer);
     window.removeEventListener('resize', handleResize);
     window.removeEventListener('layoutChange', handleLayoutChange);
   };
 }, [activeTab,activeVersion]);

useEffect(() => {
  console.log("activeVersion cambió:", activeVersion);
  console.log('toggleConfig', toggleConfig);
console.log('activeVersion (tipo):', activeVersion, typeof activeVersion);
console.log('activeData', activeData);

}, [activeVersion]);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="h-[150vh] relative flex items-center justify-center bg-bgMain w-full">
      <div 
        className='absolute bottom-0 w-full h-4/6 overflow-hidden'
        style={{
            backgroundImage: 'url(/fondoAsphalt.webp)',
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
             z-20 w-[180px] h-[600px]"
        >
          <img
            src={AS12.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen de fondo"
            style={{
      display: (activeVersion === '12' && activeTab === 1) ? 'block' : 'none',
      opacity: (activeVersion === '12'&& activeTab === 1) ? 1 : 0,
      visibility: (activeVersion === '12' && activeTab === 1) ? 'visible' : 'hidden',
    }}
          />
          <img
            ref={imgRef}
            src={ATMain.src}
            className="absolute top-0 left-0 w-full h-full object-contain z-10"
            alt="Imagen superior"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>
      </div>
      <div 
      ref={clipTargetRef}
        id='sectionNueva'  
        className="bg-[url('/fondopatron.webp')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
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
        <h1 className='text-white lg:text-xl text-lg text-center mb-10'>MODELS:</h1>
      <div className="version-selector flex flex-col gap-10 justify-center mb-6">
        <div className='flex gap-10 justify-center'>
            <button
                
                onClick={() => {setActiveVersion('12'), setActiveTab(1)}}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                    activeVersion === '12' 
                    ? 'text-black bg-white border-white' 
                    : 'text-white bg-transparent border-white'
                }`}
                >
                12,000 GALLONS
                </button>
                <button
                onClick={() => (setActiveVersion('15'))}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                    activeVersion === '15' 
                    ? 'text-black bg-white border-white' 
                    : 'text-white bg-transparent border-white'
                }`}
                >
                15,000 GALLONS
            </button>
            <button
                onClick={() => setActiveVersion('20')}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                    activeVersion === '20' 
                    ? 'text-black bg-white border-white' 
                    : 'text-white bg-transparent border-white'
                }`}
                >
                20,000 GALLONS
                </button>
        </div>
        <div className='flex gap-10 justify-center'>
            <button
                onClick={() => setActiveVersion('25')}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                    activeVersion === '25' 
                    ? 'text-black bg-white border-white' 
                    : 'text-white bg-transparent border-white'
                }`}
                >
                25,000 GALLONS
                </button>
                <button
                onClick={() => setActiveVersion('30')}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                    activeVersion === '30' 
                    ? 'text-black bg-white border-white' 
                    : 'text-white bg-transparent border-white'
                }`}
                >
                30,000 GALLONS
                </button>
        </div>
            
      </div>

      </div>
      {/* Contenido de los tabs */}
      <div className="w-full mt-20 mb-10" id='tabsSection' ref={nextSectionRef}>
      {activeTab === 1 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center'>
                    <div className='flex flex-col items-start justify-start gap-0 md:gap-4 h-full col-span-1 w-full order-2 md:order-1 mt-10 md:mt-0' id='column1' ref={columnGrid1}>
                        <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
                                <div className='w-full flex justify-between border-b border-b-white'>
                                <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>HEATING SYSTEM</h1>
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
                                    <li>Option for oil heater instead of direct-fire heating</li>
                                    <li className='list-none'>
                                        <ul className='list-disc ml-10'>
                                            <li>1,000,000 and 2,400,000 Btu/hr capacity</li>
                                        </ul>
                                    </li>
                                    <li>High-efficiency 2” coil system inside the asphalt tank</li>
                                    <li>Connections for tankers with coil heating systems</li>
                                    <li>Stainless steel exterior lining</li>
                                </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white w-full'>
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
                                <li>Diesel burner with automatic temperature control</li>
                                <li>Two operating modes: Manual and Automatic</li>
                                <li>Digital thermometers with programmable set points</li>
                                <li>Siemens PLC-based control system</li>
                                <li>100 L thermal oil expansion tank</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white w-full'>
                            <div className='w-full flex justify-between border-b border-b-white'>
                                <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>PORTABILITY</h1>
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
                                <li>Equipped with a fifth-wheel hitch for secure coupling</li>
                                <li>Integrated braking system and lighting for safe operation</li>
                                <li>Dual-axle configuration for stability and load distribution</li>
                                <li>DOT-compliant lighting and reflective markings for transport visibility</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-1 md:col-span-2 flex items-start justify-center w-full min-h-[600px] max-h-[850px] order-1 md:order-2'>
                        <img src={selectedImage3} alt="" className='max-h-[700px]'/>
                    </div>
                    <div className='flex flex-col items-start justify-start h-full gap-0 md:gap-4 w-full col-span-1 order-3 md:order-3' id='column2' ref={columnGrid2}>
                        <div className='flex flex-col items-start justify-center gap-4 text-white w-full'>
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
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
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
                                        <li>Siemens motors and electrical parts</li>
                                        <li>Heavy-duty wiring with grounded connections</li>
                                        <li>Quick-connect terminals with weather protection</li>
                                        <li>Steel pulley power transmission with bushing mounts</li>
                                    </ul>
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
                            <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_3 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                                <li>High-resistance structure for long-term operation</li>
                                <li>Protected by electrostatic paint with strong adhesion</li>
                                <li>Bolted components with anti-corrosion coating</li>
                                <li>{activeVersion === '20' 
                                    ? '3" thermal insulation reduces surface temperature'
                                    : "Thermal insulation reduces surface temperature"}
                                </li>
                                <li>Reinforced anti-slip decks and railings</li>
                            </ul>
                        </div>
                    </div>  
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-4 justify-between mt-0 md:mt-10'>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPLIANCE WITH INDUSTRY <br /> STANDARDS</h1>
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
                            <li>EPA</li>
                            <li>OSHA</li>
                            <li>DOT</li>
                            <li>UL wiring</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1 md:col-span-3 md:pl-[15%]'>
                        <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>OPERATING TEMPERATURE</h1>
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
                        <div className={`transition-all duration-500 md:mb-0 w-full overflow-hidden pl-6 list-inside ${openSections.C3_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <div className='flex justify-between w-full'>
                                <ul className='list-disc'>
                                    <li><h1>Maximum achievable temperature:</h1></li>
                                </ul>
                                <p data-imperial='1,941.57 cm' data-metric='63.7 ft'>220 C</p>
                            </div>
                            <div className='flex justify-between w-full'>
                                <ul className='list-disc'>
                                    <li><h1>High-efficiency heating system:</h1></li>
                                </ul>
                                <p>Maintains asphalt at optimal working conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto'>
                    <div className='flex flex-col items-center justify-center w-[250px]'>
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
                            <p
                                className='text-white lg:text-lg text-base w-full text-center mx-4'>
                                {unit === 'metric'
                                ? `${activeData?.dimensions.width?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.width ?? 0) * cmToFeet).toFixed(1)} ft`}
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
                        <div className='w-[250px] flex items-center justify-center'>
                            <img src={ATL1.src} alt="" className=''/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end w-[90px] h-[295px]'>
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
                                ? `${activeData?.dimensions.height?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.height ?? 0) * cmToFeet).toFixed(1)} ft`}
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
                    <div className='flex flex-col items-center justify-center min-w-[800px] max-w-[1000px]'>
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
                                ? `${activeData?.dimensions.length?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.length ?? 0) * cmToFeet).toFixed(1)} ft`}
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
                        <div className='h-[295px] flex justify-center items-center'>
                            <img src={selectedImage2} alt="" className='h-[295px]' />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-10 gap-3 md:gap-10'>
                    <div className='text-white font-normal col-span-1'>
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
                            <p>
                                {unit === 'metric'
                                ? `${activeData?.dimensions.tanklenght?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.tanklenght ?? 0) * cmToFeet).toFixed(1)} ft`}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>
                                {unit === 'metric'
                                ? `${activeData?.dimensions.width?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.width ?? 0) * cmToFeet).toFixed(1)} ft`}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>
                                {unit === 'metric'
                                ? `${activeData?.dimensions.tangheight?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.tangheight ?? 0) * cmToFeet).toFixed(1)} ft`}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Capacity:</h1>
                            <p>{activeData?.dimensions.capacity} L</p>
                        </div>
                    </div>
                    </div>
                    <div className='text-white font-normal col-span-1 w-full'>
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
                            <p>
                                {unit === 'metric'
                                ? `${activeData?.dimensions.length?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.length ?? 0) * cmToFeet).toFixed(1)} ft`}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Axle configuration: </h1>
                            <p>One Axle</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Fifth-wheel hitch height<br className='block md:hidden'></br>(if pre-mounted):</h1>
                            <p>
                                {unit === 'metric'
                                ? `${activeData?.dimensions.wheel?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.wheel ?? 0) * cmToFeet).toFixed(1)} ft`}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total width:</h1>
                            <p>
                                {unit === 'metric'
                                ? `${activeData?.dimensions.width?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.width ?? 0) * cmToFeet).toFixed(1)} ft`}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total height:</h1>
                            <p>
                                {unit === 'metric'
                                ? `${activeData?.dimensions.height?.toFixed(1) ?? ''} cm`
                                : `${((activeData?.dimensions.height ?? 0) * cmToFeet).toFixed(1)} ft`}
                            </p>
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

export default ASPlanos2;
