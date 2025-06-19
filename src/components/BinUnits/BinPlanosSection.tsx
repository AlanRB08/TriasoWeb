import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reinfo1 from '../../assets/images/IntegralAsphalt/reinfo1.png';
import reinforcedBlue from '../../assets/images/IntegralAsphalt/reinforced.png';
import reinforcedRight from '../../assets/images/IntegralAsphalt/reinfright.png';
import reinforcedLeft from '../../assets/images/IntegralAsphalt/reinfleft.png';
import supportRight from '../../assets/images/IntegralAsphalt/supportright.png';
import supportLeft from '../../assets/images/IntegralAsphalt/supportleft.png';
import supportMain from '../../assets/images/IntegralAsphalt/supportmain.png';
import standarMain from '../../assets/images/IntegralAsphalt/standarmain.png';
import standarRight from '../../assets/images/IntegralAsphalt/standarright.png';
import standarLeft from '../../assets/images/IntegralAsphalt/standarleft.png';


gsap.registerPlugin(ScrollTrigger);

const BinPlanosSection = () => {
  //tabs states
  const [activeTab, setActiveTab] = useState(2);

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
      <div className="h-screen flex items-center justify-center bg-bgMain">
        <div
          id='boxScroll'
          ref={boxRef}
          className="text-white font-bold
           flex items-center justify-center
            rounded will-change-transform transform-gpu
             z-20 w-[230px] h-[628px]"
        >
          <img src={reinfo1.src} alt=""/>
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
      <h1 className='text-white lg:text-xl text-lg text-center mb-4'>EXTERIOR:</h1>
      <div className="flex justify-center gap-10 mb-6">
        {/* Botón 1 */}
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          Aesthetic Side Panels
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
          Without Aesthetic Side Panels
        </button>
      </div>
      <h1 className='text-white lg:text-xl text-lg text-center mb-4'>NUMBER OF UNITS:</h1>
      <div className="flex justify-center gap-10">
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
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          3 UNITS
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          4 UNITS
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          5 UNITS
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeTab === 1
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
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FEEDING & DOSING SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>Vibrators on fine bins to ensure consistent feed</li>
                        <li>Rubber-coated head pulleys and CEMA-standard rollers</li>
                        <li>Independent discharge gates on each bin</li>
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
                <img src={supportMain.src} alt="" className='w-[230px] h-[628px]' />
            </div>
            <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION DESIGN</h1>
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
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>OPERATING CONFIGURATION</h1>
                    <div className='flex justify-between w-full'>
                            <h1>Maximum feeding capacity:</h1>
                            <p>Up to 650 TPH</p>
                    </div>
                    <div className='flex justify-between w-full'>
                            <h1>Feeding system:</h1>
                            <p>Variable-speed dosing belts <br />with fine motor control <br /> adjustment for precise <br /> dosing.</p>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='292.10 cm' data-metric='9.58 ft'>9.58 ft</p>
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
                                src={supportLeft.src} 
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
                            <p className='text-white text-lg' data-imperial='394.47 cm' data-metric='12.94 ft'>12.94 ft</p>
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
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4' data-imperial='762.00 cm' data-metric='25.00 ft'>25.00 ft</p>
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
                            <img src={supportRight.src} alt="" className='max-w-full max-h-full object-contain'/>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>SINGLE UNIT DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p data-imperial='300.00 cm' data-metric='9.88 ft'>9.88 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p data-imperial='112.32 cm' data-metric='3.68 ft'>3.68 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p data-imperial='112.32 cm' data-metric='3.68 ft'>3.68 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Capacity:</h1>
                            <p data-imperial='112.32 cm' data-metric='3.68 ft'>3.68 ft</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Total length (including hitch):</h1>
                            <p data-imperial='389.2 cm' data-metric='12.94 ft'>12.94 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Axle configuration: </h1>
                            <p data-imperial='128 cm' data-metric='4.2 ft'>4.2 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Fifth-wheel hitch height:</h1>
                            <p data-imperial='158.50 cm' data-metric='5.2 ft'>5.2 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total width:</h1>
                            <p>6,000 lts</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height with bins in operation</h1>
                            <p>6,000 lts</p>
                        </div>
                        
                    </div>
                    <div className='text-white font-normal col-span-2'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN OPTIONS</h1>
                        <div className='grid grid-cols-2 justify-center items-center w-full'>
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
