import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OilHeaterVAB from "../../assets/images/OilHeaters/Planos/OilHeaterVABp.webp"
import BPCalderaVL from "../../assets/images/OilHeaters/Planos/BPCalderaVL.webp"
import BPCalderaVS from "../../assets/images/OilHeaters/Planos/BPCalderaVS.webp"
import BPCalderaVS1 from "../../assets/images/OilHeaters/Planos/BPCalderaVS1.webp"
import BPCalderaVT from "../../assets/images/OilHeaters/Planos/BPCalderaVT.webp"

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
                        <h1 className="text-white lg:text-xl text-lg text-center mb-10">
                            MODELS:
                        </h1>
                        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center gap-10 w-full max-w-5xl mx-auto px-2">
                            <button
                                onClick={() => (setActiveTab(2))}
                                className={`px-2 py-2 text-sm font-medium border rounded-full transition-all duration-300 w-full max-w-[150px] ${activeTab === 2
                                    ? "text-gray-900 bg-white border-white"
                                    : "text-white bg-transparent border-white"
                                    }`}
                            >
                                1,000,000 Btu’s/Hr
                            </button>
                            <button
                                onClick={() => (setActiveTab(3))}
                                className={`px-2 py-2 text-sm font-medium border transition-all duration-300 rounded-full w-full max-w-[150px] ${activeTab === 3
                                    ? "text-gray-900 bg-white border-white"
                                    : "text-white bg-transparent border-white"
                                    }`}
                            >
                                2,400,000 Btu’s/Hr
                            </button>


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
