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

// Definición de tipos para TypeScript
type TabKey = 'tab1' | 'tab2';
type UnitNumber = 'unit1' | 'unit2' | 'unit3' | 'unit4' | 'unit5' | 'unit6';
type UnitSystem = 'metric' | 'imperial';

// Configuración centralizada de datos
const dataConfig = {
  // Without Aesthetic Side Panels (tab2)
  tab2_unit1_metric: {
    images: [standarMain.src, standarLeft.src, standarRight.src],
    measures: {
      length: { metric: '9.88 ft', imperial: '300.00 cm' },
      width: { metric: '3.68 ft', imperial: '112.32 cm' },
      height: { metric: '3.68 ft', imperial: '112.32 cm' },
      capacity: { metric: '6,000 lts', imperial: '1,585 gal' },
    },
  },
  tab2_unit1_imperial: {
    images: [reinforcedBlue.src, reinforcedLeft.src, reinforcedRight.src],
    measures: {
      length: { metric: '9.88 ft', imperial: '300.00 cm' },
      width: { metric: '3.68 ft', imperial: '112.32 cm' },
      height: { metric: '3.68 ft', imperial: '112.32 cm' },
      capacity: { metric: '6,000 lts', imperial: '1,585 gal' },
    },
  },
  // Añadir más combinaciones según sea necesario...
};

const BinPlanosSection = () => {
  // Estados
  const [activeTab, setActiveTab] = useState<TabKey>('tab2'); // tab2 es Without Aesthetic
  const [activeUnitNumber, setActiveUnitNumber] = useState<UnitNumber>('unit1');
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');

  // Refs para animaciones
  const boxRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const otroElemento = useRef<HTMLDivElement>(null);
  const columnGrid1 = useRef<HTMLDivElement>(null);
  const columnGrid2 = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  // Configuración activa
  const activeConfig = `${activeTab}_${activeUnitNumber}_${unitSystem}` as const;

  // Función para alternar unidades métrico/imperial
  const toggleUnitSystem = () => {
    setUnitSystem(prev => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  // Efecto para animaciones GSAP
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
      scrollTrig?.kill();
    };
  }, [activeTab]);

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      {/* Sección de animación */}
      <div className='h-screen flex items-center justify-center bg-bgMain'>
        <div
          id='boxScroll'
          ref={boxRef}
          className="text-white font-bold flex items-center justify-center rounded will-change-transform transform-gpu z-20 w-[230px] h-[628px]"
        >
          <img src={reinfo1.src} alt=""/>
        </div>
      </div>

      {/* Sección principal */}
      <div 
        id='sectionNueva'  
        className="bg-[url('/fondopatron.png')] bg-cover bg-center w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
      >
        <header className='mt-10 text-white' ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">Specifications</h1>
          <div className='flex items-center justify-center mt-10'>
            <h1 className='mr-3'>MEASURE:</h1>
            <div
              onClick={toggleUnitSystem}
              className="relative w-48 h-10 rounded-full border border-white cursor-pointer select-none"
            >
              <div
                className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${
                  unitSystem === 'metric' ? 'translate-x-full' : ''
                }`}
              ></div>
              <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-bold">
                <span className={unitSystem === 'imperial' ? 'text-black' : 'text-white'}>
                  IMPERIAL
                </span>
                <span className={unitSystem === 'metric' ? 'text-black' : 'text-white'}>
                  METRIC
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido dinámico */}
        <div className="w-full px-8 lg:px-8 mt-14">
          {/* Botones de opciones */}
          <div id='options' ref={optionsRef} className='w-full'>
            <h1 className='text-white lg:text-xl text-lg text-center mb-4'>EXTERIOR:</h1>
            <div className="flex justify-center gap-10 mb-6">
              <button
                onClick={() => setActiveTab('tab1')}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                  activeTab === 'tab1'
                    ? 'text-gray-900 bg-white border-white'
                    : 'text-white bg-transparent border-white'
                }`}
              >
                Aesthetic Side Panels
              </button>
              <button
                onClick={() => setActiveTab('tab2')}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                  activeTab === 'tab2'
                    ? 'text-gray-900 bg-white border-white'
                    : 'text-white bg-transparent border-white'
                }`}
              >
                Without Aesthetic Side Panels
              </button>
            </div>

            <h1 className='text-white lg:text-xl text-lg text-center mb-4'>NUMBER OF UNITS:</h1>
            <div className="flex justify-center gap-10">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={`unit${num}`}
                  onClick={() => setActiveUnitNumber(`unit${num}` as UnitNumber)}
                  className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
                    activeUnitNumber === `unit${num}`
                      ? 'text-gray-900 bg-white border-white'
                      : 'text-white bg-transparent border-white'
                  }`}
                >
                  {num} UNIT{num !== 1 ? 'S' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido de los tabs */}
          <div className="w-full mt-20 mb-10" id='tabsSection' ref={nextSectionRef}>
            <div className='flex flex-col items-center justify-center'>
              {/* Renderizado de imágenes */}
              <div className='flex justify-center items-end my-10'>
                {dataConfig[activeConfig]?.images.map((img, index) => (
                  <div key={index} className='flex flex-col items-center justify-center'>
                    <img 
                      src={img} 
                      alt="" 
                      className='max-w-full max-h-full object-contain'
                    />
                  </div>
                ))}
              </div>

              {/* Renderizado de medidas */}
              <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                <div className='text-white font-normal'>
                  <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>SINGLE UNIT DIMENSIONS</h1>
                  {Object.entries(dataConfig[activeConfig]?.measures).map(([key, value]) => (
                    <div key={key} className='flex justify-between'>
                      <h1>{key.charAt(0).toUpperCase() + key.slice(1)}:</h1>
                      <p>{value[unitSystem]}</p>
                    </div>
                  ))}
                </div>
                {/* Resto del contenido... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinPlanosSection;