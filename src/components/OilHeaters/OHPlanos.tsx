import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OilHeaterVAB from "../../assets/images/OilHeaters/Planos/OilHeaterVABp.webp"
import BPCalderaVL from "../../assets/images/OilHeaters/Planos/BPCalderaVL.webp"
import BPCalderaVS1 from "../../assets/images/OilHeaters/Planos/BPCalderaVS1.webp"
import BPCalderaVT from "../../assets/images/OilHeaters/Planos/BPCalderaVT.webp"
import { useClipPathScrollTrigger } from "../lib/useClipPathScrollTrigger";

const toggleConfig = [
    {
        id: "2",
        dimensions: {
            width: 162,
            height: 236,
            length: 310,
        },
    },
    {
        id: "3",
        dimensions: {
            width: 309.4,
            height: 705.37,
            length: 2127.37,
        },
    }
];
gsap.registerPlugin(ScrollTrigger);

const OHPlanos = () => {
    const [activeTab, setActiveTab] = useState(3);
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
    const [unit, setUnit] = useState<"metric" | "imperial">("metric");
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
    const activeData = toggleConfig.find(
        (item) => item.id === activeTab.toString()
    );
    const toggleUnit = () => {
        const newUnit = unit === "metric" ? "imperial" : "metric";
        setUnit(newUnit);
    };


    const modelOptions = [
        { id: 2, label: "1,000,000 Btu’s/Hr" },
        { id: 3, label: "2,400,000 Btu’s/Hr" },
    ];

    useClipPathScrollTrigger({
        enabled: activeTab === 3,

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
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center bottom",
                        backgroundSize: "auto 100%",
                    }}
                ></div>
                <div
                    id="boxScroll"
                    ref={boxRef}
                    className="text-white font-bold
           flex items-center justify-center
            rounded will-change-transform transform-gpu
             z-20 w-[310px] h-[610px]"
                >
                    <img
                        src={BPCalderaVS1.src}
                        className="absolute top-0 left-0 w-[85%] h-full object-contain"
                        alt="Imagen de fondo"
                        style={{
                            display: activeTab === 3 ? "block" : "none",
                            opacity: activeTab === 3 ? 1 : 0,
                            visibility: activeTab === 3 ? "visible" : "hidden",
                        }}
                    />
                    <img
                        ref={imgRef}
                        src={OilHeaterVAB.src}
                        className="absolute top-0 left-0 w-[85%] h-full object-contain"
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
                <header
                    id="planosOil"
                    className="mt-10 text-white" ref={otroElemento}>
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
                            <div
                                className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${unit === "metric" ? "translate-x-full" : ""
                                    }`}
                            ></div>
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
                    <div className="w-full mt-20 mb-10" id="tabsSection" ref={nextSectionRef}>
                        {activeTab === 2 && (
                            <div className="flex flex-col " ref={containerRef}>
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                                    <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                                        <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Design & Operation
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
                                                <li>Industrial design with an aesthetic finish that enhances your company’s image.</li>
                                                <li>High-quality automotive paint, electrostatically applied and oven-cured.</li>
                                                <li>Excellent corrosion resistance, strong adhesion, and long-lasting color.</li>
                                                <li>Galvanized bolts for extended life, easy removal, and clean appearance.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Construction and Materials
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
                                                <li>Heavy-duty structure built with reinforced materials for continuous industrial use.</li>
                                                <li>
                                                    Internal and external welds fully X-ray inspected.
                                                </li>
                                                <li>
                                                    Cylinder made of 1/4” A36 steel plate.
                                                </li>
                                                <li>
                                                    Outer shell made of stainless steel sheet for corrosion resistance.
                                                </li>
                                                <li>
                                                    Thermally insulated with ceramic fiber to minimize heat loss.
                                                </li>
                                                <li>
                                                    Dual concentric internal coils for greater heat transfer efficiency.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Control and Operation
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
                                                    Two operation modes: automatic and manual.
                                                </li>
                                                <li>Siemens PLC control system.</li>
                                                <li>Digital thermometers with programmable set point.</li>
                                                <li>Burner operation controlled automatically by temperature.</li>
                                                <li>100% duty cycle for continuous performance.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                                        <img
                                            src={BPCalderaVS1.src}
                                            alt=""
                                            className="w-1/3 h-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                                        <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Safety and Maintenance
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
                                                <li >
                                                    Safety systems with automatic shutdown in case of failure.
                                                </li>
                                                <li >
                                                    Protective elements for both equipment and personnel, with proper warning indicators.
                                                </li>
                                                <li>
                                                    Diesel burner with sealed, easy-to-replace fuel filter system.
                                                </li>
                                                <li>Minimal maintenance required for long-term reliability.</li>
                                            </ul>
                                        </div>
                                        <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Electrical and Components and Capacity
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
                                                <li>
                                                    Siemens motors, controls, and electrical components.
                                                </li>
                                                <li>Heavy-duty polarized wiring, grounded for motor protection.</li>
                                                <li>Recirculation pump for thermal oil.</li>
                                                <li>Pumps:</li>
                                                <div className="pl-5">
                                                    <li>2” pump with 10 HP motor for the 1,000,000 Btu/hr model.</li>
                                                    <li>3” pump with 15 HP motor for the 2,400,000 Btu/hr model.</li>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Performance and Capacity
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
                                                    Thermal oil tank capacity: 300 liters.
                                                </li>
                                                <li>Efficient heat transfer through dual-coil design.</li>
                                                <li>Stable performance under continuous operation.</li>
                                                <li>Built for maximum durability, reliability, and long service life.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                                    <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                                        <div className="flex items-center justify-center w-[268px] h-[60px] self-center">
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
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={BPCalderaVT.src}
                                                alt=""
                                                className="max-w-[300px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-end min-w-[90px] h-[328px] pr-5 shrink-0">
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
                                    <div className="flex flex-col items-center justify-center shrink-0">
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
                                        <div className="w-full h-full flex justify-center items-center">
                                            <img
                                                src={BPCalderaVL.src}
                                                alt=""
                                                className="w-[530px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col  gap-4 text-white w-full lg:w-[35%] md:w-[35%] mt-10 md:mt-0">
                                    <div className="w-full lg:w-[60%] md:w-[60%] flex justify-between border-b border-b-white">
                                        <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                            Dimensions
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
                                    <div className={`flex flex-col items-center transition-all duration-500 md:mb-0 overflow-hidden  ${openSections.C3_3
                                        ? "max-h-96 opacity-1 mb-4"
                                        : "max-h-0 opacity-1"
                                        } lg:flex lg:flex-col lg:items-start md:flex md:items-center md:max-h-96 md:opacity-100`}>
                                        <div className="flex flex-row justify-between w-full lg:w-[637px] md:w-[640px]">
                                            <p>Length</p>
                                            <p className="text-white lg:w-full md:w-full text-center ">
                                                {unit === "metric"
                                                    ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                                                    } cm`
                                                    : `${(
                                                        (activeData?.dimensions.length ?? 0) * cmToFeet
                                                    ).toFixed(1)} ft`}
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between w-full">
                                            <p>Width</p>
                                            <p className="text-white lg:w-full md:w-full text-center ">
                                                {unit === "metric"
                                                    ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                                                    } cm`
                                                    : `${(
                                                        (activeData?.dimensions.width ?? 0) * cmToFeet
                                                    ).toFixed(1)} ft`}
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between w-full">
                                            <p>Height</p>
                                            <p className="text-white lg:w-full md:w-full  text-center ">
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
                        )}
                        {activeTab === 3 && (
                            <div className="flex flex-col" ref={containerRef}
                            >
                                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                                    <div
                                        className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1"
                                        id="column1"
                                        ref={columnGrid1}
                                    >
                                        <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Design & Operation
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
                                                <li>Industrial design with an aesthetic finish that enhances your company’s image.</li>
                                                <li>High-quality automotive paint, electrostatically applied and oven-cured.</li>
                                                <li>Excellent corrosion resistance, strong adhesion, and long-lasting color.</li>
                                                <li>Galvanized bolts for extended life, easy removal, and clean appearance.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Construction and Materials
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
                                                <li>Heavy-duty structure built with reinforced materials for continuous industrial use.</li>
                                                <li>
                                                    Internal and external welds fully X-ray inspected.
                                                </li>

                                                <li>
                                                    Cylinder made of 1/4” A36 steel plate.
                                                </li>
                                                <li>
                                                    Outer shell made of stainless steel sheet for corrosion resistance.
                                                </li>
                                                <li>Thermally insulated with ceramic fiber to minimize heat loss.
                                                </li>
                                                <li>Dual concentric internal coils for greater heat transfer efficiency.</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Control and Operation
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
                                                    Two operation modes: automatic and manual.
                                                </li>
                                                <li>Siemens PLC control system.</li>
                                                <li>Digital thermometers with programmable set point.</li>
                                                <li>Burner operation controlled automatically by temperature.</li>
                                                <li>
                                                    100% duty cycle for continuous performance.
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
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Safety and Maintenance
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
                                                <li>Safety systems with automatic shutdown in case of failure.</li>
                                                <li>Protective elements for both equipment and personnel, with proper warning indicators.</li>
                                                <li>Diesel burner with sealed, easy-to-replace fuel filter system.</li>
                                                <li>Minimal maintenance required for long-term reliability.</li>
                                            </ul>
                                        </div>
                                        <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Electrical and Components and Capacity
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
                                                <li>Siemens motors, controls, and electrical components.</li>
                                                <li>Heavy-duty polarized wiring, grounded for motor protection.</li>
                                                <li>Recirculation pump for thermal oil.</li>
                                                <li>Pumps:</li>
                                                <div className="pl-5">
                                                    <li>2” pump with 10 HP motor for the 1,000,000 Btu/hr model.</li>
                                                    <li>3” pump with 15 HP motor for the 2,400,000 Btu/hr model.</li>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                                            <div className="w-full flex justify-between border-b border-b-white">
                                                <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                                    Performance and Capacity
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
                                                    Thermal oil tank capacity: 300 liters.
                                                </li>
                                                <li>Efficient heat transfer through dual-coil design.</li>
                                                <li>Stable performance under continuous operation.</li>
                                                <li>
                                                    Built for maximum durability, reliability, and long service life.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                                    <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                                        <div className="flex items-center justify-center w-[268px] h-[60px] self-center">
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
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={BPCalderaVT.src}
                                                alt=""
                                                className="max-w-[300px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-end min-w-[90px] h-[328px] pr-5 shrink-0">
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
                                    <div className="flex flex-col items-center justify-center shrink-0">
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
                                        <div className="w-full h-full flex justify-center items-center">
                                            <img
                                                src={BPCalderaVL.src}
                                                alt=""
                                                className="w-[530px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col  gap-4 text-white w-full lg:w-[35%] md:w-[35%] mt-10 md:mt-0">
                                    <div className="w-full lg:w-[60%] md:w-[60%] flex justify-between border-b border-b-white">
                                        <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                                            Dimensions
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
                                    <div className={`flex flex-col items-center transition-all duration-500 md:mb-0 overflow-hidden  ${openSections.C3_3
                                        ? "max-h-96 opacity-1 mb-4"
                                        : "max-h-0 opacity-1"
                                        } lg:flex lg:flex-col lg:items-start md:flex md:items-center md:max-h-96 md:opacity-100`}>
                                        <div className="flex flex-row justify-between w-full lg:w-[637px] md:w-[640px]">
                                            <p>Length</p>
                                            <p className="text-white lg:w-full md:w-full text-center ">
                                                {unit === "metric"
                                                    ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                                                    } cm`
                                                    : `${(
                                                        (activeData?.dimensions.length ?? 0) * cmToFeet
                                                    ).toFixed(1)} ft`}
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between w-full">
                                            <p>Width</p>
                                            <p className="text-white lg:w-full md:w-full text-center ">
                                                {unit === "metric"
                                                    ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                                                    } cm`
                                                    : `${(
                                                        (activeData?.dimensions.width ?? 0) * cmToFeet
                                                    ).toFixed(1)} ft`}
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between w-full">
                                            <p>Height</p>
                                            <p className="text-white lg:w-full md:w-full  text-center ">
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OHPlanos;
