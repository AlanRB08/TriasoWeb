import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgFront from "../../assets/images/BagHouses/BagHousesVS2.png";
import bgPlanos from "../../assets/images/BagHouses/bagHousesVS2Planos.png"

gsap.registerPlugin(ScrollTrigger);
const toggleConfig = [
    {
        id: "12",
        dimensions: {
            width: 338.38,
            height: 424.34,
            length: 1281.5,
            tanklenght: 704,
            tangheight: 274.1,
            capacity: 45000,
            wheel: 149.5,
            acfm: 14000,
            fArea: 18,
            bags: 168,
        },
    },
    {
        id: "16",
        dimensions: {
            width: 344.45,
            height: 424.34,
            length: 1498.75,
            tanklenght: 921,
            tangheight: 274.1,
            capacity: 60000,
            wheel: 149.5,
            acfm: 19250,
            fArea: 24,
            bags: 224,
        },
    },
    {
        id: "20",
        dimensions: {
            width: 358.85,
            height: 424.34,
            length: 1726.26,
            tanklenght: 1149,
            tangheight: 274.1,
            capacity: 45000,
            wheel: 149.5,
            acfm: 24500,
            fArea: 33,
            bags: 308,
        },
    },
    {
        id: "24",
        dimensions: {
            width: 371.47,
            height: 424.34,
            length: 2000.38,
            tanklenght: 1423.56,
            tangheight: 274.1,
            capacity: 100000,
            wheel: 149.5,
            acfm: 35000,
            fArea: 52,
            bags: 392,
        },
    },
    {
        id: "30",
        dimensions: {
            width: 384.09,
            height: 424.34,
            length: 2274.51,
            tanklenght: 1697.51,
            tangheight: 274.1,
            capacity: 120000,
            wheel: 149.5,
            acfm: 52500,
            fArea: 63,
            bags: 408,
        },
    },
    {
        id: "31",
        dimensions: {
            width: 384.09,
            height: 424.34,
            length: 2274.51,
            tanklenght: 1697.51,
            tangheight: 274.1,
            capacity: 120000,
            wheel: 149.5,
            acfm: 70000,
            fArea: 89,
            bags: 476,
        },
    },
    {
        id: "32",
        dimensions: {
            width: 384.09,
            height: 424.34,
            length: 2274.51,
            tanklenght: 1697.51,
            tangheight: 274.1,
            capacity: 120000,
            wheel: 149.5,
            acfm: 87500,
            fArea: 110,
            bags: 588,
        },
    },
];

