import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgFront from "../../assets/images/BagHouses/BagHousesVS2.webp";
import bgPlanos from "../../assets/images/BagHouses/bagHousesVS2Planos.webp";
import BpBagHousesVL from "../../assets/images/BagHouses/BpBagHousesVL.webp";
import BpBagHousesVT2 from "../../assets/images/BagHouses/BpBagHousesVT2.webp";
import { useClipPathScrollTrigger } from "../../components/lib/useClipPathScrollTrigger.tsx"

gsap.registerPlugin(ScrollTrigger);
const toggleConfig = [
    {
        id: "12",
        dimensions: {
            width: 162,
            height: 236,
            length: 310,
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
    const modelOptions = [
        { id: 1, label: "80-110 Tph" },
        { id: 2, label: "110-140 Tph" },
        { id: 3, label: "140-180 Tph" },
        { id: 4, label: "200-250 Tph" },
        { id: 5, label: "300-360 Tph" },
        { id: 6, label: "400-480 Tph" },
        { id: 7, label: "500-600 Tph" },
    ];

    useClipPathScrollTrigger({
        enabled: activeTab === 1,

        boxRef,
        nextSectionRef,
        clipTargetRef,
        imgRef,
        otroElementoRef: otroElemento,
        optionsRef,
        columnGrid1Ref: columnGrid1,
        columnGrid2Ref: columnGrid2,
        containerRef,
    });

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="h-[70vh] relative flex items-center justify-center bg-bgMain w-full">
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
                className="bg-[url('/fondopatron.webp')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
            >
                <header id="planosBagHouses" className="mt-10 text-white" ref={otroElemento}>
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
                        {/* móvil */}
                        <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto">
                            <label className="text-white block text-center">
                                MODELS:
                            </label>
                            <div className="relative">
                                <select
                                    value={activeTab}
                                    onChange={(e) => setActiveTab(Number(e.target.value))}
                                    className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
                 appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                                >
                                    {modelOptions.map((option) => (
                                        <option key={option.id} value={option.id}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                    <svg
                                        className="w-4 h-4 text-gray-700"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* desktop */}
                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:pb-5">
                            <label className="text-white block text-center">
                                MODELS:
                            </label>
                        </div>
                        <div className="hidden md:flex flex-wrap justify-center gap-5  mx-auto px-2">
                            {modelOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => setActiveTab(option.id)}
                                    className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 w-[150px]
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
                            <div
                                className="flex flex-col items-center justify-center"
                                ref={containerRef}
                            >
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                                    <div
                                        className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}>

                                        <div className="w-full flex flex-col gap-4 text-white col-span-1">
                                            <div className="w-full flex border-b border-b-white">
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
                                            <div className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}>
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                <div className="w-full gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
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
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
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
                        {activeTab === 2 && (
                            <div
                                className="flex flex-col items-center justify-center"
                                ref={containerRef}
                            >
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                                    <div
                                        className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}>

                                        <div className="w-full flex flex-col gap-4 text-white col-span-1">
                                            <div className="w-full flex border-b border-b-white">
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
                                            <div className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}>
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                <div className="w-full gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
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
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
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
                        {activeTab === 3 && (
                            <div
                                className="flex flex-col items-center justify-center"
                                ref={containerRef}
                            >
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                                    <div
                                        className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}>

                                        <div className="w-full flex flex-col gap-4 text-white col-span-1">
                                            <div className="w-full flex border-b border-b-white">
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
                                            <div className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}>
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                <div className="w-full gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
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
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
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
                        {activeTab === 4 && (
                            <div
                                className="flex flex-col items-center justify-center"
                                ref={containerRef}
                            >
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                                    <div
                                        className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}>

                                        <div className="w-full flex flex-col gap-4 text-white col-span-1">
                                            <div className="w-full flex border-b border-b-white">
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
                                            <div className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}>
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                <div className="w-full gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
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
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
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
                        {activeTab === 5 && (
                            <div
                                className="flex flex-col items-center justify-center"
                                ref={containerRef}
                            >
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                                    <div
                                        className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}>

                                        <div className="w-full flex flex-col gap-4 text-white col-span-1">
                                            <div className="w-full flex border-b border-b-white">
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
                                            <div className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}>
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                <div className="w-full gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
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
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
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
                        {activeTab === 6 && (
                            <div
                                className="flex flex-col items-center justify-center"
                                ref={containerRef}
                            >
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                                    <div
                                        className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}>

                                        <div className="w-full flex flex-col gap-4 text-white col-span-1">
                                            <div className="w-full flex border-b border-b-white">
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
                                            <div className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}>
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                <div className="w-full gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
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
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
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
                        {activeTab === 7 && (
                            <div
                                className="flex flex-col items-center justify-center"
                                ref={containerRef}
                            >
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                                    <div
                                        className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}>

                                        <div className="w-full flex flex-col gap-4 text-white col-span-1">
                                            <div className="w-full flex border-b border-b-white">
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
                                            <div className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}>
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                                <div className="flex justify-between">
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
                                <div className="w-full gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-start mt-0 md:mt-10">
                                    <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
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
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                                                    ? "max-h-96 opacity-1 mb-4"
                                                    : "max-h-0 opacity-0 mt-4"
                                                    } md:max-h-full md:opacity-100 md:block`}
                                            >
                                                <ul
                                                    className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
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
                                        <div className="w-[44vh] lg:w-full md:w-full flex justify-between border-b border-b-white">
                                            <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                                                PORTABILITY
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
                                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                                                ? "max-h-96 opacity-1 mb-4"
                                                : "max-h-0 opacity-0"
                                                } md:max-h-full md:opacity-100 md:block`}
                                        >
                                            <ul
                                                className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
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
                    <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                        {/* Medidas imagen izquierda ancho  */}
                        <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                            <div className="flex items-center justify-center w-[290px] h-[60px] self-center">
                                <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                                    <div className="bg-white h-[1px] w-full relative">
                                        <div className="absolute left-0 top-1/2 transform -translate-y-64">
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
                            <div className="w-[372px] h-[350px] flex items-center justify-center">
                                <img
                                    src={BpBagHousesVT2.src}
                                    alt=""
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>
                        {/* Medidas alto */}
                        <div className="flex flex-col items-center justify-end min-w-[90px] h-[350px] shrink-0 pr-5">
                            <div className="border-dotted border-t border-t-white w-full h-full flex items-center justify-center">
                                <div className="bg-white w-[1px] h-full relative">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                                        <svg
                                            width="8"
                                            height="8"
                                            viewBox="6 5 12 10"
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
                        {/* Medidas largo imagen derecha */}
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
                            <div className="h-[350px] w-[744px]">
                                <img
                                    src={BpBagHousesVL.src}
                                    alt=""
                                    className="h-full w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BHPlanos;
