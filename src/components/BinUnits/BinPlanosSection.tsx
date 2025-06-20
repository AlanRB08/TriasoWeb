import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import tolva6L2 from '../../assets/images/BinUnits/tolva6L2.png';
import tolva6L1 from '../../assets/images/BinUnits/tolva6L1.png';
import tolva6Main from '../../assets/images/BinUnits/tolva6Main.png';
import tolva5L1 from '../../assets/images/BinUnits/tolva5L1.png';
import tolva5Main from '../../assets/images/BinUnits/tolva5Main.png';
import tolva4L2 from '../../assets/images/BinUnits/tolva4L2.png';
import tolva4L1 from '../../assets/images/BinUnits/tolva4L1.png';
import tolva4F1 from '../../assets/images/BinUnits/tolva4F1.png';
import tolva4Main from '../../assets/images/BinUnits/tolva4Main.png';
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



gsap.registerPlugin(ScrollTrigger);




const BinPlanosSection = () => {
    //logica de cambio de imagenes
    const [activeVersion, setActiveVersion] = useState('withPanels');
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

  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

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
  

  if (!box || !target || !otro || !options || !col1 || !col2) return;

  let scrollTrig = null;

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

  const distanceToMove = target.getBoundingClientRect().top - box.getBoundingClientRect().top;

  scrollTrig = ScrollTrigger.create({
    id: 'boxScroll',
    trigger: box,
    start: 'top-=200 20%',
    end: `+=${distanceToMove}`,
    scrub: 1,
    markers: false,
    animation: gsap.to(box, {
      y: distanceToMove,
      ease: 'none',
    }),
    onUpdate: (self) => {
      const p = self.progress;

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
      <div className="flex items-center justify-center bg-bgMain">
        <div
          id='boxScroll'
          ref={boxRef}
          className="text-white font-bold
           flex items-center justify-center
            rounded will-change-transform transform-gpu
             z-20 w-[200px] h-auto"
        >
          <img src={tolva3Main.src} alt=""/>
        </div>
      </div>


      <div 
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

      <h1 className='text-white lg:text-xl text-lg text-center mb-10'>NUMBER OF UNITS:</h1>
      <div className="flex gap-10 justify-center">
        {/* Botón 1 */}
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
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
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
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
          className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full ${
            activeTab === 3
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          3 UNITS
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full ${
            activeTab === 4
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          4 UNITS
        </button>
        <button
          onClick={() => setActiveTab(5)}
          className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full ${
            activeTab === 5
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          5 UNITS
        </button>
        <button
          onClick={() => setActiveTab(6)}
          className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full ${
            activeTab === 6
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          6 UNITS
        </button>
      </div>

      </div>
      

      {/* Contenido de los tabs */}
      <div className="w-full mt-20 mb-10" id='tabsSection' ref={nextSectionRef}>
        {activeTab === 1 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start gap-4 h-full'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FEEDING & DOSIGN SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>Vibrators on fine bins to ensure consistent feed</li>
                        <li>Rubber-coated head pulleys and CEMA-standard rollers</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Collector belt receives material from all bins for final dosing</li>
                        <li>Seamless integration with cold or hot mix asphalt plants</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Diesel burner with automatic temperature control</li>
                        <li>Two operating modes: Manual and Automatic</li>
                        <li>Digital thermometers with programmable set points</li>
                        <li>Siemens PLC-based control system</li>
                        <li>100 L thermal oil expansion tank</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fifth-wheel hitch for secure towing</li>
                        <li>Integrated braking and lighting system</li>
                        <li>DOT-compliant for road transport</li>
                        <li>Support legs for parking and stability</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full'>
                <img src={tolva1Main.src} alt="" className='w-[230px] h-[628px]' />
            </div>
            <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Reinforced steel chassis for heavy-duty operation</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Foldable support legs</li>
                        <li>Removable transport skids</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Industrial Siemens motors</li>
                        <li>Grounded electrical wiring</li>
                        <li>Quick-connect terminals with weather protection</li>
                        <li>Motor control center with Siemens VFDs</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Galvanized bolts and anti-corrosion coating</li>
                        <li>Polyurethane and urethane belt cleaners for longer belt lifespan</li>
                        <li>Electrostatic paint finish for durability</li>
                        <li>Anti-slip aluminum panels for operator safety</li>
                        <li>Perforated guards and OSHA-compliant protections</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>OPERATING CONGIFURATION</h1>
                    <div className='flex justify-between'>
                            <h1>Maximum feeding capacity:</h1>
                            <p>Up to 650 TPH</p>
                      </div>
                      <div className='flex justify-between'>
                            <h1>Feeding system:</h1>
                            <p>Variable-speed dosing belts <br /> with fine motor control <br /> adjustment for precise  <br />dosing.</p>
                      </div>
                </div>
            </div>
                </div>
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
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>SINLGE UNIT DIMENSIONS</h1>
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
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
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
  
                    <div className='text-white font-normal col-span-2'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN OPTIONS</h1>
                        <div className='grid grid-cols-2 justify-center items-center'>
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
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start gap-4 h-full'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FEEDING & DOSIGN SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>Vibrators on fine bins to ensure consistent feed</li>
                        <li>Rubber-coated head pulleys and CEMA-standard rollers</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Collector belt receives material from all bins for final dosing</li>
                        <li>Seamless integration with cold or hot mix asphalt plants</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Diesel burner with automatic temperature control</li>
                        <li>Two operating modes: Manual and Automatic</li>
                        <li>Digital thermometers with programmable set points</li>
                        <li>Siemens PLC-based control system</li>
                        <li>100 L thermal oil expansion tank</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fifth-wheel hitch for secure towing</li>
                        <li>Integrated braking and lighting system</li>
                        <li>DOT-compliant for road transport</li>
                        <li>Support legs for parking and stability</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full'>
                <img src={tolva2Main.src} alt="" className='w-[230px] h-auto' />
            </div>
            <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Reinforced steel chassis for heavy-duty operation</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Foldable support legs</li>
                        <li>Removable transport skids</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Industrial Siemens motors</li>
                        <li>Grounded electrical wiring</li>
                        <li>Quick-connect terminals with weather protection</li>
                        <li>Motor control center with Siemens VFDs</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Galvanized bolts and anti-corrosion coating</li>
                        <li>Polyurethane and urethane belt cleaners for longer belt lifespan</li>
                        <li>Electrostatic paint finish for durability</li>
                        <li>Anti-slip aluminum panels for operator safety</li>
                        <li>Perforated guards and OSHA-compliant protections</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>OPERATING CONGIFURATION</h1>
                    <div className='flex justify-between'>
                            <h1>Maximum feeding capacity:</h1>
                            <p>Up to 650 TPH</p>
                      </div>
                      <div className='flex justify-between'>
                            <h1>Feeding system:</h1>
                            <p>Variable-speed dosing belts <br /> with fine motor control <br /> adjustment for precise  <br />dosing.</p>
                      </div>
                </div>
            </div>
                </div>
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
                        {activeVersion === 'withPanels' ? (
                                <img src={tolva2F1.src} alt="Dinámica con paneles" className='h-[353px] w-[744px]'/>
                            ) : (
                                <img src={tolva1F.src} alt="Dinámica sin paneles" className='h-[353px] w-[744px]'/>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='1088.14 cm' data-metric='35.7 ft'>35.7 ft</p>
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
                                <img src={tolva2L2.src} alt="Dinámica con paneles" className='h-[353px] w-[744px]'/>
                            ) : (
                                <img src={tolva2L1.src} alt="Dinámica sin paneles" className='h-[353px] w-[744px]'/>
                            )}
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>SINLGE UNIT DIMENSIONS</h1>
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
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Total length (including hitch):</h1>
                            <p data-imperial='1088.14 cm' data-metric='35.7 ft'>35.7 ft</p>
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
  
                    <div className='text-white font-normal col-span-2'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN OPTIONS</h1>
                        <div className='grid grid-cols-2 justify-center items-center'>
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

        {activeTab === 3 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start gap-4 h-full' id='column1' ref={columnGrid1}>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FEEDING & DOSIGN SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>Vibrators on fine bins to ensure consistent feed</li>
                        <li>Rubber-coated head pulleys and CEMA-standard rollers</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Collector belt receives material from all bins for final dosing</li>
                        <li>Seamless integration with cold or hot mix asphalt plants</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Diesel burner with automatic temperature control</li>
                        <li>Two operating modes: Manual and Automatic</li>
                        <li>Digital thermometers with programmable set points</li>
                        <li>Siemens PLC-based control system</li>
                        <li>100 L thermal oil expansion tank</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fifth-wheel hitch for secure towing</li>
                        <li>Integrated braking and lighting system</li>
                        <li>DOT-compliant for road transport</li>
                        <li>Support legs for parking and stability</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full'>
                <img src={tolva3Blue.src} alt="" className='w-[230px] h-auto' />
            </div>
            <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1' id='column2' ref={columnGrid2}>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Reinforced steel chassis for heavy-duty operation</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Foldable support legs</li>
                        <li>Removable transport skids</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Industrial Siemens motors</li>
                        <li>Grounded electrical wiring</li>
                        <li>Quick-connect terminals with weather protection</li>
                        <li>Motor control center with Siemens VFDs</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Galvanized bolts and anti-corrosion coating</li>
                        <li>Polyurethane and urethane belt cleaners for longer belt lifespan</li>
                        <li>Electrostatic paint finish for durability</li>
                        <li>Anti-slip aluminum panels for operator safety</li>
                        <li>Perforated guards and OSHA-compliant protections</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>OPERATING CONGIFURATION</h1>
                    <div className='flex justify-between'>
                            <h1>Maximum feeding capacity:</h1>
                            <p>Up to 650 TPH</p>
                      </div>
                      <div className='flex justify-between'>
                            <h1>Feeding system:</h1>
                            <p>Variable-speed dosing belts <br /> with fine motor control <br /> adjustment for precise  <br />dosing.</p>
                      </div>
                </div>
            </div>
                </div>
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
                                src={tolva2F1.src} 
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='1,333.30 cm' data-metric='43.75 ft'>43.75 ft</p>
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
                                <img src={tolva3L1.src} alt="Dinámica con paneles" className='h-[353px] w-[744px]'/>
                            ) : (
                                <img src={tolva2L1.src} alt="Dinámica sin paneles" className='h-[353px] w-[744px]'/>
                            )}
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>SINLGE UNIT DIMENSIONS</h1>
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
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Total length (including hitch):</h1>
                            <p data-imperial='1,333.30 cm' data-metric='43.75 ft'>43.75 ft</p>
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
  
                    <div className='text-white font-normal col-span-2'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN OPTIONS</h1>
                        <div className='grid grid-cols-2 justify-center items-center'>
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
        {activeTab === 4 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start gap-4 h-full'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FEEDING & DOSIGN SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>Vibrators on fine bins to ensure consistent feed</li>
                        <li>Rubber-coated head pulleys and CEMA-standard rollers</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Collector belt receives material from all bins for final dosing</li>
                        <li>Seamless integration with cold or hot mix asphalt plants</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Diesel burner with automatic temperature control</li>
                        <li>Two operating modes: Manual and Automatic</li>
                        <li>Digital thermometers with programmable set points</li>
                        <li>Siemens PLC-based control system</li>
                        <li>100 L thermal oil expansion tank</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fifth-wheel hitch for secure towing</li>
                        <li>Integrated braking and lighting system</li>
                        <li>DOT-compliant for road transport</li>
                        <li>Support legs for parking and stability</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full'>
                <img src={tolva4Main.src} alt="" className='w-[230px] h-auto' />
            </div>
            <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Reinforced steel chassis for heavy-duty operation</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Foldable support legs</li>
                        <li>Removable transport skids</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Industrial Siemens motors</li>
                        <li>Grounded electrical wiring</li>
                        <li>Quick-connect terminals with weather protection</li>
                        <li>Motor control center with Siemens VFDs</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Galvanized bolts and anti-corrosion coating</li>
                        <li>Polyurethane and urethane belt cleaners for longer belt lifespan</li>
                        <li>Electrostatic paint finish for durability</li>
                        <li>Anti-slip aluminum panels for operator safety</li>
                        <li>Perforated guards and OSHA-compliant protections</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>OPERATING CONGIFURATION</h1>
                    <div className='flex justify-between'>
                            <h1>Maximum feeding capacity:</h1>
                            <p>Up to 650 TPH</p>
                      </div>
                      <div className='flex justify-between'>
                            <h1>Feeding system:</h1>
                            <p>Variable-speed dosing belts <br /> with fine motor control <br /> adjustment for precise  <br />dosing.</p>
                      </div>
                </div>
            </div>
                </div>
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
                        {activeVersion === 'withPanels' ? (
                                <img src={tolva2F1.src} alt="Dinámica con paneles" className='h-[353px] w-[744px]'/>
                            ) : (
                                <img src={tolva4F1.src} alt="Dinámica sin paneles" className='h-[353px] w-[744px]'/>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='1,697 cm' data-metric='55.68 ft'>55.68 ft</p>
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
                                <img src={tolva4L2.src} alt="Dinámica con paneles" className='h-[353px] w-[744px]'/>
                            ) : (
                                <img src={tolva4L1.src} alt="Dinámica sin paneles" className='h-[353px] w-[744px]'/>
                            )}
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>SINLGE UNIT DIMENSIONS</h1>
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
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Total length (including hitch):</h1>
                            <p data-imperial='1,607.00 cm' data-metric='55.68 ft'>55.68 ft</p>
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
  
                    <div className='text-white font-normal col-span-2'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN OPTIONS</h1>
                        <div className='grid grid-cols-2 justify-center items-center'>
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
        {activeTab === 5 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start gap-4 h-full'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FEEDING & DOSIGN SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>Vibrators on fine bins to ensure consistent feed</li>
                        <li>Rubber-coated head pulleys and CEMA-standard rollers</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Collector belt receives material from all bins for final dosing</li>
                        <li>Seamless integration with cold or hot mix asphalt plants</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Diesel burner with automatic temperature control</li>
                        <li>Two operating modes: Manual and Automatic</li>
                        <li>Digital thermometers with programmable set points</li>
                        <li>Siemens PLC-based control system</li>
                        <li>100 L thermal oil expansion tank</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fifth-wheel hitch for secure towing</li>
                        <li>Integrated braking and lighting system</li>
                        <li>DOT-compliant for road transport</li>
                        <li>Support legs for parking and stability</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full'>
                <img src={tolva5Main.src} alt="" className='w-[230px] h-auto' />
            </div>
            <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Reinforced steel chassis for heavy-duty operation</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Foldable support legs</li>
                        <li>Removable transport skids</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Industrial Siemens motors</li>
                        <li>Grounded electrical wiring</li>
                        <li>Quick-connect terminals with weather protection</li>
                        <li>Motor control center with Siemens VFDs</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Galvanized bolts and anti-corrosion coating</li>
                        <li>Polyurethane and urethane belt cleaners for longer belt lifespan</li>
                        <li>Electrostatic paint finish for durability</li>
                        <li>Anti-slip aluminum panels for operator safety</li>
                        <li>Perforated guards and OSHA-compliant protections</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>OPERATING CONGIFURATION</h1>
                    <div className='flex justify-between'>
                            <h1>Maximum feeding capacity:</h1>
                            <p>Up to 650 TPH</p>
                      </div>
                      <div className='flex justify-between'>
                            <h1>Feeding system:</h1>
                            <p>Variable-speed dosing belts <br /> with fine motor control <br /> adjustment for precise  <br />dosing.</p>
                      </div>
                </div>
            </div>
                </div>
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
                        <div className='w-[136px] h-[175px] flex items-center justify-center'>
                        <img src={tolva2F1.src} alt="Dinámica sin paneles" className='h-[175px] w-[744px]'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end w-[90px] h-[175px]'>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='2,060.45 cm' data-metric='67.6 ft'>67.6 ft</p>
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
                        <div className='h-[175px] w-[744px] flex justify-center items-center'>
                        {activeVersion === 'withPanels' ? (
                                <img src={tolva3L1.src} alt="Dinámica con paneles" className='h-[175px] w-[744px]'/>
                            ) : (
                                <img src={tolva5L1.src} alt="Dinámica sin paneles" className='h-[175px] w-[744px]'/>
                            )}
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>SINLGE UNIT DIMENSIONS</h1>
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
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Total length (including hitch):</h1>
                            <p data-imperial='2,060.45 cm' data-metric='67.6 ft'>67.6 ft</p>
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
  
                    <div className='text-white font-normal col-span-2'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN OPTIONS</h1>
                        <div className='grid grid-cols-2 justify-center items-center'>
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
        {activeTab === 6 && (
            <div className='flex flex-col items-center justify-center' ref={containerRef}>
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-start gap-4 h-full'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FEEDING & DOSIGN SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>Vibrators on fine bins to ensure consistent feed</li>
                        <li>Rubber-coated head pulleys and CEMA-standard rollers</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Collector belt receives material from all bins for final dosing</li>
                        <li>Seamless integration with cold or hot mix asphalt plants</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Diesel burner with automatic temperature control</li>
                        <li>Two operating modes: Manual and Automatic</li>
                        <li>Digital thermometers with programmable set points</li>
                        <li>Siemens PLC-based control system</li>
                        <li>100 L thermal oil expansion tank</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fifth-wheel hitch for secure towing</li>
                        <li>Integrated braking and lighting system</li>
                        <li>DOT-compliant for road transport</li>
                        <li>Support legs for parking and stability</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 flex items-start justify-center w-full h-full'>
                <img src={tolva6Main.src} alt="" className='w-[230px] h-auto' />
            </div>
            <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Reinforced steel chassis for heavy-duty operation</li>
                        <li>Trapezoidal bin design for better material flow</li>
                        <li>Foldable support legs</li>
                        <li>Removable transport skids</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Industrial Siemens motors</li>
                        <li>Grounded electrical wiring</li>
                        <li>Quick-connect terminals with weather protection</li>
                        <li>Motor control center with Siemens VFDs</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Galvanized bolts and anti-corrosion coating</li>
                        <li>Polyurethane and urethane belt cleaners for longer belt lifespan</li>
                        <li>Electrostatic paint finish for durability</li>
                        <li>Anti-slip aluminum panels for operator safety</li>
                        <li>Perforated guards and OSHA-compliant protections</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>OPERATING CONGIFURATION</h1>
                    <div className='flex justify-between'>
                            <h1>Maximum feeding capacity:</h1>
                            <p>Up to 650 TPH</p>
                      </div>
                      <div className='flex justify-between'>
                            <h1>Feeding system:</h1>
                            <p>Variable-speed dosing belts <br /> with fine motor control <br /> adjustment for precise  <br />dosing.</p>
                      </div>
                </div>
            </div>
                </div>
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
                        <div className='w-[132px] h-[175px] flex items-center justify-center'>
                            <img 
                                src={tolva2F1.src} 
                                alt="" 
                                className='max-w-full max-h-full object-contain'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end w-[90px] h-[175px]'>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='2,423.80 cm' data-metric='79.50 ft'>79.50 ft</p>
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
                        <div className='h-[175px] w-[744px] flex justify-center items-center'>
                        {activeVersion === 'withPanels' ? (
                                <img src={tolva6L1.src} alt="Dinámica con paneles" className='h-[175px] w-[744px]'/>
                            ) : (
                                <img src={tolva6L2.src} alt="Dinámica sin paneles" className='h-[175px] w-[744px]'/>
                            )}
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>SINLGE UNIT DIMENSIONS</h1>
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
                    <div className='text-white font-normal col-span-1'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Total length (including hitch):</h1>
                            <p data-imperial='2,423.80 cm' data-metric='79.50 ft'>79.50 ft</p>
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
  
                    <div className='text-white font-normal col-span-2'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN OPTIONS</h1>
                        <div className='grid grid-cols-2 justify-center items-center'>
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

export default BinPlanosSection;