const BHPlanos = () => {
    //logica de cambio de imagenes
    const [activeVersion, setActiveVersion] = useState("12");
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

    const activeData = toggleConfig.find((item) => item.id === activeVersion);
    //SWITCH LOGIC
    const [unit, setUnit] = useState<"metric" | "imperial">("metric");

    // Función para alternar unidades
    const toggleUnit = () => {
        const newUnit = unit === "metric" ? "imperial" : "metric";
        setUnit(newUnit);
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

        if (activeTab !== 1) {
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
                    ref={boxRef}
                    className="text-white font-bold
           flex items-center justify-center
            rounded will-change-transform transform-gpu
             z-20 w-[180px] h-[600px]"
                >
                    <img
                        src={bgPlanos.src}
                        className="absolute left-0 top-0 w-full h-full object-contain"
                        alt="Imagen de fondo"
                        style={{
                            display: activeTab === 1 ? "block" : "none",
                            opacity: activeTab === 1 ? 1 : 0,
                            visibility: activeTab === 1 ? "visible" : "hidden",
                        }}
                    />
                    <img
                        ref={imgRef}
                        src={bgFront.src}
                        className="absolute top-0 left-0 w-full h-full object-contain  "
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
                            MODELS:
                        </h1>
                        <div className="flex gap-3 justify-center w-full md:px-32 items-center justify-items-center">
                            {/* Botón 1 */}
                            <button
                                onClick={() => (setActiveTab(1), setActiveVersion("12"))}
                                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 max-w-[150px] ${activeTab === 1
                                    ? "text-gray-900 bg-white border-white"
                                    : "text-white bg-transparent border-white"
                                    }`}
                            >
                                80-110 Tph
                            </button>

                            {/* Botón 2 */}
                            <button
                                onClick={() => (setActiveTab(2), setActiveVersion("16"))}
                                className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 max-w-[150px] ${activeTab === 2
                                    ? "text-gray-900 bg-white border-white"
                                    : "text-white bg-transparent border-white"
                                    }`}
                            >
                                110-150 Tph
                            </button>

                            {/* Botón 3 */}
                            <button
                                onClick={() => (setActiveTab(3), setActiveVersion("20"))}
                                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full max-w-[150px] ${activeTab === 3
                                    ? "text-gray-900 bg-white border-white"
                                    : "text-white bg-transparent border-white"
                                    }`}
                            >
                                140-180 Tph
                            </button>
                        </div>
                        <br />
                        <div className="flex gap-3 justify-center w-full md:px-32 items-center justify-items-center">
                            {/* Botón 4 */}
                            <button
                                onClick={() => (setActiveTab(4), setActiveVersion("24"))}
                                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full max-w-[150px] ${activeTab === 4
                                    ? "text-gray-900 bg-white border-white"
                                    : "text-white bg-transparent border-white"
                                    }`}
                            >
                                200-250 Tph
                            </button>
                            {/* Botón 5 */}
                            <button
                                onClick={() => (setActiveTab(5), setActiveVersion("30"))}
                                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full max-w-[150px] ${activeTab === 5
                                    ? "text-gray-900 bg-white border-white"
                                    : "text-white bg-transparent border-white"
                                    }`}
                            >
                                300-360 Tph
                            </button>
                            {/* Botón 6 */}
                            <button
                                onClick={() => (setActiveTab(6), setActiveVersion("31"))}
                                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full max-w-[150px] ${activeTab === 6
                                    ? "text-gray-900 bg-white border-white"
                                    : "text-white bg-transparent border-white"
                                    }`}
                            >
                                400-480 Tph
                            </button>
                            {/* Botón 7 */}
                            <button
                                onClick={() => (setActiveTab(7), setActiveVersion("32"))}
                                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full max-w-[150px] ${activeTab === 7
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
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                                    <div
                                        className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}
                                    >
                                        <div className="w-full flex flex-col items-start justify-center gap-4 text-white col-span-1">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CAPACITY
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
                                            <div>
                                                <div className="flex gap-5">
                                                    <h1>Length:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.acfm?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.acfm ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Filtering Area:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.fArea?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } m3`
                                                            : `${(
                                                                (activeData?.dimensions.fArea ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft3`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Bags:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.bags?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.bags ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    MAINTENANCE & ADVANTAGES
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Easy bag replacement with quick-change frames.</li>
                                                <li>Access doors and inspection hatches for fast servicing</li>
                                                <li>Factory-installed bag powder — no startup waiting time.</li>
                                                <li>99.99% filtration and energy-efficient cleaning from startup</li>
                                                <li>Self-contained, integrated systems for portable or stationary plants.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Industrial-grade motors, components, and Siemens wiring.</li>
                                                <li>Simplified wiring system for easy maintenance.</li>
                                                <li>Weather-protected electrical connections.</li>
                                                <li>Pulley-and-bushing drive system.</li>
                                                <li>External fuel lines, sensors, and signal cabling pre-installed.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-span-2 flex items-start justify-center w-full order-1 md:order-2 h-[600px]"></div>
                                    <div
                                        className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                                        id="column2"
                                        ref={columnGrid2}
                                    >
                                        <div className="flex flex-col w-full items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Fully automatic or manual operation</li>
                                                <li>Digital monitoring of all operating parameters, with real-time supervision and historical data reports.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Remote monitoring system accessible from computers, tablets, and smartphones.

                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Alarm and interlock system for out-of-range conditions.</li>
                                                <li>Independent, intuitive controls designed for field reliability.</li>
                                                <li>Adaptable to existing asphalt plant control infrastructure</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Seamless integration to central control systems.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CLEANING OPERATION
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>
                                                    Manual or automatic operation.
                                                </li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Exhaust damper with electric actuator for overtemperature protection.</li>
                                                        <li>Pulse jet cleaning cycles.</li>
                                                    </ul>
                                                </li>
                                                <li>Chimney with ecological test ports for environmental monitoring.</li>
                                                <li>Gas extractor with centrifugal separation removes up to 70% of dust before filtration.</li>
                                                <li>Knockout chamber and internal baffles ensure smooth airflow and bag protection.</li>
                                                <li>Exhaust fan with curved blades operates quietly and efficiently.</li>
                                                <li>Supersonic 3D-printed carbon-alloy nozzles for pulse-jet cleaning.</li>
                                                <li>Uniform fines return into the drum mixer.</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full gap-5 grid grid-cols-1 lg:grids-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                DURABILITY & SAFETY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>High-strength, reinforced structure for long-term heavy-duty operation.</li>
                                                <li>Aesthetic side panels for professional image.</li>
                                                <li>Bolted components with anti-corrosion coating.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Galvanized bolts and electrostatic paint ensure long-lasting durability and excellent adhesion.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Thermal insulation with 2" fiberglass to prevent overcooling.</li>
                                                <li>Labyrinth seals reduce air and heat loss.</li>
                                                <li>Dust-resistant housing protects control module.</li>
                                                <li>Heat resistance up to 204 °C continuous / 220 °C peak with Nomex bags.</li>
                                                <li>Up to 260 °C peak with P84 polyimide bags.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-4 text-white col-span-2 ">
                                        <div>
                                            <div className="flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    COMPLIANCE WITH INDUSTRY STANDARS
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                        ? "max-h-96 opacity-1 mb-4"
                                                        : "max-h-0 opacity-0"
                                                        } md:max-h-full md:opacity-100 md:block`}
                                                >
                                                    <li>EPA.</li>
                                                    <li>OSHA.</li>
                                                    <li>DOT.</li>
                                                    <li>UL wiring.</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Designed for relocation</li>
                                                <li>Built-in fifth wheel means no lowboy is required.</li>
                                                <li>Also transportable on lowboy or flatbed trailer if preferred.</li>
                                                <li>Mounted on standard transport chassis with triple axles and 16” highway-rated wheels.</li>
                                                <li>Pull-type hitch with safety coupling and brake system.</li>
                                                <li>Setup requires no crane or hoisting equipment.</li>
                                                <li>Bolt-on support legs for fast on-site assembly.</li>
                                                <li>DOT-compliant lighting and reflective markings for transport visibility.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )},
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
                                        <div className=" w-full flex flex-col items-start justify-center gap-4 text-white col-span-1">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CAPACITY
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
                                            <div>
                                                <div className="flex gap-5">
                                                    <h1>Length:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.acfm?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.acfm ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Filtering Area:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.fArea?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } m3`
                                                            : `${(
                                                                (activeData?.dimensions.fArea ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft3`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Bags:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.bags?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.bags ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    MAINTENANCE & ADVANTAGES
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Easy bag replacement with quick-change frames.</li>
                                                <li>Access doors and inspection hatches for fast servicing</li>
                                                <li>Factory-installed bag powder — no startup waiting time.</li>
                                                <li>99.99% filtration and energy-efficient cleaning from startup</li>
                                                <li>Self-contained, integrated systems for portable or stationary plants.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Industrial-grade motors, components, and Siemens wiring.</li>
                                                <li>Simplified wiring system for easy maintenance.</li>
                                                <li>Weather-protected electrical connections.</li>
                                                <li>Pulley-and-bushing drive system.</li>
                                                <li>External fuel lines, sensors, and signal cabling pre-installed.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-span-2 flex items-center justify-center w-full order-1 md:order-2 h-[550px] pb-[100px]">
                                        <img src={bgPlanos.src} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div
                                        className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                                        id="column2"
                                        ref={columnGrid2}
                                    >
                                        <div className="flex flex-col w-full items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Fully automatic or manual operation</li>
                                                <li>Digital monitoring of all operating parameters, with real-time supervision and historical data reports.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Remote monitoring system accessible from computers, tablets, and smartphones.

                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Alarm and interlock system for out-of-range conditions.</li>
                                                <li>Independent, intuitive controls designed for field reliability.</li>
                                                <li>Adaptable to existing asphalt plant control infrastructure</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Seamless integration to central control systems.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CLEANING OPERATION
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>
                                                    Manual or automatic operation.
                                                </li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Exhaust damper with electric actuator for overtemperature protection.</li>
                                                        <li>Pulse jet cleaning cycles.</li>
                                                    </ul>
                                                </li>
                                                <li>Chimney with ecological test ports for environmental monitoring.</li>
                                                <li>Gas extractor with centrifugal separation removes up to 70% of dust before filtration.</li>
                                                <li>Knockout chamber and internal baffles ensure smooth airflow and bag protection.</li>
                                                <li>Exhaust fan with curved blades operates quietly and efficiently.</li>
                                                <li>Supersonic 3D-printed carbon-alloy nozzles for pulse-jet cleaning.</li>
                                                <li>Uniform fines return into the drum mixer.</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full gap-5 grid grid-cols-1 lg:grids-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                DURABILITY & SAFETY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>High-strength, reinforced structure for long-term heavy-duty operation.</li>
                                                <li>Aesthetic side panels for professional image.</li>
                                                <li>Bolted components with anti-corrosion coating.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Galvanized bolts and electrostatic paint ensure long-lasting durability and excellent adhesion.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Thermal insulation with 2" fiberglass to prevent overcooling.</li>
                                                <li>Labyrinth seals reduce air and heat loss.</li>
                                                <li>Dust-resistant housing protects control module.</li>
                                                <li>Heat resistance up to 204 °C continuous / 220 °C peak with Nomex bags.</li>
                                                <li>Up to 260 °C peak with P84 polyimide bags.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-4 text-white col-span-2">
                                        <div>
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    COMPLIANCE WITH INDUSTRY STANDARS
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                        ? "max-h-96 opacity-1 mb-4"
                                                        : "max-h-0 opacity-0"
                                                        } md:max-h-full md:opacity-100 md:block`}
                                                >
                                                    <li>EPA.</li>
                                                    <li>OSHA.</li>
                                                    <li>DOT.</li>
                                                    <li>UL wiring.</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Designed for relocation</li>
                                                <li>Built-in fifth wheel means no lowboy is required.</li>
                                                <li>Also transportable on lowboy or flatbed trailer if preferred.</li>
                                                <li>Mounted on standard transport chassis with triple axles and 16” highway-rated wheels.</li>
                                                <li>Pull-type hitch with safety coupling and brake system.</li>
                                                <li>Setup requires no crane or hoisting equipment.</li>
                                                <li>Bolt-on support legs for fast on-site assembly.</li>
                                                <li>DOT-compliant lighting and reflective markings for transport visibility.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )},
                        {activeTab === 3 && (
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
                                        <div className=" w-full flex flex-col items-start justify-center gap-4 text-white col-span-1">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CAPACITY
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
                                            <div>
                                                <div className="flex gap-5">
                                                    <h1>Length:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.acfm?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.acfm ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Filtering Area:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.fArea?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } m3`
                                                            : `${(
                                                                (activeData?.dimensions.fArea ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft3`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Bags:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.bags?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.bags ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    MAINTENANCE & ADVANTAGES
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Easy bag replacement with quick-change frames.</li>
                                                <li>Access doors and inspection hatches for fast servicing</li>
                                                <li>Factory-installed bag powder — no startup waiting time.</li>
                                                <li>99.99% filtration and energy-efficient cleaning from startup</li>
                                                <li>Self-contained, integrated systems for portable or stationary plants.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Industrial-grade motors, components, and Siemens wiring.</li>
                                                <li>Simplified wiring system for easy maintenance.</li>
                                                <li>Weather-protected electrical connections.</li>
                                                <li>Pulley-and-bushing drive system.</li>
                                                <li>External fuel lines, sensors, and signal cabling pre-installed.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-span-2 flex items-center justify-center w-full order-1 md:order-2 h-[550px] pb-[100px]">
                                        <img src={bgPlanos.src} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div
                                        className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                                        id="column2"
                                        ref={columnGrid2}
                                    >
                                        <div className="flex flex-col w-full items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Fully automatic or manual operation</li>
                                                <li>Digital monitoring of all operating parameters, with real-time supervision and historical data reports.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Remote monitoring system accessible from computers, tablets, and smartphones.

                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Alarm and interlock system for out-of-range conditions.</li>
                                                <li>Independent, intuitive controls designed for field reliability.</li>
                                                <li>Adaptable to existing asphalt plant control infrastructure</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Seamless integration to central control systems.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CLEANING OPERATION
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>
                                                    Manual or automatic operation.
                                                </li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Exhaust damper with electric actuator for overtemperature protection.</li>
                                                        <li>Pulse jet cleaning cycles.</li>
                                                    </ul>
                                                </li>
                                                <li>Chimney with ecological test ports for environmental monitoring.</li>
                                                <li>Gas extractor with centrifugal separation removes up to 70% of dust before filtration.</li>
                                                <li>Knockout chamber and internal baffles ensure smooth airflow and bag protection.</li>
                                                <li>Exhaust fan with curved blades operates quietly and efficiently.</li>
                                                <li>Supersonic 3D-printed carbon-alloy nozzles for pulse-jet cleaning.</li>
                                                <li>Uniform fines return into the drum mixer.</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full gap-5 grid grid-cols-1 lg:grids-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                DURABILITY & SAFETY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>High-strength, reinforced structure for long-term heavy-duty operation.</li>
                                                <li>Aesthetic side panels for professional image.</li>
                                                <li>Bolted components with anti-corrosion coating.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Galvanized bolts and electrostatic paint ensure long-lasting durability and excellent adhesion.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Thermal insulation with 2" fiberglass to prevent overcooling.</li>
                                                <li>Labyrinth seals reduce air and heat loss.</li>
                                                <li>Dust-resistant housing protects control module.</li>
                                                <li>Heat resistance up to 204 °C continuous / 220 °C peak with Nomex bags.</li>
                                                <li>Up to 260 °C peak with P84 polyimide bags.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-4 text-white col-span-2">
                                        <div>
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    COMPLIANCE WITH INDUSTRY STANDARS
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                        ? "max-h-96 opacity-1 mb-4"
                                                        : "max-h-0 opacity-0"
                                                        } md:max-h-full md:opacity-100 md:block`}
                                                >
                                                    <li>EPA.</li>
                                                    <li>OSHA.</li>
                                                    <li>DOT.</li>
                                                    <li>UL wiring.</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Designed for relocation</li>
                                                <li>Built-in fifth wheel means no lowboy is required.</li>
                                                <li>Also transportable on lowboy or flatbed trailer if preferred.</li>
                                                <li>Mounted on standard transport chassis with triple axles and 16” highway-rated wheels.</li>
                                                <li>Pull-type hitch with safety coupling and brake system.</li>
                                                <li>Setup requires no crane or hoisting equipment.</li>
                                                <li>Bolt-on support legs for fast on-site assembly.</li>
                                                <li>DOT-compliant lighting and reflective markings for transport visibility.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )},
                        {activeTab === 4 && (
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
                                        <div className="w-full flex flex-col items-start justify-center gap-4 text-white col-span-1">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CAPACITY
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
                                            <div>
                                                <div className="flex gap-5">
                                                    <h1>Length:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.acfm?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.acfm ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Filtering Area:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.fArea?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } m3`
                                                            : `${(
                                                                (activeData?.dimensions.fArea ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft3`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Bags:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.bags?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.bags ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    MAINTENANCE & ADVANTAGES
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Easy bag replacement with quick-change frames.</li>
                                                <li>Access doors and inspection hatches for fast servicing</li>
                                                <li>Factory-installed bag powder — no startup waiting time.</li>
                                                <li>99.99% filtration and energy-efficient cleaning from startup</li>
                                                <li>Self-contained, integrated systems for portable or stationary plants.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Industrial-grade motors, components, and Siemens wiring.</li>
                                                <li>Simplified wiring system for easy maintenance.</li>
                                                <li>Weather-protected electrical connections.</li>
                                                <li>Pulley-and-bushing drive system.</li>
                                                <li>External fuel lines, sensors, and signal cabling pre-installed.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-span-2 flex items-center justify-center w-full order-1 md:order-2 h-[550px] pb-[100px]">
                                        <img src={bgPlanos.src} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div
                                        className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                                        id="column2"
                                        ref={columnGrid2}
                                    >
                                        <div className="flex flex-col w-full items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Fully automatic or manual operation</li>
                                                <li>Digital monitoring of all operating parameters, with real-time supervision and historical data reports.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Remote monitoring system accessible from computers, tablets, and smartphones.

                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Alarm and interlock system for out-of-range conditions.</li>
                                                <li>Independent, intuitive controls designed for field reliability.</li>
                                                <li>Adaptable to existing asphalt plant control infrastructure</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Seamless integration to central control systems.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CLEANING OPERATION
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>
                                                    Manual or automatic operation.
                                                </li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Exhaust damper with electric actuator for overtemperature protection.</li>
                                                        <li>Pulse jet cleaning cycles.</li>
                                                    </ul>
                                                </li>
                                                <li>Chimney with ecological test ports for environmental monitoring.</li>
                                                <li>Gas extractor with centrifugal separation removes up to 70% of dust before filtration.</li>
                                                <li>Knockout chamber and internal baffles ensure smooth airflow and bag protection.</li>
                                                <li>Exhaust fan with curved blades operates quietly and efficiently.</li>
                                                <li>Supersonic 3D-printed carbon-alloy nozzles for pulse-jet cleaning.</li>
                                                <li>Uniform fines return into the drum mixer.</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full gap-5 grid grid-cols-1 lg:grids-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                DURABILITY & SAFETY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>High-strength, reinforced structure for long-term heavy-duty operation.</li>
                                                <li>Aesthetic side panels for professional image.</li>
                                                <li>Bolted components with anti-corrosion coating.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Galvanized bolts and electrostatic paint ensure long-lasting durability and excellent adhesion.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Thermal insulation with 2" fiberglass to prevent overcooling.</li>
                                                <li>Labyrinth seals reduce air and heat loss.</li>
                                                <li>Dust-resistant housing protects control module.</li>
                                                <li>Heat resistance up to 204 °C continuous / 220 °C peak with Nomex bags.</li>
                                                <li>Up to 260 °C peak with P84 polyimide bags.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-4 text-white col-span-2">
                                        <div>
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    COMPLIANCE WITH INDUSTRY STANDARS
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                        ? "max-h-96 opacity-1 mb-4"
                                                        : "max-h-0 opacity-0"
                                                        } md:max-h-full md:opacity-100 md:block`}
                                                >
                                                    <li>EPA.</li>
                                                    <li>OSHA.</li>
                                                    <li>DOT.</li>
                                                    <li>UL wiring.</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Designed for relocation</li>
                                                <li>Built-in fifth wheel means no lowboy is required.</li>
                                                <li>Also transportable on lowboy or flatbed trailer if preferred.</li>
                                                <li>Mounted on standard transport chassis with triple axles and 16” highway-rated wheels.</li>
                                                <li>Pull-type hitch with safety coupling and brake system.</li>
                                                <li>Setup requires no crane or hoisting equipment.</li>
                                                <li>Bolt-on support legs for fast on-site assembly.</li>
                                                <li>DOT-compliant lighting and reflective markings for transport visibility.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )},
                        {activeTab === 5 && (
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
                                        <div className="w-full flex flex-col items-start justify-center gap-4 text-white col-span-1">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CAPACITY
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
                                            <div>
                                                <div className="flex gap-5">
                                                    <h1>Length:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.acfm?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.acfm ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Filtering Area:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.fArea?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } m3`
                                                            : `${(
                                                                (activeData?.dimensions.fArea ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft3`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Bags:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.bags?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.bags ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    MAINTENANCE & ADVANTAGES
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Easy bag replacement with quick-change frames.</li>
                                                <li>Access doors and inspection hatches for fast servicing</li>
                                                <li>Factory-installed bag powder — no startup waiting time.</li>
                                                <li>99.99% filtration and energy-efficient cleaning from startup</li>
                                                <li>Self-contained, integrated systems for portable or stationary plants.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Industrial-grade motors, components, and Siemens wiring.</li>
                                                <li>Simplified wiring system for easy maintenance.</li>
                                                <li>Weather-protected electrical connections.</li>
                                                <li>Pulley-and-bushing drive system.</li>
                                                <li>External fuel lines, sensors, and signal cabling pre-installed.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-span-2 flex items-center justify-center w-full order-1 md:order-2 h-[550px] pb-[100px]">
                                        <img src={bgPlanos.src} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div
                                        className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                                        id="column2"
                                        ref={columnGrid2}
                                    >
                                        <div className="flex flex-col w-full items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Fully automatic or manual operation</li>
                                                <li>Digital monitoring of all operating parameters, with real-time supervision and historical data reports.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Remote monitoring system accessible from computers, tablets, and smartphones.

                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Alarm and interlock system for out-of-range conditions.</li>
                                                <li>Independent, intuitive controls designed for field reliability.</li>
                                                <li>Adaptable to existing asphalt plant control infrastructure</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Seamless integration to central control systems.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CLEANING OPERATION
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>
                                                    Manual or automatic operation.
                                                </li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Exhaust damper with electric actuator for overtemperature protection.</li>
                                                        <li>Pulse jet cleaning cycles.</li>
                                                    </ul>
                                                </li>
                                                <li>Chimney with ecological test ports for environmental monitoring.</li>
                                                <li>Gas extractor with centrifugal separation removes up to 70% of dust before filtration.</li>
                                                <li>Knockout chamber and internal baffles ensure smooth airflow and bag protection.</li>
                                                <li>Exhaust fan with curved blades operates quietly and efficiently.</li>
                                                <li>Supersonic 3D-printed carbon-alloy nozzles for pulse-jet cleaning.</li>
                                                <li>Uniform fines return into the drum mixer.</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full gap-5 grid grid-cols-1 lg:grids-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                DURABILITY & SAFETY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>High-strength, reinforced structure for long-term heavy-duty operation.</li>
                                                <li>Aesthetic side panels for professional image.</li>
                                                <li>Bolted components with anti-corrosion coating.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Galvanized bolts and electrostatic paint ensure long-lasting durability and excellent adhesion.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Thermal insulation with 2" fiberglass to prevent overcooling.</li>
                                                <li>Labyrinth seals reduce air and heat loss.</li>
                                                <li>Dust-resistant housing protects control module.</li>
                                                <li>Heat resistance up to 204 °C continuous / 220 °C peak with Nomex bags.</li>
                                                <li>Up to 260 °C peak with P84 polyimide bags.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-4 text-white col-span-2">
                                        <div>
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    COMPLIANCE WITH INDUSTRY STANDARS
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                        ? "max-h-96 opacity-1 mb-4"
                                                        : "max-h-0 opacity-0"
                                                        } md:max-h-full md:opacity-100 md:block`}
                                                >
                                                    <li>EPA.</li>
                                                    <li>OSHA.</li>
                                                    <li>DOT.</li>
                                                    <li>UL wiring.</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Designed for relocation</li>
                                                <li>Built-in fifth wheel means no lowboy is required.</li>
                                                <li>Also transportable on lowboy or flatbed trailer if preferred.</li>
                                                <li>Mounted on standard transport chassis with triple axles and 16” highway-rated wheels.</li>
                                                <li>Pull-type hitch with safety coupling and brake system.</li>
                                                <li>Setup requires no crane or hoisting equipment.</li>
                                                <li>Bolt-on support legs for fast on-site assembly.</li>
                                                <li>DOT-compliant lighting and reflective markings for transport visibility.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )},
                        {activeTab === 6 && (
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
                                        <div className="w-full flex flex-col items-start justify-center gap-4 text-white col-span-1">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CAPACITY
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
                                            <div>
                                                <div className="flex gap-5">
                                                    <h1>Length:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.acfm?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.acfm ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Filtering Area:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.fArea?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } m3`
                                                            : `${(
                                                                (activeData?.dimensions.fArea ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft3`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Bags:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.bags?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.bags ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    MAINTENANCE & ADVANTAGES
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Easy bag replacement with quick-change frames.</li>
                                                <li>Access doors and inspection hatches for fast servicing</li>
                                                <li>Factory-installed bag powder — no startup waiting time.</li>
                                                <li>99.99% filtration and energy-efficient cleaning from startup</li>
                                                <li>Self-contained, integrated systems for portable or stationary plants.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Industrial-grade motors, components, and Siemens wiring.</li>
                                                <li>Simplified wiring system for easy maintenance.</li>
                                                <li>Weather-protected electrical connections.</li>
                                                <li>Pulley-and-bushing drive system.</li>
                                                <li>External fuel lines, sensors, and signal cabling pre-installed.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-span-2 flex items-center justify-center w-full order-1 md:order-2 h-[550px] pb-[100px]">
                                        <img src={bgPlanos.src} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div
                                        className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                                        id="column2"
                                        ref={columnGrid2}
                                    >
                                        <div className="flex flex-col w-full items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Fully automatic or manual operation</li>
                                                <li>Digital monitoring of all operating parameters, with real-time supervision and historical data reports.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Remote monitoring system accessible from computers, tablets, and smartphones.

                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Alarm and interlock system for out-of-range conditions.</li>
                                                <li>Independent, intuitive controls designed for field reliability.</li>
                                                <li>Adaptable to existing asphalt plant control infrastructure</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Seamless integration to central control systems.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CLEANING OPERATION
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>
                                                    Manual or automatic operation.
                                                </li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Exhaust damper with electric actuator for overtemperature protection.</li>
                                                        <li>Pulse jet cleaning cycles.</li>
                                                    </ul>
                                                </li>
                                                <li>Chimney with ecological test ports for environmental monitoring.</li>
                                                <li>Gas extractor with centrifugal separation removes up to 70% of dust before filtration.</li>
                                                <li>Knockout chamber and internal baffles ensure smooth airflow and bag protection.</li>
                                                <li>Exhaust fan with curved blades operates quietly and efficiently.</li>
                                                <li>Supersonic 3D-printed carbon-alloy nozzles for pulse-jet cleaning.</li>
                                                <li>Uniform fines return into the drum mixer.</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full gap-5 grid grid-cols-1 lg:grids-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                DURABILITY & SAFETY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>High-strength, reinforced structure for long-term heavy-duty operation.</li>
                                                <li>Aesthetic side panels for professional image.</li>
                                                <li>Bolted components with anti-corrosion coating.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Galvanized bolts and electrostatic paint ensure long-lasting durability and excellent adhesion.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Thermal insulation with 2" fiberglass to prevent overcooling.</li>
                                                <li>Labyrinth seals reduce air and heat loss.</li>
                                                <li>Dust-resistant housing protects control module.</li>
                                                <li>Heat resistance up to 204 °C continuous / 220 °C peak with Nomex bags.</li>
                                                <li>Up to 260 °C peak with P84 polyimide bags.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-4 text-white col-span-2">
                                        <div>
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    COMPLIANCE WITH INDUSTRY STANDARS
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                        ? "max-h-96 opacity-1 mb-4"
                                                        : "max-h-0 opacity-0"
                                                        } md:max-h-full md:opacity-100 md:block`}
                                                >
                                                    <li>EPA.</li>
                                                    <li>OSHA.</li>
                                                    <li>DOT.</li>
                                                    <li>UL wiring.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Designed for relocation</li>
                                                <li>Built-in fifth wheel means no lowboy is required.</li>
                                                <li>Also transportable on lowboy or flatbed trailer if preferred.</li>
                                                <li>Mounted on standard transport chassis with triple axles and 16” highway-rated wheels.</li>
                                                <li>Pull-type hitch with safety coupling and brake system.</li>
                                                <li>Setup requires no crane or hoisting equipment.</li>
                                                <li>Bolt-on support legs for fast on-site assembly.</li>
                                                <li>DOT-compliant lighting and reflective markings for transport visibility.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )},
                        {activeTab === 7 && (
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
                                        <div className="w-full flex flex-col items-start justify-center gap-4 text-white col-span-1">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CAPACITY
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
                                            <div>
                                                <div className="flex gap-5">
                                                    <h1>Length:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.acfm?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.acfm ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Filtering Area:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.fArea?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } m3`
                                                            : `${(
                                                                (activeData?.dimensions.fArea ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft3`}
                                                    </p>
                                                </div>
                                                <div className="flex gap-5">
                                                    <h1>Bags:</h1>
                                                    <p>
                                                        {unit === "metric"
                                                            ? `${activeData?.dimensions.bags?.toFixed(
                                                                1
                                                            ) ?? ""
                                                            } cm`
                                                            : `${(
                                                                (activeData?.dimensions.bags ?? 0) *
                                                                cmToFeet
                                                            ).toFixed(1)} ft`}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    MAINTENANCE & ADVANTAGES
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Easy bag replacement with quick-change frames.</li>
                                                <li>Access doors and inspection hatches for fast servicing</li>
                                                <li>Factory-installed bag powder — no startup waiting time.</li>
                                                <li>99.99% filtration and energy-efficient cleaning from startup</li>
                                                <li>Self-contained, integrated systems for portable or stationary plants.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Industrial-grade motors, components, and Siemens wiring.</li>
                                                <li>Simplified wiring system for easy maintenance.</li>
                                                <li>Weather-protected electrical connections.</li>
                                                <li>Pulley-and-bushing drive system.</li>
                                                <li>External fuel lines, sensors, and signal cabling pre-installed.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-span-2 flex items-center justify-center w-full order-1 md:order-2 h-[550px] pb-[100px]">
                                        <img src={bgPlanos.src} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div
                                        className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                                        id="column2"
                                        ref={columnGrid2}
                                    >
                                        <div className="flex flex-col w-full items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Fully automatic or manual operation</li>
                                                <li>Digital monitoring of all operating parameters, with real-time supervision and historical data reports.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Remote monitoring system accessible from computers, tablets, and smartphones.

                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Alarm and interlock system for out-of-range conditions.</li>
                                                <li>Independent, intuitive controls designed for field reliability.</li>
                                                <li>Adaptable to existing asphalt plant control infrastructure</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>
                                                            Seamless integration to central control systems.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    CLEANING OPERATION
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>
                                                    Manual or automatic operation.
                                                </li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Exhaust damper with electric actuator for overtemperature protection.</li>
                                                        <li>Pulse jet cleaning cycles.</li>
                                                    </ul>
                                                </li>
                                                <li>Chimney with ecological test ports for environmental monitoring.</li>
                                                <li>Gas extractor with centrifugal separation removes up to 70% of dust before filtration.</li>
                                                <li>Knockout chamber and internal baffles ensure smooth airflow and bag protection.</li>
                                                <li>Exhaust fan with curved blades operates quietly and efficiently.</li>
                                                <li>Supersonic 3D-printed carbon-alloy nozzles for pulse-jet cleaning.</li>
                                                <li>Uniform fines return into the drum mixer.</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full gap-5 grid grid-cols-1 lg:grids-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                DURABILITY & SAFETY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>High-strength, reinforced structure for long-term heavy-duty operation.</li>
                                                <li>Aesthetic side panels for professional image.</li>
                                                <li>Bolted components with anti-corrosion coating.</li>
                                                <li className="list-none">
                                                    <ul className="list-disc ml-10">
                                                        <li>Galvanized bolts and electrostatic paint ensure long-lasting durability and excellent adhesion.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>Thermal insulation with 2" fiberglass to prevent overcooling.</li>
                                                <li>Labyrinth seals reduce air and heat loss.</li>
                                                <li>Dust-resistant housing protects control module.</li>
                                                <li>Heat resistance up to 204 °C continuous / 220 °C peak with Nomex bags.</li>
                                                <li>Up to 260 °C peak with P84 polyimide bags.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-4 text-white col-span-2">
                                        <div>
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                    COMPLIANCE WITH INDUSTRY STANDARS
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                        ? "max-h-96 opacity-1 mb-4"
                                                        : "max-h-0 opacity-0"
                                                        } md:max-h-full md:opacity-100 md:block`}
                                                >
                                                    <li>EPA.</li>
                                                    <li>OSHA.</li>
                                                    <li>DOT.</li>
                                                    <li>UL wiring.</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <li>Designed for relocation</li>
                                                <li>Built-in fifth wheel means no lowboy is required.</li>
                                                <li>Also transportable on lowboy or flatbed trailer if preferred.</li>
                                                <li>Mounted on standard transport chassis with triple axles and 16” highway-rated wheels.</li>
                                                <li>Pull-type hitch with safety coupling and brake system.</li>
                                                <li>Setup requires no crane or hoisting equipment.</li>
                                                <li>Bolt-on support legs for fast on-site assembly.</li>
                                                <li>DOT-compliant lighting and reflective markings for transport visibility.</li>
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

export default BHPlanos;
