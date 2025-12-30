import React from 'react'
import img1 from '../../assets/images/Relief/TriasoOS2.webp'
import { useState, useRef, useEffect } from 'react'
export default function ReliefThirdSection() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);
    const contentRef2 = useRef<HTMLDivElement>(null);
    const contentRef3 = useRef<HTMLDivElement>(null);

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
        if (!contentRef2.current) return;

        if (open2) {
            contentRef2.current.style.maxHeight =
                contentRef2.current.scrollHeight + "px";
        } else {
            contentRef2.current.style.maxHeight = "0px";
        }
    }, [open2]);
    useEffect(() => {
        if (!contentRef3.current) return;

        if (open3) {
            contentRef3.current.style.maxHeight =
                contentRef3.current.scrollHeight + "px";
        } else {
            contentRef3.current.style.maxHeight = "0px";
        }
    }, [open3]);
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto px-8 pt-5 space-y-5'>
                <div className='flex flex-col space-y-5 justify-center items-center'>
                    <h1 className='text-3xl font-bold bg-gradient-to-b from-[#123480] to-[#4f79d9] bg-clip-text text-transparent'>
                        Stop worrying about theft — your operations are protected.
                    </h1>
                    <h2 className='text-xl font-semibold text-[#393939]'>Data storage without internet connection up to 35 days</h2>
                    <p className='text-[#393939]'>This system not only streamlines operation and analysis; it also puts an end to the theft of mix, asphalt, and fuel thanks to full traceability of every data point.</p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-center font-bold text-3xl'>With this feature, paper tickets are a thing of the past: <br /> <span className='bg-gradient-to-r from-[#04030e ] to-[#2a28a1] bg-clip-text text-transparent'> all information is stored automatically and is available at any time.</span></h1>
                    <img src={img1.src} alt="Triaso OS" />
                </div>

                <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center'>
                    <div className='w-1/2'>
                        <p className='font-bold text-[#14427c] text-3xl'> Automatic unit conversion</p>
                        <p className='font-bold text-[#393939] text-2xl'>The interface is simple and flexible. It allows you to view the information in different systems and formats.</p>
                    </div>
                    <div>
                        <li className='text-xl'>Metric or imperial</li>
                        <ul className='list-disc pl-4'>
                            <li className='text-xl'>°C or °F</li>
                            <li className='text-xl'> Liters or gallons
                            </li>
                            <li className='text-xl'> Metric tons or short tons
                            </li>
                            <li className='text-xl'>etc.</li>
                        </ul>
                        <li className='text-xl'>Immediate results with no external calculations needed.</li>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <h1 className='font-bold text-3xl py-10'>Total control and automation of your asphalt plant</h1>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#010106] to-[#2f2db7]'>
                <div className='flex flex-col items-center justify-around md:flex-row lg:flex-row max-w-7xl mx-auto px-8 py-10'>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-3xl text-white'>Easy Mix Design Execution</h2>
                        <p className='font-bold text-lg text-[#d9d9d9] w-4/5'>Our automation systems are designed to simplify asphalt pavement mix production, from warm mixes to hot-mixes, without sacrificing control or accuracy.</p>
                    </div>
                    <div>
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
                    </div>
                </div>

                <div
                    ref={contentRef}
                    className="w-full max-w-7xl mx-auto px-8 lg:px-0 md:px-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                    style={{ maxHeight: "0px" }}
                >
                    <div className='text-[#d9d9d9] space-y-2 px-8 text-lg'>
                        <h2>The operator only needs to define the mix recipe:</h2>
                        <ul className='list-disc'>
                            <li>Target mix temperature</li>
                            <li>Production rate (TPH)</li>
                            <li>Mix design parameters:</li>
                        </ul>

                        <ul className='list-disc pl-4'>
                            <li>RAP percentage</li>
                            <li>Virgin aggregates fractions
                            </li>
                            <li>Binder content
                            </li>
                            <li>Additives</li>
                        </ul>
                        <p className='text-lg'>Once entered, the system automatically manages and coordinates the entire process, producing the asphalt pavement mix exactly as specified by adapting the drum mixer rotation speed, burner intensity, and material feed rates in real time.
                        </p>
                        <p className='text-lg pb-5'>This approach reduces manual intervention, minimizes operator dependency, and ensures consistent, repeatable results across a wide range of mix designs, including high-RAP applications.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-r from-[#040404] to-[#707070]'>
                <div className='flex flex-col items-center justify-between md:flex-row lg:flex-row max-w-7xl mx-auto px-8 py-10'>
                    <div>
                        <button
                            onClick={() => setOpen2(!open2)}
                            className="flex items-center gap-2 text-white transition-transform duration-300"
                        >
                            <span
                                className={`transform transition-transform duration-300 ${open2 ? "rotate-180" : "rotate-0"
                                    }`}
                            >
                                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ffffff"></path> </g></svg>
                            </span>
                        </button>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='font-bold text-3xl text-white text-end'>Mix Design Storage</h2>
                        <h2 className='font-bold text-xl text-white text-end'>Mix design storage for more than 10,000 recipes.</h2>
                        <p className='font-bold text-lg text-[#d9d9d9] text-end'>We do not rely on primitive mix design application methods.

                            Instead, we focus on modern, fast, and straightforward execution for asphalt pavement mix production.

                            Mix designs are easy to execute and manage for each of your customers</p>
                    </div>

                </div>

                <div
                    ref={contentRef2}
                    className="w-full max-w-7xl mx-auto px-8 lg:px-0 md:px-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                    style={{ maxHeight: "0px" }}
                >
                    <div className='text-[#d9d9d9] space-y-2 px-8 pb-5 text-lg'>
                        <ul className='list-disc'>
                            <li>Whether mix designs can be duplicated, edited, or versioned.</li>
                            <li>Whether each mix design includes automatic limits or validation rules.</li>
                            <li>Whether mix designs can be assigned to specific customers or projects.</li>
                            <li>Whether the system ensures consistent, repeatable results across operators and shifts.</li>
                            <li>Whether mix execution is operator-assisted or fully automatic.</li>
                            <li>Whether the system stores production history and performance data per mix design.</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-b from-[#751919] to-[#e02a2a]'>
                <div className='flex flex-col items-center justify-around md:flex-row lg:flex-row max-w-7xl mx-auto px-8 py-10'>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-3xl text-white'>Manual operation</h2>
                        <p className='font-bold text-lg text-white w-4/5'>Our asphalt plants allow manual operation at any time, ensuring continued production whenever operating conditions require it.</p>
                    </div>
                    <div>
                        <button
                            onClick={() => setOpen3(!open3)}
                            className="flex items-center gap-2 text-white transition-transform duration-300"
                        >
                            <span
                                className={`transform transition-transform duration-300 ${open3 ? "rotate-180" : "rotate-0"
                                    }`}
                            >
                                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ffffff"></path> </g></svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div
                    ref={contentRef3}
                    className="w-full max-w-7xl mx-auto px-8 lg:px-0 md:px-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                    style={{ maxHeight: "0px" }}
                >
                    <div className=' space-y-2 px-8 text-lg pb-5'>
                        <p className='text-white'>Unlike systems that restrict manual intervention, our asphalt plants are designed to provide full manual control in addition to advanced automation.</p>
                        <p className='font-bold text-white'>Keep your asphalt mix production running, <span className='underline text-white'>even if it needs an electronic replacement. </span></p>
                        <ul className='list-disc pl-5'>
                          <li className='text-white'>Designed to maintain production continuity under changing operating conditions.</li>  
                        </ul>
                        <p className='font-bold text-white'>Seamless switching between automatic and manual operation.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

