<<<<<<< HEAD
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RAPMain from "../../assets/images/RapBins/RAPMain.png";
import RAPMain2 from "../../assets/images/RapBins/RAPMainBlue.png";
import tolva2L2 from "../../assets/images/BinUnits/tolva2L2.png";
import tolva2L1 from "../../assets/images/BinUnits/tolva2L1.png";
import tolva1L2 from "../../assets/images/BinUnits/tolva1L2.png";
import tolva1L1 from "../../assets/images/BinUnits/tolva1L1.png";
import tolva1F from "../../assets/images/BinUnits/tolva1F.png";
import tolva2F1 from "../../assets/images/BinUnits/tolva2F1.png";
import tolva1Main from "../../assets/images/BinUnits/tolva1Main.png";

gsap.registerPlugin(ScrollTrigger);

const singleUnit = {
  length: 365.75,
  width: 268.22,
  height: 201.17,
  capacity: "20 tons",
};
const structure = {
  length: 1088.14,
  axleConfi: "One Axle",
  wheel: 134.11,
  width: 260,
  height: 381,
};
const toggleConfig = [
  {
    id: "1",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 722.37,
      tph: 60,
    },
  },
  {
    id: "2",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 1088.14,
      tph: 120,
    },
  },
  {
    id: "3",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 957.9,
      tph: 120,
    },
  },
];
const RBPlanos = () => {
  //logica de cambio de imagenes
  const [activeVersion, setActiveVersion] = useState("withPanels");
  //tabs states
  const [activeTab, setActiveTab] = useState(2);

  //animation
=======
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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




const RBPlanos = () => {
    //logica de cambio de imagenes
    const [activeVersion, setActiveVersion] = useState('withPanels');
  //tabs states
  const [activeTab, setActiveTab] = useState(2);

  //animation 
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
  const boxRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const otroElemento = useRef<HTMLDivElement>(null);
  const columnGrid1 = useRef<HTMLDivElement>(null);
  const columnGrid2 = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const clipTargetRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  // valor de cm a pies
  const cmToFeet = 0.0328084;
=======

>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
<<<<<<< HEAD
  };
  const activeData = toggleConfig.find(
    (item) => item.id === activeTab.toString()
  );
=======
    updateElements(newUnit); // Actualiza los elementos en el DOM
  };
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
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

