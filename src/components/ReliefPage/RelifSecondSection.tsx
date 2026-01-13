import React, { useState, useRef, useEffect } from 'react';
import FeatureCards from './CardsComponent';
import gsap from "gsap"; // Importar GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importar ScrollTrigger
import img1 from "../../assets/images/Relief/TriasoOS6.webp";
import img2 from "../../assets/images/Relief/TriasoOS5.webp";

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger);

export default function RelifSecondSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLParagraphElement>(null);
    const text2Ref = useRef<HTMLParagraphElement>(null);

    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    // Lógica del Dropdown (existente)
    useEffect(() => {
        if (!contentRef.current) return;

        if (open) {
            contentRef.current.style.maxHeight =
                contentRef.current.scrollHeight + "px";
        } else {
            contentRef.current.style.maxHeight = "0px";
        }
    }, [open]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (text1Ref.current) {
                gsap.from(text1Ref.current, {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text1Ref.current,
                        start: "top 75%", 
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if (text2Ref.current) {
                gsap.from(text2Ref.current, {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text2Ref.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='bg-[#1e1e1e] space-y-5 md:space-y-10 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-8 text-white'>
                <div className='flex flex-col md:flex-row lg:flex-row justify-around items-center gap-5'>
                    <img src={img2.src} alt="Triaso OS" className='w-full md:w-1/2 lg:w-1/2' />
                    <p ref={text1Ref} className='text-2xl font-bold'>
                        For faster decision-making, better-founded, and completely independent of physical location.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row justify-around items-center pt-10'>
                    <p ref={text2Ref} className='text-2xl font-bold w-full lg:w-[35%] md:w-[35%] order-2 md:order-1 lg:order-1'>
                        With multiple access points through
                        the operation console,
                        remote computers, tablets, and phones.
                    </p>
                    <img src={img1.src} alt="Triaso OS" className='w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 lg:order-2' />
                </div>
            </div>

            <div>
                <div className='flex justify-center max-w-7xl mx-auto px-4 pt-10'>
                    <p className='text-white text-base font-medium w-full lg:w-[40%] md:w-[40%]'>
                        All information is also stored securely in the cloud, providing fast, multi-user access for operators, supervisors, and owners —from remote computers, tablets, and mobile phones.
                    </p>
                </div>
            </div>

            <div>
                <FeatureCards />
            </div>

            <div className='grid grid-cols-2 gap-4 max-w-7xl justify-around mx-auto px-4'>
                <div className='w-full'>
                <h1 className="text-3xl text-center font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                    Historical reports
                </h1>
                </div>

                <div className='w-full'>
                <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Delivered hot-mix reports
                </h1>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 text-white transition-transform duration-300"
                >
                    <span
                        className={`transform transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                            }`}
                    >
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ffffff"></path> </g></svg>
                    </span>
                </button>
                <div
                    ref={contentRef}
                    className="w-full overflow-hidden transition-[max-height] duration-500 ease-in-out"
                    style={{ maxHeight: "0px" }}
                >
                    <div className="w-full bg-gradient-to-b from-[#05256d] to-[#5a85e8] py-12">
                        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-[34rem]">
                            <ul className="text-white list-disc space-y-2 pl-6">
                                <li>Cumulative production.</li>
                                <li>Fuel consumption per ton produced.</li>
                                <li>Times when the plant is on and producing.</li>
                                <li>Averages for production and temperatures.</li>
                                <li>Minimum and maximum values.</li>
                                <li>Averages for asphalt and fuel consumption.</li>
                                <li>Rates of production change to detect theft.</li>
                                <li>Rates of change in asphalt and fuel levels.</li>
                                <li>Alarms and events that occurred.</li>
                            </ul>
                            <ul className="text-white list-disc space-y-2 pl-6">
                                <li>Historical reports for a selected period.</li>
                                <li>Truck number, driver, and license plate.</li>
                                <li>Start and end time of each load.</li>
                                <li>Tons loaded.</li>
                                <li>Average hot-mix temperature.</li>
                                <li>Recipe of the delivered hot-mix.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}