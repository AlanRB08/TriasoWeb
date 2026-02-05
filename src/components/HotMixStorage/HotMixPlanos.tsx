import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HMainS1 from "../../assets/images/HotMix/Silo50-Comp.Assy-R.webp";
import HMainBS1 from "../../assets/images/HotMix/Silo50-Comp.Assy.webp";
import HLeftBS1 from "../../assets/images/HotMix/Silosf50-1.webp";
import HRL50 from "../../assets/images/HotMix/Silo-SF50TBpL.webp";
import HRL100 from "../../assets/images/HotMix/Silo-SF100TBpL.webp";
import HRL150 from "../../assets/images/HotMix/Silo-SF150TBpL.webp";
import HRL200 from "../../assets/images/HotMix/Silo-SF200TBpL.webp";
import HRR50 from "../../assets/images/HotMix/Silo-SF50TBpFn.webp";
import HRR100 from "../../assets/images/HotMix/Silo-SF100TBpFn.webp";
import HRR150 from "../../assets/images/HotMix/Silo-SF150TBpFn.webp";
import HRR200 from "../../assets/images/HotMix/Silo-SF200TBpFn.webp";
import HMainBS2 from "../../assets/images/HotMix/Siloae100-2.webp";
import HMainBR1 from "../../assets/images/HotMix/Silo-SF50TBpS.webp";
import HMainBR2 from "../../assets/images/HotMix/Silo-SF100TBpS.webp";
import HMainBR3 from "../../assets/images/HotMix/Silo-SF150TBpS.webp";
import HMainBR4 from "../../assets/images/HotMix/Silo-SF200TBpS.webp";
import HML50 from "../../assets/images/HotMix/50L.webp";
import HMR50 from "../../assets/images/HotMix/50R.webp";
import HML100 from "../../assets/images/HotMix/100L.webp";
import HMR100 from "../../assets/images/HotMix/100R.webp";

