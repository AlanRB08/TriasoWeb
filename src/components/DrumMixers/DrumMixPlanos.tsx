import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import caseta1 from "../../assets/images/DrumMixers/caseta1.webp";
import caseta2 from "../../assets/images/DrumMixers/caseta2.webp";
import tab3Main2 from "../../assets/images/DrumMixers/tab3Main2.webp";
import tab3Right from "../../assets/images/DrumMixers/tab3Right.webp";
import tab6Right from "../../assets/images/DrumMixers/tab6Right.webp";
import tab6Left from "../../assets/images/DrumMixers/tab6Left.webp";
import tab5Main from "../../assets/images/DrumMixers/tab5Main.webp";
import tab5Left from "../../assets/images/DrumMixers/tab5Left.webp";
import tab5Right from "../../assets/images/DrumMixers/tab5Right.webp";
import tab1Main from "../../assets/images/DrumMixers/tab1Main.webp";
import tab1Left from "../../assets/images/DrumMixers/tab1Left.webp";
import tab1Right from "../../assets/images/DrumMixers/tab5Right.webp";
import tab2Main from "../../assets/images/DrumMixers/tab2Main.webp";
import tab2Left from "../../assets/images/DrumMixers/tab2L.webp";
import tab6Main from "../../assets/images/DrumMixers/tab6M.webp";

const newSizes = [
  {
    id: "1",
    dimensions: {
      burner: 24,
      ACFM: 5907,
      motor: 6,
      ACFM2: 14000,
      area: 24,
      bags: 168,
    },
  },
  {
    id: "2",
    dimensions: {
      burner: 33,
      ACFM: 7700,
      motor: 8,
      ACFM2: 19250,
      area: 33,
      bags: 224,
    },
  },
  {
    id: "3",
    dimensions: {
      burner: 42,
      ACFM: 8900,
      motor: 10,
      ACFM2: 22000,
      area: 37,
      bags: 280,
    },
  },
  {
    id: "4",
    dimensions: {
      burner: 60,
      ACFM: 10740,
      motor: 10,
      ACFM2: 22000,
      area: 37,
      bags: 280,
    },
  },
];
const cabinSize = [
  {
    length: 434.71,
    width: 222.93,
    height: 309.34,
  },
];
const toggleConfig = [
  {
    id: "1",
    dimensions: {
      width: 287.06,
      height: 705.37,
      length: 1868.09,
      diameter: 152.4,
      drumLenght: 731.5,
      drumHeight: 264.31,
      transportationHeight: 424.57,
      wheel: 140.0,
      humidity3: 80,
      humidity5: 110,
    },
  },
  {
    id: "2",
    dimensions: {
      width: 299.09,
      height: 705.37,
      length: 2007.7,
      diameter: 182.88,
      drumLenght: 640.1,
      drumHeight: 264.31,
      transportationHeight: 424.57,
      wheel: 140.0,
      humidity3: 110,
      humidity5: 150,
    },
  },
  {
    id: "3",
    dimensions: {
      width: 309.4,
      height: 705.37,
      length: 2127.37,
      diameter: 182.88,
      drumLenght: 853,
      drumHeight: 264.31,
      transportationHeight: 424.57,
      wheel: 140.0,
      humidity3: 140,
      humidity5: 180,
    },
  },
  {
    id: "4",
    dimensions: {
      width: 325.28,
      height: 705.37,
      length: 2280.9,
      diameter: 219.456,
      drumLenght: 1280.48,
      drumHeight: 264.31,
      transportationHeight: 424.57,
      wheel: 140.0,
      humidity3: 250,
      humidity5: 200,
    },
  },
  {
    id: "5",
    dimensions: {
      width: 390.0,
      height: 505.19,
      length: 2037.62,
      diameter: 259.08,
      drumLenght: 1280.48,
      drumHeight: 259.08,
      transportationHeight: 424.57,
      wheel: 140.0,
      humidity3: 200,
      humidity5: 270,
    },
  },
  {
    id: "6",
    dimensions: {
      width: 390.0,
      height: 509.68,
      length: 2044.96,
      diameter: 289.56,
      drumLenght: 1280.48,
      drumHeight: 289.31,
      transportationHeight: 424.57,
      wheel: 140.0,
      humidity3: 300,
      humidity5: 400,
    },
  },
  {
    id: "7",
    dimensions: {
      width: 390.0,
      height: 510.24,
      length: 2129.12,
      diameter: 289.56,
      drumLenght: 1280.48,
      drumHeight: 289.31,
      transportationHeight: 424.57,
      wheel: 140.0,
      humidity3: 400,
      humidity5: 540,
    },
  },
];
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
  //ACTIVE DATA
  const activeData = toggleConfig.find(
    (item) => item.id === activeTab.toString()
  );
  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };
  
  const scrollTrigRef = useRef<any>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const recreateTimerRef = useRef<number | null>(null);

  const debounce = (fn: () => void, wait = 120) => {
    return () => {
      if (recreateTimerRef.current) window.clearTimeout(recreateTimerRef.current);
      recreateTimerRef.current = window.setTimeout(() => {
        recreateTimerRef.current = null;
        fn();
      }, wait);
    };
  };

  useEffect(() => {
    const box = boxRef.current;
    const target = nextSectionRef.current; 
    const clipTarget = clipTargetRef.current; 
    const img = imgRef.current;
    const otro = otroElemento.current;
    const options = optionsRef.current;
    const col1 = columnGrid1.current;
    const col2 = columnGrid2.current;

    if (!box || !target || !clipTarget || !img || !otro || !options || !col1 || !col2) {
      return;
    }

    const createScrollTrigger = () => {
      try {
        if (scrollTrigRef.current) {
          scrollTrigRef.current.kill?.();
          scrollTrigRef.current = null;
        }
        const existing = ScrollTrigger.getById?.("boxScroll");
        existing?.kill?.();
      } catch (e) {
      }

      if (activeTab !== 3) return;
      const boxTopAbs = box.getBoundingClientRect().top + window.scrollY;
      const boxHeight = box.offsetHeight;
      const boxBottomAbs = boxTopAbs + boxHeight;
      const targetTopAbs = target.getBoundingClientRect().top + window.scrollY;
      const clipTargetTopAbs = clipTarget.getBoundingClientRect().top + window.scrollY;
      const distanceToMove = targetTopAbs - boxTopAbs;
      const clipStart = (clipTargetTopAbs - boxBottomAbs) / distanceToMove;
      const clipEnd = (clipTargetTopAbs - boxTopAbs) / distanceToMove;
      const clipStartClamped = Math.max(0, Math.min(clipStart, 1));
      const clipEndClamped = Math.max(0, Math.min(clipEnd, 1));
      const scrollDistanceReductionFactor = 0.8;
      const adjustedDistanceToMove = distanceToMove;
      const adjustedScrollDistance = distanceToMove * scrollDistanceReductionFactor;
      const anim = gsap.to(box, { y: adjustedDistanceToMove, ease: "none" });

      const scrollTrig = ScrollTrigger.create({
        id: "boxScroll",
        trigger: box,
        start: "top+=70 20%",
        end: `+=${adjustedScrollDistance}`,
        scrub: true,
        markers: false,
        animation: anim,
        onUpdate: (self: any) => {
          const p = self.progress;
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

      scrollTrigRef.current = scrollTrig;
    };

    const recreate = debounce(() => {
      createScrollTrigger();
      ScrollTrigger.refresh();
    }, 120);
    createScrollTrigger();

    const mo = new MutationObserver((mutations) => {
      recreate();
    });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class"] });
    observerRef.current = mo;

    const onResize = debounce(() => {
      recreate();
    }, 120);

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      try {
        if (observerRef.current) {
          observerRef.current.disconnect();
          observerRef.current = null;
        }
        window.removeEventListener("resize", onResize);
        window.removeEventListener("orientationchange", onResize);

        if (scrollTrigRef.current) {
          scrollTrigRef.current.kill?.();
          scrollTrigRef.current = null;
        }
        const existing = ScrollTrigger.getById?.("boxScroll");
        existing?.kill?.();
        if (recreateTimerRef.current) {
          window.clearTimeout(recreateTimerRef.current);
          recreateTimerRef.current = null;
        }
      } catch (e) {
      }
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
              display: activeTab === 3 ? "block" : "none",
              opacity: activeTab === 3 ? 1 : 0,
              visibility: activeTab === 3 ? "visible" : "hidden",
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
        id="sectionNueva"
        className="bg-[url('/fondopatron.png')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
      >
        <header className="mt-10 text-white" ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            Specifications
          </h1>
          <div className="flex items-center justify-center mt-10">
            <h1 className="mr-3" id="measure">
              MEASURE:
            </h1>
            <div
              onClick={toggleUnit}
              className="relative w-48 h-10 rounded-full border border-white cursor-pointer select-none"
            >
              {/* Fondo deslizante */}
              <div
                className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${unit === "metric" ? "translate-x-full" : ""
                  }`}
              ></div>

              {/* Texto sobrepuesto */}
              <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-bold">
                <span
                  className={unit === "imperial" ? "text-black" : "text-white"}
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
        </header>
        <div className="w-full px-8 lg:px-8 mt-14">
          {/* Contenedor de los botones */}
          <div id="options" ref={optionsRef} className="w-full">
            <h1 className="text-white lg:text-xl text-lg text-center mb-10">
              PRODUCTION CAPACITY:
            </h1>
            <div className="flex justify-center gap-2 md:gap-10">
              {/* Botón 1 */}
              <button
                onClick={() => setActiveTab(1)}
                className={`px-4 py-2 text-sm font-medium border rounded-3xl md:rounded-full transition-all duration-300 ${activeTab === 1
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
                  }`}
              >
                80-110 Tph
              </button>

              {/* Botón 2 */}
              <button
                onClick={() => setActiveTab(2)}
                className={`px-4 py-2 text-sm font-medium border rounded-3xl md:rounded-full transition-all duration-300 ${activeTab === 2
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
                  }`}
              >
                110-150 Tph
              </button>

              {/* Botón 3 */}
              <button
                onClick={() => setActiveTab(3)}
                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-3xl md:rounded-full ${activeTab === 3
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
                  }`}
              >
                140-180 Tph
              </button>
            </div>
            <br />
            <div className="flex justify-center gap-2 md:gap-10">
              {/* Botón 4 */}
              <button
                onClick={() => setActiveTab(4)}
                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-3xl md:rounded-full ${activeTab === 4
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
                  }`}
              >
                200-250 Tph
              </button>
              {/* Botón 5 */}
              <button
                onClick={() => setActiveTab(5)}
                className={`px-4 py-2 text-sm font-medium border rounded-3xl md:rounded-full transition-all duration-300 ${activeTab === 5
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
                  }`}
              >
                300-360 Tph
              </button>

              {/* Botón 6 */}
              <button
                onClick={() => setActiveTab(6)}
                className={`px-4 py-2 text-sm font-medium border rounded-3xl md:rounded-full transition-all duration-300 ${activeTab === 6
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
                  }`}
              >
                400-480 Tph
              </button>

              <button
                onClick={() => setActiveTab(7)}
                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-3xl md:rounded-full ${activeTab === 7
                  ? "text-gray-900 bg-white border-white"
                  : "text-white bg-transparent border-white"
                  }`}
              >
                500-600 Tph
              </button>
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FLIGHTS
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
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>RAP Flights</li>
                        <li>Mixing Flights</li>
                      </ul>
                    </div>
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
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Fully automatic or manual operation</li>
                        <li>
                          Digital monitoring of all operating parameters, with
                          real-time supervision and historical data reports.
                        </li>
                        <ul className="ml-6 list-disc">
                          <li>
                            Remote monitoring system accessible from computers,
                            tablets, and smartphones.
                          </li>
                        </ul>
                        <li>
                          Alarm and interlock system for out-of-range
                          conditions.
                        </li>
                        <li>
                          Independent, intuitive controls designed for field
                          reliability.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTS & ELECTRICAL
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all text-sm lg:text-base duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Industrial-grade motors and components</li>
                        <li>Simple wiring system for easy maintenance</li>
                        <li>Weather-protected electrical connections</li>
                        <li>Pulley and bushing transmission system</li>
                        <li>External fuel lines, sensors, and signal cabling pre-installed.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab1Main.src}
                      alt=""
                      className="w-[250px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-2 lg:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BURNER SYSTEM
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
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between">
                          <h1>Modulating burner:</h1>
                          <p>20 million BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>4,296</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor capacity:</h1>
                          <p>15 hp</p>
                        </li>
                        <li>Fueled with total-air control system</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Diesel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>UV sensors for flame monitoring</li>
                        <li>Separate pilot and main flame system</li>
                        <li>Fuel filtration and safety regulation system</li>
                      </ul>
                    </div>
                    <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          INTEGRATED BAGHOUSE CAPACITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>14,000</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Filtering Area:</h1>
                          <p>1,692 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Fiberglass insulation:</h1>
                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Bags:</h1>
                          <p>154</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DURABILITY & SAFETY
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        <li>Bolted components with anti-corrosion coating</li>
                        <ul className="ml-6 list-disc">
                          <li>
                            Galvanized bolts and electrostatic paint ensure
                            long-lasting durability and excellent adhesion.
                          </li>
                        </ul>
                        <li>
                          Mineral wool thermal insulation minimizes heat and
                          surface temperature.
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Exterior stainless steel lining</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[135px] h-[60px] self-start">
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
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
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
                    <div className="w-[372px] h-[285px] flex items-center justify-center">
                      <img
                        src={tab1Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0">
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
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
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
                    <div className="h-[285px] w-[744px] flex justify-center items-center">
                      <img
                        src={tab2Left.src}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DRUM DIMENSIONS
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
                              className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
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
                          className={`text-sm lg:text-base transition-all duration-500 overflow-hidden ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Length:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumLenght?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumLenght ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Height:</h1>
                            <p data-imperial="264.31 cm" data-metric="8.67 ft">
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumHeight ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Diameter:</h1>
                            <p data-imperial="264.31 cm" data-metric="8.67 ft">
                              {unit === "metric"
                                ? `${activeData?.dimensions.diameter?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.diameter ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
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
                              className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
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
                          className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Total length (including hitch):</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.length?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.length ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Axle configuration:</h1>
                            <p>Three Axle</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.wheel?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.wheel ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.height?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.height ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Transportation height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.transportationHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions
                                    .transportationHeight ?? 0) * cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            PRODUCTION RATE
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
                              className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
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
                          className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humidity:</h1>
                            <p>110 Tph</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humidity:</h1>
                            <p>80 Tph</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>RAP Incorporation:</h1>
                            <p>40%</p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            COMPLIANCE WITH INDUSTRY STANDARS
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${openSections.C3_5 ? "rotate-180" : ""
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
                          className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_5
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
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DRUM DRIVE SYSTEM
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Driven by four 20 HP motors</li>
                        <li>
                          Trunnion-driven system for reliable, continuous
                          operation
                        </li>
                        <li>
                          Trunnions and tires forged, machined, and heat-treated
                          for durability.
                        </li>
                        <li>
                          Precision-machined for balanced, deformation-resistant
                          performance
                        </li>
                        <li>
                          Spring-mounted to absorb load shifts and thermal
                          expansion
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <ul className="ml-6 list-disc">
                          <li>
                            Also transportable on lowboy or flatbed trailer if
                            preferred.
                          </li>
                        </ul>
                        <li>
                          Mounted on standard transport chassis with triple
                          axles and 16” highway-rated wheels.
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
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-2 overflow-x-auto">
                    <div className="flex justify-start md:justify-center items-end my-10">
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
                              ? `${cabinSize[0].width ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
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
                        <div className="w-[272px] h-[353px] flex items-center justify-center">
                          <img
                            src={caseta1.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
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
                              ? `${cabinSize[0].height ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
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
                              ? `${cabinSize[0].length ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
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
                        <div className="h-[353px] w-[497px] flex justify-center items-center">
                          <img
                            src={caseta2.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full flex flex-col items-start justify-center md:gap-10">
                    <div className="text-white font-normal col-span-1 w-full flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN DIMENSIONS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_1: !prev.C5_1,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].length ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].width ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].height ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_2: !prev.C5_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>7' x 10' control cabin, towable.</li>
                        <li>
                          Portable, with hitch, 3,000 lb axle, two 8-14.5 tires,
                          and electric brakes.
                        </li>
                        <li>Insulated panel-style walls.</li>
                        <li>
                          110-volt electrical installation with interior
                          lighting.
                        </li>
                        <li>Panoramic windows.</li>
                        <li>1.5-ton air conditioning unit.</li>
                        <li>Standard road lights: brake and turn signals.</li>
                        <li>
                          Jack stand for parking and hitch height adjustment.
                        </li>
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FLIGHTS
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
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>RAP Flights</li>
                        <li>Mixing Flights</li>
                      </ul>
                    </div>
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
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
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
                          <ul className="ml-10 list-disc">
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
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTS & ELECTRICAL
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Industrial-grade motors, components, and Siemens
                          wiring.
                        </li>
                        <li>Simple wiring system for easy maintenance</li>
                        <li>Weather-protected electrical connections</li>
                        <li>Pulley and bushing transmission system</li>
                        <li>
                          External fuel lines, sensors, and signal cabling
                          pre-installed.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab1Main.src}
                      alt=""
                      className="w-[250px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BURNER SYSTEM
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
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between w-full">
                          <h1>Modulating burner:</h1>
                          <p>27.5 million BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>5,907</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor capacity:</h1>
                          <p>20 hp</p>
                        </li>
                        <li>Fueled with total-air control system</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                            before:w-2 before:rounded-full before:border before:border-white 
                                            before:bg-transparent"
                            >
                              Diesel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                            before:w-2 before:rounded-full before:border before:border-white 
                                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>UV sensors for flame monitoring</li>
                        <li>Separate pilot and main flame system</li>
                        <li>Fuel filtration and safety regulation system</li>
                      </ul>
                    </div>
                    <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          INTEGRATED BAGHOUSE CAPACITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>19,250</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Filtering Area:</h1>
                          <p>2,463 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Fiberglass insulation:</h1>
                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Bags:</h1>
                          <p>224</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DURABILITY & SAFETY
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        <li>Aesthetic side panels for professional image</li>
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="ml-10 list-disc">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Thermal insulation minimizes heat and surface
                          temperature.
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Exterior stainless steel lining</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[135px] h-[60px] self-start">
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
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
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
                    <div className="w-[372px] h-[285px] flex items-center justify-center">
                      <img
                        src={tab1Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0">
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
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
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
                    <div className="h-[285px] w-[744px] flex justify-center items-center">
                      <img
                        src={tab2Left.src}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DRUM DIMENSIONS
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
                              className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Length:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumLenght?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumLenght ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumHeight ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Diameter:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.diameter?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.diameter ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
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
                              className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Total length (including hitch):</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.length?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.length ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Axle configuration:</h1>
                            <p>Three Axle</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.wheel?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.wheel ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total height:</h1>
                            <p data-imperial="731.29 cm" data-metric="23.99 ft">
                              {unit === "metric"
                                ? `${activeData?.dimensions.height?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.height ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Transportation height:</h1>
                            <p data-imperial="427.57 cm" data-metric="14.02 ft">
                              {unit === "metric"
                                ? `${activeData?.dimensions.transportationHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions
                                    .transportationHeight ?? 0) * cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            PRODUCTION RATE
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
                              className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humidity:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              150 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humidity:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              110 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>RAP Incorporation:</h1>
                            <p>40%</p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            COMPLIANCE WITH INDUSTRY STANDARS
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_5
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
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DRUM DRIVE SYSTEM
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Driven by four 30 HP motors</li>
                        <li>
                          Trunnion-driven system for reliable, continuous
                          operation
                        </li>
                        <li>
                          Trunnions and tires forged, machined, and heat-treated
                          for durability.
                        </li>
                        <li>
                          Precision-machined for balanced, deformation-resistant
                          performance
                        </li>
                        <li>
                          Spring-mounted to absorb load shifts and thermal
                          expansion
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li>
                          Also transportable on lowboy or flatbed trailer if
                          preferred.
                        </li>
                        <li>
                          Mounted on standard transport chassis with triple
                          axles and 16” highway-rated wheels.
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
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-2 overflow-x-auto">
                    <div className="flex justify-start md:justify-center items-end my-10">
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
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
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
                        <div className="w-[272px] h-[353px] flex items-center justify-center">
                          <img
                            src={caseta1.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
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
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
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
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
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
                        <div className="h-[353px] w-[497px] flex justify-center items-center">
                          <img
                            src={caseta2.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full flex flex-col items-start justify-center md:gap-10">
                    <div className="text-white font-normal col-span-1 w-full flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN DIMENSIONS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_1: !prev.C5_1,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p data-imperial="434.71 cm" data-metric="14.26 ft">
                            14.26 ft
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p data-imperial="222.93 cm" data-metric="7.31 ft">
                            7.31 ft
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height:</h1>
                          <p data-imperial="309.34 cm" data-metric="10.14 ft">
                            10.14 ft
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_2: !prev.C5_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>7' x 10' control cabin, towable.</li>
                        <li>
                          Portable, with hitch, 3,000 lb axle, two 8-14.5 tires,
                          and electric brakes.
                        </li>
                        <li>Insulated panel-style walls.</li>
                        <li>
                          110-volt electrical installation with interior
                          lighting.
                        </li>
                        <li>Panoramic windows.</li>
                        <li>1.5-ton air conditioning unit.</li>
                        <li>Standard road lights: brake and turn signals.</li>
                        <li>
                          Jack stand for parking and hitch height adjustment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div
                    className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FLIGHTS
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
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>RAP Flights</li>
                        <li>Mixing Flights</li>
                      </ul>
                    </div>
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
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
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
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTS & ELECTRICAL
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Industrial-grade motors, components, and Siemens
                          wiring.
                        </li>
                        <li>Simplified wiring system for easy maintenance.</li>
                        <li>Weather-protected electrical connections.</li>
                        <li>Pulley-and-bushing drive system</li>
                        <li>
                          External fuel lines, sensors, and signal cabling
                          pre-installed.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full min-h-[600px] order-1 md:order-2"></div>
                  <div
                    className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BURNER SYSTEM
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
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between w-full">
                          <h1>Modulating burner:</h1>
                          <p>35 million BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>7,518</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor capacity:</h1>
                          <p>25 hp</p>
                        </li>
                        <li>Fueled with total-air control system</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                            before:w-2 before:rounded-full before:border before:border-white 
                                            before:bg-transparent"
                            >
                              Diesel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                            before:w-2 before:rounded-full before:border before:border-white 
                                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>UV sensors for flame monitoring</li>
                        <li>Separate pilot and main flame system</li>
                        <li>Fuel filtration and safety regulation system</li>
                      </ul>
                    </div>
                    <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          INTEGRATED BAGHOUSE CAPACITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>24,500</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Filtering Area:</h1>
                          <p>3,079 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Fiberglass insulation:</h1>
                          <p>2"</p>
                        </div>
                        <li className="flex justify-between w-full">
                          <h1>Bags:</h1>
                          <p>280</p>
                        </li>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DURABILITY & SAFETY
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Thermal insulation minimizes heat and surface
                          temperature.
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[135px] h-[60px] self-start">
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
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
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
                    <div className="w-[372px] h-[285px] flex items-center justify-center">
                      <img
                        src={tab1Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0">
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
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
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
                    <div className="h-[285px] w-[744px] flex justify-center items-center">
                      <img
                        src={tab3Right.src}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DRUM DIMENSIONS
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
                              className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Length:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumLenght?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumLenght ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumHeight ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Diameter:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.diameter?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.diameter ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
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
                              className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Total length (including hitch):</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.length?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.length ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Axle configuration:</h1>
                            <p>Three Axle</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.wheel?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.wheel ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.height?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.height ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Transportation height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.transportationHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions
                                    .transportationHeight ?? 0) * cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            PRODUCTION RATE
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
                              className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humidity:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              180 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humidity:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              140 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>RAP Incorporation:</h1>
                            <p>40%</p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            COMPLIANCE WITH INDUSTRY STANDARS
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_5
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
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DRUM DRIVE SYSTEM
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Driven by two 40 HP motors</li>
                        <li>
                          Trunnion-driven system for reliable, continuous
                          operation
                        </li>
                        <li>
                          Trunnions and tires forged, machined, and heat-treated
                          for durability.
                        </li>
                        <li>
                          Precision-machined for balanced, deformation-resistant
                          performance
                        </li>
                        <li>
                          Spring-mounted to absorb load shifts and thermal
                          expansion
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li>
                          Also transportable on lowboy or flatbed trailer if
                          preferred.
                        </li>
                        <li>
                          Mounted on standard transport chassis with triple
                          axles and 16” highway-rated wheels.
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
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-2 overflow-x-auto">
                    <div className="flex justify-start md:justify-center items-end my-10">
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
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
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
                        <div className="w-[272px] h-[353px] flex items-center justify-center">
                          <img
                            src={caseta1.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
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
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
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
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
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
                        <div className="h-[353px] w-[497px] flex justify-center items-center">
                          <img
                            src={caseta2.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full flex flex-col items-start justify-center md:gap-10">
                    <div className="text-white font-normal col-span-1 w-full flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN DIMENSIONS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_1: !prev.C5_1,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_2: !prev.C5_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>7' x 10' control cabin, towable.</li>
                        <li>
                          Portable, with hitch, 3,000 lb axle, two 8-14.5 tires,
                          and electric brakes.
                        </li>
                        <li>Insulated panel-style walls.</li>
                        <li>
                          110-volt electrical installation with interior
                          lighting.
                        </li>
                        <li>Panoramic windows.</li>
                        <li>1.5-ton air conditioning unit.</li>
                        <li>Standard road lights: brake and turn signals.</li>
                        <li>
                          Jack stand for parking and hitch height adjustment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 4 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div
                    className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FLIGHTS
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
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>RAP Flights</li>
                        <li>Mixing Flights</li>
                      </ul>
                    </div>
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
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
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
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTS & ELECTRICAL
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Industrial-grade motors, components, and Siemens
                          wiring.
                        </li>
                        <li>Simple wiring system for easy maintenance</li>
                        <li>Weather-protected electrical connections</li>
                        <li>Pulley-and-bushing drive system</li>
                        <li>
                          External fuel lines, sensors, and signal cabling
                          pre-installed.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full min-h-[600px] order-1 md:order-2">
                    <img
                      src={tab1Main.src}
                      alt=""
                      className="w-[250px] h-auto"
                    />
                  </div>
                  <div
                    className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BURNER SYSTEM
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
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between w-full">
                          <h1>Modulating burner:</h1>
                          <p>50 million BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>10,740</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor capacity:</h1>
                          <p>40 hp</p>
                        </li>
                        <li>Fueled with total-air control system</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                            before:w-2 before:rounded-full before:border before:border-white 
                                            before:bg-transparent"
                            >
                              Diesel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                            before:w-2 before:rounded-full before:border before:border-white 
                                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>UV sensors for flame monitoring</li>
                        <li>Separate pilot and main flame system</li>
                        <li>Fuel filtration and safety regulation system</li>
                      </ul>
                    </div>
                    <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          INTEGRATED BAGHOUSE CAPACITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>35,000 </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Filtering Area:</h1>
                          <p>4,310 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Fiberglass insulation:</h1>
                          <p>2"</p>
                        </div>
                        <li className="flex justify-between w-full">
                          <h1>Bags:</h1>
                          <p>392</p>
                        </li>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DURABILITY & SAFETY
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Thermal insulation minimizes heat and surface
                          temperature.
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[135px] h-[60px] self-start">
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
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
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
                    <div className="w-[372px] h-[285px] flex items-center justify-center">
                      <img
                        src={tab1Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0">
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
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
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
                    <div className="h-[285px] w-[744px] flex justify-center items-center">
                      <img
                        src={tab3Right.src}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DRUM DIMENSIONS
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
                              className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Length:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumLenght?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumLenght ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumHeight ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Diameter:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.diameter?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.diameter ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
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
                              className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Total length (including hitch):</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.length?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.length ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Axle configuration:</h1>
                            <p>Three Axle</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.wheel?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.wheel ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.height?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.height ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Transportation height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.transportationHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions
                                    .transportationHeight ?? 0) * cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            PRODUCTION RATE
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
                              className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humidity:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              250 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humidity:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              200 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>RAP Incorporation:</h1>
                            <p>40%</p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            COMPLIANCE WITH INDUSTRY STANDARS
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_5
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
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DRUM DRIVE SYSTEM
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Driven by two 50 HP motors</li>
                        <li>
                          Trunnion-driven system for reliable, continuous
                          operation
                        </li>
                        <li>
                          Trunnions and tires forged, machined, and heat-treated
                          for durability.
                        </li>
                        <li>
                          Precision-machined for balanced, deformation-resistant
                          performance
                        </li>
                        <li>
                          Spring-mounted to absorb load shifts and thermal
                          expansion
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li>
                          Also transportable on lowboy or flatbed trailer if
                          preferred.
                        </li>
                        <li>
                          Mounted on standard transport chassis with triple
                          axles and 16” highway-rated wheels.
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
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-2 overflow-x-auto">
                    <div className="flex justify-start md:justify-center items-end my-10">
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
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
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
                        <div className="w-[272px] h-[353px] flex items-center justify-center">
                          <img
                            src={caseta1.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
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
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
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
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
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
                        <div className="h-[353px] w-[497px] flex justify-center items-center">
                          <img
                            src={caseta2.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full flex flex-col items-start justify-center md:gap-10">
                    <div className="text-white font-normal col-span-1 w-full flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN DIMENSIONS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_1: !prev.C5_1,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_2: !prev.C5_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>7' x 10' control cabin, towable.</li>
                        <li>
                          Portable, with hitch, 3,000 lb axle, two 8-14.5 tires,
                          and electric brakes.
                        </li>
                        <li>Insulated panel-style walls.</li>
                        <li>
                          110-volt electrical installation with interior
                          lighting.
                        </li>
                        <li>Panoramic windows.</li>
                        <li>1.5-ton air conditioning unit.</li>
                        <li>Standard road lights: brake and turn signals.</li>
                        <li>
                          Jack stand for parking and hitch height adjustment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 5 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FLIGHTS
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
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>RAP Flights</li>
                        <li>Mixing Flights</li>
                      </ul>
                    </div>
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
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
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
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTS & ELECTRICAL
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Industrial-grade motors, components, and Siemens
                          wiring.
                        </li>
                        <li>Simplified wiring system for easy maintenance.</li>
                        <li>Weather-protected electrical connections</li>
                        <li>Pulley-and-bushing drive system</li>
                        <li>
                          External fuel lines, sensors, and signal cabling
                          pre-installed.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab5Main.src}
                      alt=""
                      className="w-[120px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BURNER SYSTEM
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
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between w-full">
                          <h1>Modulating burner:</h1>
                          <p>75 million BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>16,110</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor capacity:</h1>
                          <p>60 hp</p>
                        </li>
                        <li>Fueled with total-air control system</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                    before:w-2 before:rounded-full before:border before:border-white 
                                    before:bg-transparent"
                            >
                              Diesel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                    before:w-2 before:rounded-full before:border before:border-white 
                                    before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>UV sensors for flame monitoring</li>
                        <li>Separate pilot and main flame system</li>
                        <li>Fuel filtration and safety regulation system</li>
                      </ul>
                    </div>
                    <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BAGHOUSE CAPACITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>52,000</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Filtering Area:</h1>
                          <p>6,384 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Fiberglass insulation:</h1>
                          <p>2"</p>
                        </div>
                        <li className="flex justify-between w-full">
                          <h1>Bags:</h1>
                          <p>336</p>
                        </li>
                      </div>
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Thermal insulation minimizes heat and surface
                          temperature.
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[225px] h-[60px]">
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
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
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
                    <div className="w-[225px] h-[294px] flex items-center justify-center">
                      <img
                        src={tab5Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[294px] shrink-0">
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
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
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
                    <div className="h-[294px] w-[900px] flex justify-center items-center">
                      <img
                        src={tab1Right.src}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DRUM DIMENSIONS
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
                              className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Length:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumLenght?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumLenght ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumHeight ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Diameter:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.diameter?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.diameter ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
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
                              className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Total length (including hitch):</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.length?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.length ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Axle configuration:</h1>
                            <p>Three Axle</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.wheel?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.wheel ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.height?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.height ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            PRODUCTION RATE
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
                              className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humidity:</h1>
                            <p>360 Tph</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humidity:</h1>
                            <p>300 Tph</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>RAP Incorporation:</h1>
                            <p>40%</p>
                          </div>
                        </div>
                      </div>

                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            COMPLIANCE WITH INDUSTRY STANDARS
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_5
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
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DRUM DRIVE SYSTEM
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Driven by two 75 HP motors</li>
                        <li>
                          Trunnion-driven system for reliable, continuous
                          operation
                        </li>
                        <li>
                          Trunnions and tires forged, machined, and heat-treated
                          for durability.
                        </li>
                        <li>
                          Precision-machined for balanced, deformation-resistant
                          performance
                        </li>
                        <li>
                          Spring-mounted to absorb load shifts and thermal
                          expansion
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li>
                          Also transportable on lowboy or flatbed trailer if
                          preferred.
                        </li>
                        <li>
                          Mounted on standard transport chassis with triple
                          axles and 16” highway-rated wheels.
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
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-2 overflow-x-auto">
                    <div className="flex justify-start md:justify-center items-end my-10">
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
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
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
                        <div className="w-[272px] h-[353px] flex items-center justify-center">
                          <img
                            src={caseta1.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
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
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
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
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
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
                        <div className="h-[353px] w-[497px] flex justify-center items-center">
                          <img
                            src={caseta2.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full flex flex-col items-start justify-center md:gap-10">
                    <div className="text-white font-normal col-span-1 w-full flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN DIMENSIONS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_1: !prev.C5_1,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_2: !prev.C5_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>7' x 10' control cabin, towable.</li>
                        <li>
                          Portable, with hitch, 3,000 lb axle, two 8-14.5 tires,
                          and electric brakes.
                        </li>
                        <li>Insulated panel-style walls.</li>
                        <li>
                          110-volt electrical installation with interior
                          lighting.
                        </li>
                        <li>Panoramic windows.</li>
                        <li>1.5-ton air conditioning unit.</li>
                        <li>Standard road lights: brake and turn signals.</li>
                        <li>
                          Jack stand for parking and hitch height adjustment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 6 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FLIGHTS
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
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>RAP Flights</li>
                        <li>Mixing Flights</li>
                      </ul>
                    </div>
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
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
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
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTS & ELECTRICAL
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Industrial-grade motors and components, and Siemens
                          wiring.
                        </li>
                        <li>Simplified wiring system for easy maintenance.</li>
                        <li>Weather-protected electrical connections</li>
                        <li>Pulley-and-bushing transmission system</li>
                        <li>
                          External fuel lines, sensors, and signal cabling
                          pre-installed.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab6Main.src}
                      alt=""
                      className="w-[120px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BURNER SYSTEM
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
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between w-full">
                          <h1>Modulating burner:</h1>
                          <p>100 million BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>21,480</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor capacity:</h1>
                          <p>75 hp</p>
                        </li>
                        <li>Fueled with total-air control system</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                    before:w-2 before:rounded-full before:border before:border-white 
                                    before:bg-transparent"
                            >
                              Diesel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                    before:w-2 before:rounded-full before:border before:border-white 
                                    before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>UV sensors for flame monitoring</li>
                        <li>Separate pilot and main flame system</li>
                        <li>Fuel filtration and safety regulation system</li>
                      </ul>
                    </div>
                    <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BAGHOUSE CAPACITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>70,000</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Filtering Area:</h1>
                          <p>9,044 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Fiberglass insulation:</h1>
                          <p>2"</p>
                        </div>
                        <li className="flex justify-between w-full">
                          <h1>Bags:</h1>
                          <p>476</p>
                        </li>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DURABILITY & SAFETY
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Thermal insulation minimizes heat and surface
                          temperature.
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[225px] h-[60px]">
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
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
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
                    <div className="w-[225px] h-[294px] flex items-center justify-center">
                      <img
                        src={tab6Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[294px] shrink-0">
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
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
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
                    <div className="h-[294px] w-[900px] flex justify-center items-center">
                      <img
                        src={tab6Right.src}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DRUM DIMENSIONS
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
                              className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Length:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumLenght?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumLenght ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumHeight ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Diameter:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.diameter?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.diameter ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
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
                              className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Total length (including hitch):</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.length?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.length ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Axle configuration:</h1>
                            <p>Three Axle</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.wheel?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.wheel ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.height?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.height ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            PRODUCTION RATE
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
                              className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humidity:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              480 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humidity:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              400 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>RAP Incorporation:</h1>
                            <p>40%</p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            COMPLIANCE WITH INDUSTRY STANDARS
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_5
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
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DRUM DRIVE SYSTEM
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Driven by two 100 HP motors</li>
                        <li>
                          Trunnion-driven system for reliable, continuous
                          operation
                        </li>
                        <li>Digital VFDs for precise speed adjustments</li>
                        <li>
                          Trunnions and tires forged, machined, and heat-treated
                          for durability.
                        </li>
                        <li>
                          Precision-machined for balanced, deformation-resistant
                          performance
                        </li>
                        <li>
                          Spring-mounted to absorb load shifts and thermal
                          expansion
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li>
                          Also transportable on lowboy or flatbed trailer if
                          preferred.
                        </li>
                        <li>
                          Mounted on standard transport chassis with triple
                          axles and 16” highway-rated wheels.
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
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-2 overflow-x-auto">
                    <div className="flex justify-start md:justify-center items-end my-10">
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
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
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
                        <div className="w-[272px] h-[353px] flex items-center justify-center">
                          <img
                            src={caseta1.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
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
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
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
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
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
                        <div className="h-[353px] w-[497px] flex justify-center items-center">
                          <img
                            src={caseta2.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full flex flex-col items-start justify-center md:gap-10">
                    <div className="text-white font-normal col-span-1 w-full flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN DIMENSIONS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_1: !prev.C5_1,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_2: !prev.C5_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>7' x 10' control cabin, towable.</li>
                        <li>
                          Portable, with hitch, 3,000 lb axle, two 8-14.5 tires,
                          and electric brakes.
                        </li>
                        <li>Insulated panel-style walls.</li>
                        <li>
                          110-volt electrical installation with interior
                          lighting.
                        </li>
                        <li>Panoramic windows.</li>
                        <li>1.5-ton air conditioning unit.</li>
                        <li>Standard road lights: brake and turn signals.</li>
                        <li>
                          Jack stand for parking and hitch height adjustment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 7 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FLIGHTS
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
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>RAP Flights</li>
                        <li>Mixing Flights</li>
                      </ul>
                    </div>
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
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
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
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTS & ELECTRICAL
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Industrial-grade motors and components, and Siemens
                          wiring.
                        </li>
                        <li>Simplified wiring system for easy maintenance.</li>
                        <li>Weather-protected electrical connections.</li>
                        <li>Pulley-and-bushing transmission system.</li>
                        <li>
                          External fuel lines, sensors, and signal cabling
                          pre-installed.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab6Main.src}
                      alt=""
                      className="w-[120px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BURNER SYSTEM
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
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between w-full">
                          <h1>Modulating burner:</h1>
                          <p>125 million BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>26,850</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor capacity:</h1>
                          <p>100 hp</p>
                        </li>
                        <li>Fueled with total-air control system</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                    before:w-2 before:rounded-full before:border before:border-white 
                                    before:bg-transparent"
                            >
                              Diesel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                                    before:w-2 before:rounded-full before:border before:border-white 
                                    before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>UV sensors for flame monitoring</li>
                        <li>Separate pilot and main flame system</li>
                        <li>Fuel filtration and safety regulation system</li>
                      </ul>
                    </div>
                    <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          BAGHOUSE CAPACITY
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>87,000</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Filtering Area:</h1>
                          <p>11,172 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Fiberglass insulation:</h1>
                          <p>2"</p>
                        </div>
                        <li className="flex justify-between w-full">
                          <h1>Bags:</h1>
                          <p>588</p>
                        </li>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DURABILITY & SAFETY
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Thermal insulation minimizes heat and surface
                          temperature.
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[225px] h-[60px]">
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
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
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
                    <div className="w-[225px] h-[294px] flex items-center justify-center">
                      <img
                        src={tab6Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[294px] shrink-0">
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
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
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
                    <div className="h-[294px] w-[900px] flex justify-center items-center">
                      <img
                        src={tab6Right.src}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DRUM DIMENSIONS
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
                              className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Length:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumLenght?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumLenght ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.drumHeight?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.drumHeight ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Diameter:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.diameter?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.diameter ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
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
                              className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Total length (including hitch):</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.length?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.length ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Axle configuration:</h1>
                            <p>Three Axle</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.wheel?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.wheel ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total width:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.width?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.width ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Total height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.height?.toFixed(1) ??
                                ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.height ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            PRODUCTION RATE
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
                              className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humidity:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              560 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humidity:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              500 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>RAP Incorporation:</h1>
                            <p>40%</p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            COMPLIANCE WITH INDUSTRY STANDARS
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_5
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
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          DRUM DRIVE SYSTEM
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Driven by two 125 HP motors</li>
                        <li>
                          Trunnion-driven system for reliable, continuous
                          operation
                        </li>
                        <li>
                          Trunnions and tires forged, machined, and heat-treated
                          for durability.
                        </li>
                        <li>
                          Precision-machined for balanced, deformation-resistant
                          performance
                        </li>
                        <li>
                          Spring-mounted to absorb load shifts and thermal
                          expansion
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C4_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li>
                          Also transportable on lowboy or flatbed trailer if
                          preferred.
                        </li>
                        <li>
                          Mounted on standard transport chassis with triple
                          axles and 16” highway-rated wheels.
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
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-2 overflow-x-auto">
                    <div className="flex justify-start md:justify-center items-end my-10">
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
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
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
                        <div className="w-[272px] h-[353px] flex items-center justify-center">
                          <img
                            src={caseta1.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
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
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
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
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
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
                        <div className="h-[353px] w-[497px] flex justify-center items-center">
                          <img
                            src={caseta2.src}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full flex flex-col items-start justify-center md:gap-10">
                    <div className="text-white font-normal col-span-1 w-full flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN DIMENSIONS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_1: !prev.C5_1,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].length ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].width ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height:</h1>
                          <p>
                            {unit === "metric"
                              ? `${cabinSize[0].height?.toFixed(1) ?? ""} cm`
                              : `${(
                                (cabinSize[0].height ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL CABIN
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C5_2: !prev.C5_2,
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
                            className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C5_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>7' x 10' control cabin, towable.</li>
                        <li>
                          Portable, with hitch, 3,000 lb axle, two 8-14.5 tires,
                          and electric brakes.
                        </li>
                        <li>Insulated panel-style walls.</li>
                        <li>
                          110-volt electrical installation with interior
                          lighting.
                        </li>
                        <li>Panoramic windows.</li>
                        <li>1.5-ton air conditioning unit.</li>
                        <li>Standard road lights: brake and turn signals.</li>
                        <li>
                          Jack stand for parking and hitch height adjustment.
                        </li>
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