<<<<<<< HEAD
  useEffect(() => {
    const box = boxRef.current;
    const target = nextSectionRef.current; //target original
    const clipTarget = clipTargetRef.current; //target del clipath
    const img = imgRef.current;
    const otro = otroElemento.current;
    const options = optionsRef.current;
    const col1 = columnGrid1.current;
    const col2 = columnGrid2.current;

    if (
      !box ||
      !target ||
      !clipTarget ||
      !img ||
      !otro ||
      !options ||
      !col1 ||
      !col2
    )
      return;

    if (activeTab !== 2) {
      gsap.set(box, {
        y: 0,
        opacity: 0,
        display: "none",
      });
      return;
    }

    gsap.set(box, {
      opacity: 1,
      display: "block",
    });

    // Cálculo de posiciones absolutas
    const boxTopAbs = box.getBoundingClientRect().top + window.scrollY;
    const boxHeight = box.offsetHeight;
    const boxBottomAbs = boxTopAbs + boxHeight;
    const targetTopAbs = target.getBoundingClientRect().top + window.scrollY;
    const clipTargetTopAbs =
      clipTarget.getBoundingClientRect().top + window.scrollY;

    // Desplazamiento total (se mantiene con el target original)
    const distanceToMove = targetTopAbs - boxTopAbs;

    // Nuevos cálculos para clipPath basado en clipTarget
    const clipStart = (clipTargetTopAbs - boxBottomAbs) / distanceToMove;
    const clipEnd = (clipTargetTopAbs - boxTopAbs) / distanceToMove;
    const clipStartClamped = Math.max(0, Math.min(clipStart, 1));
    const clipEndClamped = Math.max(0, Math.min(clipEnd, 1));

    const scrollDistanceReductionFactor = 0.8; // Reduce el scroll a la mitad (50%)
    const adjustedDistanceToMove = distanceToMove; // Mantenemos la misma distancia física
    const adjustedScrollDistance =
      distanceToMove * scrollDistanceReductionFactor; // Scroll más corto

    const scrollTrig = ScrollTrigger.create({
      id: "boxScroll",
      trigger: box,
      start: "top+=70 20%",
      end: `+=${adjustedScrollDistance}`,
      scrub: true,
      markers: false,
      animation: gsap.to(box, {
        y: adjustedDistanceToMove,
        ease: "none",
      }),
      onUpdate: (self) => {
        const p = self.progress;
        // ClipPath interpolado usando clipTarget
        let clipProgress = 0;
        if (clipEndClamped > clipStartClamped) {
          clipProgress =
            (p - clipStartClamped) / (clipEndClamped - clipStartClamped);
        }
        clipProgress = Math.max(0, Math.min(clipProgress, 1));

        gsap.set(img, {
          clipPath: `inset(0% 0% ${clipProgress * 100}% 0%)`,
        });

        gsap.to(otro, {
          opacity: p >= 0.8 && p <= 1.0 ? 1 : 0,
          y: p >= 0.8 && p <= 1.0 ? 0 : -50,
          scale: p >= 0.8 && p <= 1.0 ? 1 : 0.95,
          ease: "none",
          duration: 0.8,
        });

        gsap.to(options, {
          opacity: p >= 0.9 && p <= 1.0 ? 1 : 0,
          y: p >= 0.9 && p <= 1.0 ? 0 : -50,
          scale: p >= 0.9 && p <= 1.0 ? 1 : 0.95,
          ease: "none",
          duration: 0.8,
        });

        gsap.to(col1, {
          opacity: p >= 0.9 && p <= 1 ? 1 : 0,
          x: p >= 0.9 && p <= 1 ? 0 : -50,
          scale: p >= 0.9 && p <= 1 ? 1 : 0.95,
          ease: "none",
          duration: 0.8,
        });

        gsap.to(col2, {
          opacity: p >= 0.9 && p <= 1.0 ? 1 : 0,
          x: p >= 0.9 && p <= 1.0 ? 0 : 50,
          scale: p >= 0.9 && p <= 1.0 ? 1 : 0.95,
          ease: "none",
          duration: 0.8,
        });
      },
    });

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      scrollTrig?.kill(); // <-- evita error si no existe
      clearTimeout(refreshTimer);
    };
  }, [activeTab]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="h-[150vh] relative flex items-center justify-center bg-bgMain w-full">
        <div
          className="absolute bottom-0 w-full h-4/6 overflow-hidden"
          style={{
            backgroundImage: "url(/fondoAsphalt.png)",
            backgroundRepeat: "repeat-x", // Se repetirá horizontalmente si es necesario
            backgroundPosition: "center bottom",
            backgroundSize: "auto 100%", // Mantiene la altura completa y el ancho automático (se repetirá)
          }}
        ></div>
        <div
          id="boxScroll"
=======
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


  if (activeTab !== 2) {
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
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
          ref={boxRef}
          className="text-white font-bold
           flex items-center justify-center
            rounded will-change-transform transform-gpu
<<<<<<< HEAD
             z-20 w-[180px] h-[560px]"
        >
          <img
            src={RAPMain2.src}
            className="absolute top-0 left-0 w-full h-full object-contain"
            alt="Imagen de fondo"
            style={{
              display: activeTab === 2 ? "block" : "none",
              opacity: activeTab === 2 ? 1 : 0,
              visibility: activeTab === 2 ? "visible" : "hidden",
            }}
          />
          <img
            ref={imgRef}
            src={RAPMain.src}
            className="absolute top-0 left-0 w-full h-full object-contain"
=======
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
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
            alt="Imagen superior"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>
      </div>

<<<<<<< HEAD
      <div
        ref={clipTargetRef}
        id="sectionNueva"
        className="bg-[url('/fondopatron.png')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
      >
        <header className="mt-10 text-white" ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            Specifications
          </h1>
          <h1 className="text-white lg:text-xl text-lg text-center mb-10 mt-10">
            NUMBER OF UNITS:
          </h1>
          <div className="flex gap-3 justify-center w-full md:px-32 items-center justify-items-center">
            {/* Botón 1 */}
            <button
              onClick={() => setActiveTab(1)}
              className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 max-w-[100px] ${
                activeTab === 1
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
              }`}
            >
              1 UNIT
            </button>

            {/* Botón 2 */}
            <button
              onClick={() => setActiveTab(2)}
              className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 max-w-[100px] ${
                activeTab === 2
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
              }`}
            >
              2 UNITS
            </button>
          </div>
        </header>
        <div className="w-full px-8 lg:px-8 mt-14">
          {/* Contenedor de los botones */}
          <div id="options" ref={optionsRef} className="w-full">
            <h1 className="text-white lg:text-xl text-lg text-center mb-10">
              EXTERIOR:
            </h1>
            <div className="version-selector flex gap-10 justify-center mb-6">
              <button
                onClick={() => setActiveVersion("withPanels")}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                  activeVersion === "withPanels"
                    ? "text-black bg-white border-white"
                    : "text-white bg-transparent border-white"
                }`}
              >
                Aesthetic Side Panels
              </button>
              <button
                onClick={() => setActiveVersion("withoutPanels")}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                  activeVersion === "withoutPanels"
                    ? "text-black bg-white border-white"
                    : "text-white bg-transparent border-white"
                }`}
              >
                Without Aesthetic Side Panels
              </button>
            </div>

            <div className="flex items-center justify-center mt-10">
              <h1 className="mr-3 text-white" id="measure">
                MEASURE:
              </h1>
              <div
                onClick={toggleUnit}
                className="relative w-48 h-10 rounded-full border border-white cursor-pointer select-none"
              >
                {/* Fondo deslizante */}
                <div
                  className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${
                    unit === "metric" ? "translate-x-full" : ""
                  }`}
=======

      <div 
      ref={clipTargetRef}
        id='sectionNueva'  
        className="bg-[url('/fondopatron.png')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
      >
        <header className='mt-10 text-white' ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">Specifications</h1>
          <h1 className='text-white lg:text-xl text-lg text-center mb-10 mt-10'>NUMBER OF UNITS:</h1>
      <div className="flex gap-3 justify-center w-full md:px-32 items-center justify-items-center">
        {/* Botón 1 */}
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 max-w-[100px] ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          1 UNIT
        </button>

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
      </div>
        </header>
        <div className="w-full px-8 lg:px-8 mt-14">
        
      {/* Contenedor de los botones */}
      <div id='options' ref={optionsRef} className='w-full'>
        <h1 className='text-white lg:text-xl text-lg text-center mb-10'>EXTERIOR:</h1>
      <div className="version-selector flex gap-10 justify-center mb-6">
      <button
          
          onClick={() => setActiveVersion('withPanels')}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeVersion === 'withPanels' 
              ? 'text-black bg-white border-white' 
              : 'text-white bg-transparent border-white'
          }`}
        >
          Aesthetic Side Panels
        </button>
        <button
          onClick={() => setActiveVersion('withoutPanels')}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeVersion === 'withoutPanels' 
              ? 'text-black bg-white border-white' 
              : 'text-white bg-transparent border-white'
          }`}
        >
          Without Aesthetic Side Panels
        </button>
      </div>

      
      <div className='flex items-center justify-center mt-10'>
            <h1 className='mr-3 text-white' id='measure'>MEASURE:</h1>
            <div
                onClick={toggleUnit}
                className="relative w-48 h-10 rounded-full border border-white cursor-pointer select-none"
                >
                {/* Fondo deslizante */}
                <div
                    className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${
                    unit === 'metric' ? 'translate-x-full' : ''
                    }`}
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
                ></div>

                {/* Texto sobrepuesto */}
                <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-bold">