gsap.registerPlugin(ScrollTrigger);
const slatConveyor = {
  length: 1667.25,
  width: 67.05,
  heightErec: 1286.25,
  chain: 981.45,
  heightDischarge: 980.8,
  angle: "48.6°",
};
const toggleConfig = [
  {
    id: "1-50tons",
    dimensions: {
      width: 301.752,
      height: 1304.544,
      length: 2011.68,
      chasisLenght: 1459.992,
      transporWidth: 365.76,
      axleConfig: "Doble Axle",
      wheel: 124.968,
      support: "Steel legs with base plates for anchor bolting",
      wheels: '16" highway-rated tires',
      capacity: "50 tons",
      truckHeight: 368.808,
    },
  },
  {
    id: "1-100tons",
    dimensions: {
      width: 350.52,
      height: 1584.96,
      length: 2011.68,
      chasisLenght: 1459.992,
      transporWidth: 365.76,
      axleConfig: "Doble Axle",
      wheel: 124.968,
      support: "Steel legs with base plates for anchor bolting",
      wheels: '16" highway-rated tires',
      capacity: "50 tons",
      truckHeight: 212,
    },
  },
  {
    id: "2-50tons",
    dimensions: {
      width: 354.3,
      height: 1695.4,
      length: 1624.4,
      chasisLenght: 0,
      transporWidth: 0,
      axleConfig: "Double",
      wheel: 140,
      support: "Steel legs with base plates for anchor bolting",
      wheels: '16" highway-rated tires',
      capacity: "50 tons",
      truckHeight: 368.8,
    },
  },
  {
    id: "2-100tons",
    dimensions: {
      width: 360.2,
      height: 1984.2,
      length: 1892.3,
      chasisLenght: 0,
      transporWidth: 0,
      axleConfig: "Double",
      wheel: 140,
      support: "Steel legs with base plates for anchor bolting",
      wheels: '16" highway-rated tires',
      capacity: "100 tons",
      truckHeight: 368.8,
    },
  },
  {
    id: "2-150tons",
    dimensions: {
      width: 363,
      height: 2136.6,
      length: 2047.8,
      chasisLenght: 0,
      transporWidth: 0,
      axleConfig: "Double",
      wheel: 140,
      support: "Steel legs with base plates for anchor bolting",
      wheels: '16" highway-rated tires',
      capacity: "150 tons",
      truckHeight: 368.8,
    },
  },
  {
    id: "2-200tons",
    dimensions: {
      width: 367.2,
      height: 2526,
      length: 2466.2,
      chasisLenght: 0,
      transporWidth: 0,
      axleConfig: "Double",
      wheel: 140,
      support: "Steel legs with base plates for anchor bolting",
      wheels: '16" highway-rated tires',
      capacity: "200 tons",
      truckHeight: 368.8,
    },
  },
];
const HotMixPlanos = () => {
  //logica de cambio de imagenes
  const [activeVersion, setActiveVersion] = useState("50tons");
  //tabs states
  const [activeTab, setActiveTab] = useState(1);

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
  const cmToFeet = 0.0328084;
  //RENDERIZADO CONDICIONAL DE IMAGENES
  type VersionType = "50tons" | "100tons" | "150tons" | "200tons";
  const imageMap: Record<VersionType, string> = {
    "50tons": HMainBR1.src,
    "100tons": HMainBR2.src,
    "150tons": HMainBR3.src,
    "200tons": HMainBR4.src,
    // Agrega más versiones aquí
  };
  const imageMap2: Record<VersionType, string> = {
    "50tons": HRL50.src,
    "100tons": HRL100.src,
    "150tons": HRL150.src,
    "200tons": HRL200.src,
    // Agrega más versiones aquí
  };
  const imageMap3: Record<VersionType, string> = {
    "50tons": HRR50.src,
    "100tons": HRR100.src,
    "150tons": HRR150.src,
    "200tons": HRR200.src,
    // Agrega más versiones aquí
  };

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
    C4_2: false,
    C5_1: false,
  });

  const selectedImage = imageMap[activeVersion as VersionType] || HLeftBS1.src;
  const selectedImage2 =
    imageMap2[activeVersion as VersionType] || HLeftBS1.src;
  const selectedImage3 =
    imageMap3[activeVersion as VersionType] || HLeftBS1.src;
  //KEY
  const key = `${activeTab}-${activeVersion}`;
  const activeData = toggleConfig.find((item) => item.id === key);
  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };

  const productionCapacityOptions = [
    { id: "50tons", label: "50 tons", tab: 1 },
    { id: "100tons", label: "100 tons", tab: 1 },
    { id: "50tons", label: "50 tons", tab: 2 },
    { id: "100tons", label: "100 tons", tab: 2 },
    { id: "150tons", label: "150 tons", tab: 2 },
    { id: "200tons", label: "200 tons", tab: 2 },
  ] as const;

  const siloOptions = [
    { id: 1, label: "Self-erecting" },
    { id: 2, label: "Relocatable Silo" },
  ];



  const scrollTrigRef = useRef<ScrollTrigger | null>(null);
  const resizeTimerRef = useRef<number | null>(null);
  const isCreatingRef = useRef(false);
  const isIntersectingRef = useRef(false);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const pendingRecalcRef = useRef(false);
  const lastRecalcTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  const createScrollTrigger = useCallback(() => {

    if (isCreatingRef.current) return;
    isCreatingRef.current = true;

    const box = boxRef.current;
    const target = nextSectionRef.current;
    const clipTarget = clipTargetRef.current;
    const img = imgRef.current;
    const otro = otroElemento.current;
    const options = optionsRef.current;
    const col1 = columnGrid1.current;
    const col2 = columnGrid2.current;


    if (!box || !target || !clipTarget || !img || !otro || !options || !col1 || !col2) {
      isCreatingRef.current = false;
      return;
    }

    if (activeTab !== 1 || activeVersion !== "50tons") {
      isCreatingRef.current = false;
      return;
    }


    if (scrollTrigRef.current) {
      scrollTrigRef.current.kill();
      scrollTrigRef.current = null;
    }

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
      invalidateOnRefresh: true,
      animation: anim,

      onUpdate: (self: ScrollTrigger) => {
        const p = self.progress;
        let clipProgress = 0;

        if (clipEndClamped > clipStartClamped) {
          clipProgress = (p - clipStartClamped) / (clipEndClamped - clipStartClamped);
        }
        clipProgress = Math.max(0, Math.min(clipProgress, 1));

        gsap.set(img, {
          clipPath: `inset(0% 0% ${clipProgress * 100}% 0%)`,
        });

        const show80 = p >= 0.8 && p <= 1.0;
        const show90 = p >= 0.9 && p <= 1.0;
        gsap.to(otro, {
          opacity: show80 ? 1 : 0,
          y: show80 ? 0 : -50,
          scale: show80 ? 1 : 0.95,
          duration: 0.3,
        });

        gsap.to(options, {
          opacity: show90 ? 1 : 0,
          y: show90 ? 0 : -50,
          scale: show90 ? 1 : 0.95,
          duration: 0.3,
        });

        gsap.to(col1, {
          opacity: show90 ? 1 : 0,
          x: show90 ? 0 : -50,
          scale: show90 ? 1 : 0.95,
          duration: 0.3,
        });

        gsap.to(col2, {
          opacity: show90 ? 1 : 0,
          x: show90 ? 0 : 50,
          scale: show90 ? 1 : 0.95,
          duration: 0.3,
        });
      },
    });

    scrollTrigRef.current = scrollTrig;
    isCreatingRef.current = false;
    lastRecalcTimeRef.current = Date.now();

  }, [activeTab]);

  const scheduleRecalc = useCallback(() => {
    if (!isIntersectingRef.current) {
      pendingRecalcRef.current = true;
      return;
    }

    const now = Date.now();
    const timeSinceLastRecalc = now - lastRecalcTimeRef.current;
    const MIN_RECALC_INTERVAL = 500;

    if (timeSinceLastRecalc < MIN_RECALC_INTERVAL) {
      if (!pendingRecalcRef.current) {
        pendingRecalcRef.current = true;
        setTimeout(() => {
          pendingRecalcRef.current = false;
          scheduleRecalc();
        }, MIN_RECALC_INTERVAL - timeSinceLastRecalc);
      }
      return;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      createScrollTrigger();
      ScrollTrigger.refresh();
      animationFrameRef.current = null;
      pendingRecalcRef.current = false;
    });
  }, [createScrollTrigger]);

  useEffect(() => {
    createScrollTrigger();
    ScrollTrigger.refresh();
  }, []);


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasIntersecting = isIntersectingRef.current;
          isIntersectingRef.current = entry.isIntersecting;

          if (entry.isIntersecting && !wasIntersecting) {
            console.log('viewport entró');
            createScrollTrigger();

            if (pendingRecalcRef.current) {
              pendingRecalcRef.current = false;
              scheduleRecalc();
            }
          } else if (!entry.isIntersecting && wasIntersecting) {
            console.log('viewport salió ');
          }
        });
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [createScrollTrigger, scheduleRecalc]);

  useEffect(() => {
    if (!isIntersectingRef.current) {
      createScrollTrigger();
    }

    const observerConfig: MutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['style', 'class'],
    };

    const handleMutation = (mutations: MutationRecord[]) => {
      const relevantMutation = mutations.some((mutation) => {
        if (
          mutation.target === boxRef.current ||
          mutation.target === imgRef.current ||
          mutation.target === otroElemento.current ||
          mutation.target === optionsRef.current ||
          mutation.target === columnGrid1.current ||
          mutation.target === columnGrid2.current
        ) {
          return false;
        }

        if (mutation.type === 'attributes') {
          const attrName = mutation.attributeName;
          return attrName === 'style' || attrName === 'class';
        }

        return mutation.type === 'childList';
      });

      if (relevantMutation) {
        console.log('modificación dom');
        scheduleRecalc();
      }
    };

    const observer = new MutationObserver(handleMutation);

    if (containerRef.current) {
      observer.observe(document.body, observerConfig);
    }

    mutationObserverRef.current = observer;

    return () => {
      observer.disconnect();
      mutationObserverRef.current = null;
    };
  }, [scheduleRecalc]);

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current);
      }

      resizeTimerRef.current = window.setTimeout(() => {
        console.log('cambio de res');
        scheduleRecalc();
      }, 300);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current);
      }
    };
  }, [scheduleRecalc]);


  useEffect(() => {
    if (activeTab === 1 && isIntersectingRef.current) {
      scheduleRecalc();
    } else if (activeTab !== 1) {
      if (scrollTrigRef.current) {
        scrollTrigRef.current.kill();
        scrollTrigRef.current = null;
      }
    }
  }, [activeTab, scheduleRecalc]);

  useEffect(() => {
    return () => {
      if (scrollTrigRef.current) {
        scrollTrigRef.current.kill();
      }
      if (mutationObserverRef.current) {
        mutationObserverRef.current.disconnect();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="h-[60vh] relative flex items-center justify-center bg-bgMain w-full">
        <div
          className="absolute bottom-0 w-full h-4/6 overflow-hidden"
          style={{
            backgroundImage: "url(/fondoAsphalt.webp)",
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
             z-20 w-[120px] h-[600px]"
        >
          <img
            src={HMainBS1.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen de fondo"
            style={{
              display:
                activeVersion === "50tons" && activeTab === 1
                  ? "block"
                  : "none",
              opacity: activeVersion === "50tons" && activeTab === 1 ? 1 : 0,
              visibility:
                activeVersion === "50tons" && activeTab === 1
                  ? "visible"
                  : "hidden",
            }}
          />
          <img
            ref={imgRef}
            src={HMainS1.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen superior"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>
      </div>
      <div
        ref={clipTargetRef}
        id="sectionNueva"
        className="bg-[url('/fondopatron.webp')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
      >
        <header id="planosSilos" className="mt-10 text-white" ref={otroElemento}>
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
            {/* mobile primer select */}
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto mb-6">
              <label className="text-white block text-center">
                PRODUCTION:
              </label>

              <div className="relative">
                <select
                  value={activeVersion}
                  onChange={(e) => setActiveVersion(e.target.value as any)}
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
        appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {productionCapacityOptions
                    .filter((opt) => opt.tab === activeTab)
                    .map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* label de primer select y botones */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:pb-5">
              <label className="text-white block text-center">
                PRODUCTION CAPACITY:
              </label>
            </div>

            {/* botones */}
            <div className="hidden md:flex flex-wrap justify-center gap-5 mb-6">
              {productionCapacityOptions
                .filter((opt) => opt.tab === activeTab)
                .map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveVersion(option.id)}
                    className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300
          ${activeVersion === option.id
                        ? "text-black bg-white border-white"
                        : "text-white bg-transparent border-white"
                      }`}
                  >
                    {option.label}
                  </button>
                ))}
            </div>

            {/* mobile segundo select */}
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto mb-6">
              <label className="text-white block text-center">
                OPTIONS:
              </label>

              <div className="relative">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(Number(e.target.value))}
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
        appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {siloOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* opciones desktop */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:pb-5">
              <label className="text-white block text-center">
                OPTIONS:
              </label>
            </div>

            <div className="hidden md:flex justify-center gap-5">
              {siloOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setActiveTab(option.id);
                    if (option.id === 1) setActiveVersion("50tons");
                  }}
                  className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300
        ${activeTab === option.id
                      ? "text-gray-900 bg-white border-white"
                      : "text-white bg-transparent border-white"
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

          </div>

          {/* Contenido de los tabs */}
          <div
            className="w-full mt-20 mb-10"
            id="tabsSection"
            ref={nextSectionRef}
          >
            {activeTab === 1 && (
              <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center w-full">
                  <div
                    className="flex flex-col items-start justify-start gap-0 md:gap-4 h-full col-span-1 w-full order-2 md:order-1 mt-10 md:mt-0"
                    id="column1"
                    ref={columnGrid1}
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-4 list-disc list-inside ${openSections.C1_1
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
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FEEDING & DISCHARGE SYSTEM
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
                        <li>Top inlet with rubber seal and rain cover</li>
                        <li>1 m³ batch discharge chamber</li>
                        <li>Pneumatic gates: fast-release and waste bypass</li>
                        <li>Load cell integration with programmable logic</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Industrial-grade motors and components</li>
                        <li>Simple wiring system for easy maintenance</li>
                        <li>Weather-protected electrical connections</li>
                        <li>Siemens motors / industrial-grade wiring</li>
                        <li>Pulley and bushing transmission system</li>
                        <li>
                          External fuel lines, sensors, and cabling included
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex items-start justify-center w-full h-[600px] order-1 md:order-2">
                    {activeVersion === "50tons" ? (
                      <div className="w-full"></div>
                    ) : (
                      <img
                        src={HMainBS2.src}
                        alt=""
                        className="w-[120px] h-[600px]"
                      />
                    )}
                  </div>
                  <div
                    className="flex flex-col items-start justify-start h-full gap-0 md:gap-4 w-full col-span-1 order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
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
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Six inches of fiberglass insulation reduce heat loss
                          and minimize surface temperature
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Exterior stainless steel lining.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>Setup no requires crane or hoisting equipment</li>
                        <li>Bolt-on support legs for fast on-site assembly</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
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
                <div className="flex justify-start md:justify-center items-end my-10 gap-6 w-full overflow-x-auto">
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
                    <div className="h-[400px] min-w-[650px] w-full flex items-center justify-center">
                      {activeVersion === "50tons" ? (
                        <img
                          src={HML50.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <img
                          src={HML100.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[400px]">
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
                    <div className="h-[400px] min-w-[150px] w-full flex justify-center items-center">
                      {activeVersion === "50tons" ? (
                        <img
                          src={HMR50.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <img
                          src={HMR100.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-10 gap-3 md:gap-10">
                  <div className="text-white font-normal col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        SILO DIMENSIONS
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
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Storage Capacity:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.capacity ?? ""} `
                            : `${activeData?.dimensions.capacity ?? 0}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 w-full">
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
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including transport skid):</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Chassis length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.chasisLenght?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.chasisLenght ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Transportation width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.transporWidth?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.transporWidth ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.axleConfig ?? ""} `
                            : `${activeData?.dimensions.axleConfig ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height(if pre-mounted):</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheel?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.wheel ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Support system: </h1>
                        <p className="text-end md:text-start">
                          {unit === "metric"
                            ? `${activeData?.dimensions.support ?? ""} `
                            : `${activeData?.dimensions.support ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Wheels: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheels ?? ""} `
                            : `${activeData?.dimensions.wheels ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Truck height dischange:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.truckHeight?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.truckHeight ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total height (heighest point):</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-3 md:mt-10 gap-0 md:gap-10">
                  <div className="text-white font-normal col-span-1 md:col-span-3 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        FEEDING SLAT CONVEYOR
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
                      className={`text-sm lg:text-base grid grid-cols-1 md:grid-cols-3 justify-center w-full gap-3 gap-6 lg:gap-20 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C5_1
                        ? "max-h-[600px] opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100`}
                    >
                      <div className="text-white font-normal col-span-1">
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.length ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.width ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height (erected):</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.heightErec?.toFixed(1) ?? ""
                              } cm`
                              : `${(
                                (slatConveyor.heightErec ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Chain pitch:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.chain?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.chain ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height (discharge height):</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.heightDischarge?.toFixed(1) ?? ""
                              } cm`
                              : `${(
                                (slatConveyor.heightDischarge ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Angle of inclination:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.angle ?? ""} `
                              : `${slatConveyor.angle ?? 0}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col text-white col-span-1 md:col-span-2 w-full justify-center">
                        <ul className="ml-2 lg:ml-6 list-disc w-full">
                          <li>
                            Transported together with the silo on the same
                            chassis
                          </li>
                          <li>
                            Installed and dismantled on-site using a crane
                          </li>
                          <li>
                            Independent structure, not fixed to the silo frame
                          </li>
                          <li>Capacity up to 320 TPH</li>
                          <li>
                            Reinforced steel paddles for durability and
                            consistent performance
                          </li>
                          <li>
                            Enclosed design helps retain material temperature
                            and prevent contamination
                          </li>
                          <li>
                            Driven by industrial motor and reducer for easy
                            maintenance
                          </li>
                          <li>
                            Top access doors for easy cleaning and inspection
                          </li>
                          <li>
                            Manual chain tensioning system for long-term
                            reliability
                          </li>
                          <li>
                            Designed for fast alignment with the silo inlet
                            during setup
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center w-full">
                  <div
                    className="flex flex-col items-start justify-start gap-0 md:gap-4 h-full col-span-1 w-full order-2 md:order-1 mt-10 md:mt-0"
                    id="column1"
                    ref={columnGrid1}
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-4 list-disc list-inside ${openSections.C1_1
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
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          FEEDING & DISCHARGE SYSTEM
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
                        <li>Top inlet with rubber seal and rain cover</li>
                        <li>1 m³ batch discharge chamber</li>
                        <li>Pneumatic gates: fast-release and waste bypass</li>
                        <li>Load cell integration with programmable logic</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Industrial-grade motors and components</li>
                        <li>Simple wiring system for easy maintenance</li>
                        <li>Weather-protected electrical connections</li>
                        <li>Siemens motors / industrial-grade wiring</li>
                        <li>Pulley and bushing transmission system</li>
                        <li>
                          External fuel lines, sensors, and cabling included
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex items-start justify-center w-full h-[600px] order-1 md:order-2">
                    <img
                      src={selectedImage}
                      alt="Selected image"
                      className="w-[120px] h-[600px]"
                    />
                  </div>
                  <div
                    className="flex flex-col items-start justify-start h-full gap-0 md:gap-4 w-full col-span-1 order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
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
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Six inches of fiberglass insulation reduce heat loss
                          and minimize surface temperature
                        </li>
                        <li>Labyrinth seals reduce air and heat loss.</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Exterior stainless steel lining.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILITY
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>Setup no requires crane or hoisting equipment</li>
                        <li>Bolt-on support legs for fast on-site assembly</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
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
                <div className="flex justify-start md:justify-center items-end my-10 gap-6 w-full overflow-x-auto">
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
                    <div className="h-[400px] min-w-[450px] flex items-center justify-center">
                      <img
                        src={selectedImage2}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[400px]">
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
                    <div className="h-[400px] min-w-[150px] flex justify-center items-center">
                      <img
                        src={selectedImage3}
                        alt=""
                        className="w-auto h-[400px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-10 gap-3 md:gap-10">
                  <div className="text-white font-normal col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        SILO DIMENSIONS
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
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Storage Capacity:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.capacity ?? ""} `
                            : `${activeData?.dimensions.capacity ?? 0}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 w-full">
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
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including transport skid):</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Chassis length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.chasisLenght?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.chasisLenght ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Transportation width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.transporWidth?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.transporWidth ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.axleConfig ?? ""} `
                            : `${activeData?.dimensions.axleConfig ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height(if pre-mounted):</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheel?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.wheel ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Support system: </h1>
                        <p className="text-end md:text-start">
                          {unit === "metric"
                            ? `${activeData?.dimensions.support ?? ""} `
                            : `${activeData?.dimensions.support ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Wheels: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheels ?? ""} `
                            : `${activeData?.dimensions.wheels ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Truck height dischange:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.truckHeight?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.truckHeight ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total height (heighest point):</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-3 md:mt-10 gap-0 md:gap-10">
                  <div className="text-white font-normal col-span-1 md:col-span-3 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        FEEDING SLAT CONVEYOR
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
                      className={`text-sm lg:text-base grid grid-cols-1 md:grid-cols-3 justify-center w-full gap-3 gap-6 lg:gap-20 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C5_1
                        ? "max-h-[600px] opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100`}
                    >
                      <div className="text-white font-normal col-span-1">
                        <div className="flex justify-between">
                          <h1>Length:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.length ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Width:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.width ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height (erected):</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.heightErec?.toFixed(1) ?? ""
                              } cm`
                              : `${(
                                (slatConveyor.heightErec ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Chain pitch:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.chain?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.chain ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Height (discharge height):</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.heightDischarge?.toFixed(1) ?? ""
                              } cm`
                              : `${(
                                (slatConveyor.heightDischarge ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Angle of inclination:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.angle ?? ""} `
                              : `${slatConveyor.angle ?? 0}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col text-white col-span-1 md:col-span-2 w-full justify-center">
                        <ul className="ml-2 lg:ml-6 list-disc w-full">
                          <li>
                            Transported together with the silo on the same
                            chassis
                          </li>
                          <li>
                            Installed and dismantled on-site using a crane
                          </li>
                          <li>
                            Independent structure, not fixed to the silo frame
                          </li>
                          <li>Capacity up to 320 TPH</li>
                          <li>
                            Reinforced steel paddles for durability and
                            consistent performance
                          </li>
                          <li>
                            Enclosed design helps retain material temperature
                            and prevent contamination
                          </li>
                          <li>
                            Driven by industrial motor and reducer for easy
                            maintenance
                          </li>
                          <li>
                            Top access doors for easy cleaning and inspection
                          </li>
                          <li>
                            Manual chain tensioning system for long-term
                            reliability
                          </li>
                          <li>
                            Designed for fast alignment with the silo inlet
                            during setup
                          </li>
                        </ul>
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

export default HotMixPlanos;