<<<<<<< HEAD
                  <span
                    className={
                      unit === "imperial" ? "text-black" : "text-white"
                    }
                  >
                    IMPERIAL
                  </span>
                  <span
                    className={unit === "metric" ? "text-black" : "text-white"}
                  >
                    METRIC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido de los tabs */}
          <div
            className="w-full mt-20 mb-10"
            id="tabsSection"
            ref={nextSectionRef}
          >
            {activeTab === 1 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          FEEDING & DOSIGN SYSTEM
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_1: !prev.C1_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>18" variable-speed dosing belt</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>
                          Flow sensor triggers air cannons to avoid clogging
                        </li>
                        <li>
                          24" feeding conveyor wide conveyor belt for smoother
                          low-speed transport
                        </li>
                        <li>
                          Rubber-coated head pulleys and CEMA-standard rollers
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DURABILITY & SAFETY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_2: !prev.C1_2,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        {activeVersion === "withPanels" ? (
                          <li>Aesthetic side panels for professional image</li>
                        ) : null}
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>120-gallon air tank for air cannon operation</li>
                        <li>Belt cleaners for longer belt lifespan</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Built-in skirtboards to contain material</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tolva1Main.src}
                      alt=""
                      className="w-[240px] h-[600px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL & OPERATION
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_1: !prev.C2_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Fully automatic or manual operation</li>
                        <li>
                          Digital monitoring of all operating parameters, with
                          real-time supervision and historical data reports.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Remote monitoring system accessible from
                              computers, tablets, and smartphones.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Alarm and interlock system for out-of-range
                          conditions.
                        </li>
                        <li>
                          Independent, intuitive controls designed for field
                          reliability.
                        </li>
                        <li>
                          Adaptable to existing asphalt plant control
                          infrastructure
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Seamless integration to central control systems
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Mounted on standard transport chassis with one axle
                          and 16” highway-rated wheels.
                        </li>
                        <li>
                          Pull-type hitch with safety coupling and brake system.
                        </li>
                        <li>Setup requires no crane or hoisting equipment.</li>
                        <li>Bolt-on support legs for fast on-site assembly.</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        COMPONENTS & ELECTRICAL
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_1: !prev.C3_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C3_1 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                        openSections.C3_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>
                        Industrial-grade motors, components, and Siemens wiring.
                      </li>
                      <li>Simplified wiring system for easy maintenance.</li>
                      <li>Weather-protected electrical connections.</li>
                      <li>Pulley-and-bushing drive system.</li>
                      <li>
                        External fuel lines, sensors, and signal cabling
                        pre-installed.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-2 px-0 md:px-10 lg:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        OPERATING CONFIGURATION
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_3: !prev.C3_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C3_3 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full text-sm lg:text-base list-disc list-inside ${
                        openSections.C3_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="w-full flex justify-between">
                        <p>Maximum feeding capacity:</p>
                        <p>Up to 60 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        COMPLIANCE WITH INDUSTRY STANDARDS
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_2: !prev.C3_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C3_2 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                        openSections.C3_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>UL wiring</li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
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
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
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
                    <div className="w-[200px] h-[250px] flex items-center justify-center">
                      <img
                        src={tolva1F.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[250px]">
                    <div className="border-dotted border-t border-t-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 5 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
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
                    <div className="my-3">
                      <p className="text-white text-lg">
                        {unit === "metric"
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                      </p>
                    </div>
                    <div className="border-dotted border-b border-b-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 8 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
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
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
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
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } cm`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
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
                    <div className="h-[250px] min-w-[500px] flex justify-center items-center">
                      {activeVersion === "withPanels" ? (
                        <img
                          src={tolva1L2.src}
                          alt="Dinámica con paneles"
                          className="h-[250px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva1L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[250px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        SINGLE UNIT DIMENSIONS
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_1: !prev.C4_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C4_1 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                        openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${singleUnit?.length?.toFixed(1) ?? ""} cm`
                            : `${((singleUnit?.length ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${singleUnit?.width?.toFixed(1) ?? ""} cm`
                            : `${((singleUnit?.width ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${singleUnit?.height?.toFixed(1) ?? ""} cm`
                            : `${((singleUnit?.height ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacity:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        CHASSIS & STRUCTURE
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_2: !prev.C4_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C4_2 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                        openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including hitch):</h1>
                        <p>
                          {unit === "metric"
                            ? `${structure?.length?.toFixed(1) ?? ""} cm`
                            : `${((structure?.length ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>One Axle</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${structure?.wheel?.toFixed(1) ?? ""} cm`
                            : `${((structure?.wheel ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${structure?.width?.toFixed(1) ?? ""} cm`
                            : `${((structure?.width ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height with bins in operation:</h1>
                        <p>
                          {unit === "metric"
                            ? `${structure?.height?.toFixed(1) ?? ""} cm`
                            : `${((structure?.height ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        BIN OPTIONS
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_3: !prev.C4_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C4_3 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`text-sm lg:text-base grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                        openSections.C4_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-2 lg:ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Bin level indicators</li>
                        <li>Adjustable depth control gates</li>
                        <li>Cable trays</li>
                        <li>Bulkheads (available in full height)</li>
                        <li>Self-relieving feeder throats</li>
                        <li>Bin dividers</li>
                        <li>Walkways</li>
                      </ul>
                      <ul className="ml-2 lg:ml-6 list-disc">
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
            {activeTab === 2 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div
                    className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          FEEDING & DOSIGN SYSTEM
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_1: !prev.C1_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>18" variable-speed dosing belt</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>
                          Flow sensor triggers air cannons to avoid clogging
                        </li>
                        <li>
                          24" feeding conveyor wide conveyor belt for smoother
                          low-speed transport
                        </li>
                        <li>
                          Rubber-coated head pulleys and CEMA-standard rollers
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DURABILITY & SAFETY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_2: !prev.C1_2,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        {activeVersion === "withPanels" ? (
                          <li>Aesthetic side panels for professional image</li>
                        ) : null}
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>120-gallon air tank for air cannon operation</li>
                        <li>Belt cleaners for longer belt lifespan</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Built-in skirtboards to contain material</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2 min-h-[600px]"></div>
                  <div
                    className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL & OPERATION
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_1: !prev.C2_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Fully automatic or manual operation</li>
                        <li>
                          Digital monitoring of all operating parameters, with
                          real-time supervision and historical data reports.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Remote monitoring system accessible from
                              computers, tablets, and smartphones.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Alarm and interlock system for out-of-range
                          conditions.
                        </li>
                        <li>
                          Independent, intuitive controls designed for field
                          reliability.
                        </li>
                        <li>
                          Adaptable to existing asphalt plant control
                          infrastructure
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Seamless integration to central control systems
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Mounted on standard transport chassis with one axle
                          and 16” highway-rated wheels.
                        </li>
                        <li>
                          Pull-type hitch with safety coupling and brake system.
                        </li>
                        <li>Setup requires no crane or hoisting equipment.</li>
                        <li>Bolt-on support legs for fast on-site assembly.</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        COMPONENTS & ELECTRICAL
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_1: !prev.C3_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C3_1 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                        openSections.C3_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>
                        Industrial-grade motors, components, and Siemens wiring.
                      </li>
                      <li>Simplified wiring system for easy maintenance.</li>
                      <li>Weather-protected electrical connections.</li>
                      <li>Pulley-and-bushing drive system.</li>
                      <li>
                        External fuel lines, sensors, and signal cabling
                        pre-installed.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-2 px-0 md:px-10 lg:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        OPERATING CONFIGURATION
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_3: !prev.C3_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C3_3 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full text-sm lg:text-base list-disc list-inside ${
                        openSections.C3_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="w-full flex justify-between">
                        <p>Maximum feeding capacity:</p>
                        <p>Up to 120 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        COMPLIANCE WITH INDUSTRY STANDARDS
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_2: !prev.C3_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C3_2 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                        openSections.C3_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>UL wiring</li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
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
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
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
                    <div className="w-[200px] h-[250px] flex items-center justify-center">
                      <img
                        src={tolva2F1.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[250px]">
                    <div className="border-dotted border-t border-t-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 5 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
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
                    <div className="my-3">
                      <p className="text-white text-lg">
                        {unit === "metric"
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                      </p>
                    </div>
                    <div className="border-dotted border-b border-b-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 8 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
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
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
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
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } cm`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
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
                    <div className="h-[250px] min-w-[600px] flex justify-center items-center">
                      {activeVersion === "withPanels" ? (
                        <img
                          src={tolva2L2.src}
                          alt="Dinámica con paneles"
                          className="h-[250px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva2L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[250px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        SINGLE UNIT DIMENSIONS
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_1: !prev.C4_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C4_1 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                        openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${singleUnit?.length?.toFixed(1) ?? ""} cm`
                            : `${((singleUnit?.length ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${singleUnit?.width?.toFixed(1) ?? ""} cm`
                            : `${((singleUnit?.width ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${singleUnit?.height?.toFixed(1) ?? ""} cm`
                            : `${((singleUnit?.height ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacity:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        CHASSIS & STRUCTURE
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_2: !prev.C4_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C4_2 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                        openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including hitch):</h1>
                        <p>
                          {unit === "metric"
                            ? `${structure?.length?.toFixed(1) ?? ""} cm`
                            : `${((structure?.length ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>One Axle</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${structure?.wheel?.toFixed(1) ?? ""} cm`
                            : `${((structure?.wheel ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${structure?.width?.toFixed(1) ?? ""} cm`
                            : `${((structure?.width ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height with bins in operation:</h1>
                        <p>
                          {unit === "metric"
                            ? `${structure?.height?.toFixed(1) ?? ""} cm`
                            : `${((structure?.height ?? 0) * cmToFeet).toFixed(
                                1
                              )} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        BIN OPTIONS
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_3: !prev.C4_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${
                            openSections.C4_3 ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`text-sm lg:text-base grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                        openSections.C4_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                      } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-2 lg:ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Bin level indicators</li>
                        <li>Adjustable depth control gates</li>
                        <li>Cable trays</li>
                        <li>Bulkheads (available in full height)</li>
                        <li>Self-relieving feeder throats</li>
                        <li>Bin dividers</li>
                        <li>Walkways</li>
                      </ul>
                      <ul className="ml-2 lg:ml-6 list-disc">
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
=======
                    <span className={unit === 'imperial' ? 'text-black' : 'text-white'}>
                    IMPERIAL
                    </span>
                    <span className={unit === 'metric' ? 'text-black' : 'text-white'}>
                    METRIC
                    </span>
                </div>
                </div>
          </div>
      </div>
      

      {/* Contenido de los tabs */}
      <div className="w-full mt-20 mb-10" id='tabsSection' ref={nextSectionRef}>
        {activeTab === 1 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='flex flex-col md:grid md:grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1'>
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
                        <li>18" variable-speed dosing belt</li>
                        <li>Fine motor control down to 1 rpm for accurate flow</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>Trapezoidal discharge gate for smooth material flow</li>
                        <li>Flow sensor triggers air cannons to avoid clogging</li>
                        <li>24" wide conveyor belt for smoother low-speed transport</li>
                        <li>Polyethylene scraper and onboard vibrator prevent material build-up</li>
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
                        <li>Variable-speed dosing system integrated with plant control console</li>
                        <li>Digital interface for dosage adjustment and monitoring</li>
                        <li>Real-time feedback of flow rate for precision control</li>
                        <li>Adaptable to existing asphalt plant control infrastructure</li>
                        <li>Fully compatible with cold or hot mix asphalt plants, with seamless integration to central control systems</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2'>
                <img src={tolva1Main.src} alt="" className='w-[240px] h-[600px]' />
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
                        <li>Extra-reinforced steel structure</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Low-profile frame for easy relocation</li>
                        <li>Galvanized bolts for corrosion resistance</li>
                        <li>Automotive-grade electrostatic paint</li>
                        <li>Oversized Browning™ gear reducers</li>
                        <li>Steel pulleys for heavy-duty power transmission</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>PORTABILITY</h1>
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
                        <li>Compact and low-profile structure designed for easy transportation and relocation</li>
                        <li>Mounted on wheels:</li>
                        <ul className='ml-6'>
                            <li>Equipped with a fifth-wheel hitch for secure towing</li>
                            <li>Integrated braking and lighting system for safe road transport</li>
                            <li>Dual-axle configuration ensures stability and even load distribution</li>
                        </ul>
                        <li>Mounted on legs:</li>
                        <ul className='ml-6'>
                            <li>Support legs pre-set at working height for fast and stable on-site setup</li>
                        </ul>
                    </ul>
                </div>
            </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10'>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>DURABILITY & SAFETY</h1>
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
                            <li>Perforated guards for moving parts</li>
                            <li>Built-in skirtboards to contain material</li>
                            <li>Hooks for safety tensioners</li>
                            <li>120-gallon air tank for air cannon operation</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>EPA</li>
                            <li>OSHA</li>
                            <li>DOT</li>
                            <li>UL wiring</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
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
                            <li>Siemens™ motors and electrical components</li>
                            <li>Polarized cabling with weather-sealed connections</li>
                            <li>CEMA-standard pulleys and idlers</li>
                            <li>Weather-resistant quick-connect terminals</li>
                            <li>Motor control center with Siemens VFDs</li>
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
                            <img 
                                src={tolva1F.src} 
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
                        {activeVersion === 'withPanels' ? (
                                <img src={tolva1L2.src} alt="Dinámica con paneles" className='h-[353px] w-[744px]'/>
                            ) : (
                                <img src={tolva1L1.src} alt="Dinámica sin paneles" className='h-[353px] w-[744px]'/>
                            )}
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
        {activeTab === 2 && (
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
                        <li>18" variable-speed dosing belt</li>
                        <li>Fine motor control down to 1 rpm for accurate flow</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>Trapezoidal discharge gate for smooth material flow</li>
                        <li>Flow sensor triggers air cannons to avoid clogging</li>
                        <li>24" wide conveyor belt for smoother low-speed transport</li>
                        <li>Polyethylene scraper and onboard vibrator prevent material build-up</li>
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
                        <li>Variable-speed dosing system integrated with plant control console</li>
                        <li>Digital interface for dosage adjustment and monitoring</li>
                        <li>Real-time feedback of flow rate for precision control</li>
                        <li>Adaptable to existing asphalt plant control infrastructure</li>
                        <li>Fully compatible with cold or hot mix asphalt plants, with seamless integration to central control systems</li>
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
                        <li>Extra-reinforced steel structure</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Low-profile frame for easy relocation</li>
                        <li>Galvanized bolts for corrosion resistance</li>
                        <li>Automotive-grade electrostatic paint</li>
                        <li>Oversized Browning™ gear reducers</li>
                        <li>Steel pulleys for heavy-duty power transmission</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>PORTABILITY</h1>
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
                        <li>Compact and low-profile structure designed for easy transportation and relocation</li>
                        <li>Mounted on wheels:</li>
                        <ul className='ml-6'>
                            <li>Equipped with a fifth-wheel hitch for secure towing</li>
                            <li>Integrated braking and lighting system for safe road transport</li>
                            <li>Dual-axle configuration ensures stability and even load distribution</li>
                        </ul>
                        <li>Mounted on legs:</li>
                        <ul className='ml-6'>
                            <li>Support legs pre-set at working height for fast and stable on-site setup</li>
                        </ul>
                    </ul>
                </div>
            </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10'>
                <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>DURABILITY & SAFETY</h1>
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
                            <li>Perforated guards for moving parts</li>
                            <li>Built-in skirtboards to contain material</li>
                            <li>Hooks for safety tensioners</li>
                            <li>120-gallon air tank for air cannon operation</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
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
                        <ul className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2 ? "max-h-96 opacity-1 mb-4" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
                            <li>EPA</li>
                            <li>OSHA</li>
                            <li>DOT</li>
                            <li>UL wiring</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4 text-white col-span-1'>
                    <div className='w-full flex justify-between border-b border-b-white'>
                            <h1 className='font-bold lg:text-xl text-lg w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
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
                            <li>Siemens™ motors and electrical components</li>
                            <li>Polarized cabling with weather-sealed connections</li>
                            <li>CEMA-standard pulleys and idlers</li>
                            <li>Weather-resistant quick-connect terminals</li>
                            <li>Motor control center with Siemens VFDs</li>
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
                            <img 
                                src={tolva1F.src} 
                                alt="" 
                                className='max-w-full max-h-full object-contain'
                            />
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
                        {activeVersion === 'withPanels' ? (
                                <img src={tolva2L2.src} alt="Dinámica con paneles" className='h-[253px] w-[744px]'/>
                            ) : (
                                <img src={tolva2L1.src} alt="Dinámica sin paneles" className='h-[253px] w-[744px]'/>
                            )}
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
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
      </div>
    </div>
  );
};

export default RBPlanos;
