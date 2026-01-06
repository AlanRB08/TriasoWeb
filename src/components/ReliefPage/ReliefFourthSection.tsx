import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../assets/images/Relief/TriasoOS2.webp";
import img2 from "../../assets/images/Relief/TriasoOS4.webp";
import img3 from "../../assets/images/Relief/TriasoOS3.webp";

gsap.registerPlugin(ScrollTrigger);

export default function ReliefFourthSection() {
    //animación 
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    //dropdowns
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);




    //animación
    useEffect(() => {
        if (!sectionRef.current || !titleRef.current || !contentRef.current) return
        if (window.innerWidth < 768) return;

        const ctx = gsap.context(() => {
            gsap.set(sectionRef.current, {
                backgroundColor: "#f4f5f6",
            });

            gsap.set(titleRef.current, {
                y: 50,
                color: "#000",
            });

            gsap.set(contentRef.current, {
                opacity: 0,
                y: 40,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=120%",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            })
                .to(sectionRef.current, {
                    backgroundColor: "#89adff",
                    ease: "none",
                })
                .to(
                    titleRef.current,
                    {
                        y: 60,
                        ease: "none",
                    },
                    0
                )
                .to(
                    contentRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        ease: "none",
                    },
                    0.3
                );
        }, sectionRef);


        const handleLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
            ctx.revert();
        }
    }, []);


    useEffect(() => {
        dropdownRefs.current.forEach((el, index) => {
            if (!el) return;
            if (openIndex === index) {
                el.style.maxHeight = el.scrollHeight + "px";
            } else {
                el.style.maxHeight = "0px";
            }
        });
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => clearTimeout(timer);
    }, [openIndex]);


    return (
        <div className="pt-5">
            {/* dropdowns */}
            <div>
                <div className='max-w-7xl mx-auto px-8 pt-5 space-y-5'>
                    <div className='flex flex-col space-y-5 justify-center items-center'>
                        <h1 className='text-4xl font-bold bg-gradient-to-b from-[#123480] to-[#4f79d9] bg-clip-text text-transparent'>
                            Stop worrying about theft — your operations are protected.
                        </h1>
                        <h2 className='text-xl font-semibold text-[#393939]'>Data storage without internet connection up to 35 days</h2>
                        <p className='text-[#393939] text-xl w-1/2 pb-10'>This system not only streamlines operation and analysis; it also puts an end to the theft of mix, asphalt, and fuel thanks to full traceability of every data point.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center space-y-10'>
                        <h1 className='text-center font-bold text-4xl bg-gradient-to-r from-[#030303] to-[#6f6f6f] bg-clip-text text-transparent'>With this feature, paper tickets are a thing of the past: <br /> <span className='font-medium text-4xl bg-gradient-to-r from-[#04030e] to-[#2a28a1] bg-clip-text text-transparent'> all information is stored automatically and is available at any time.</span></h1>
                        <img src={img1.src} alt="Triaso OS" className="w-full lg:w-4/5 md:w-4/5" />
                    </div>

                    <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-[9rem]'>
                        <div className='w-[40%] space-y-10'>
                            <p className='font-bold text-[#14427c] text-3xl'> Automatic unit conversion</p>
                            <p className='font-bold text-[#393939] text-2xl'>The interface is simple and flexible. It allows you to view the information in different systems and formats.</p>
                        </div>
                        <div className="text-[#393939]">
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
                        <h1 className='font-bold text-[#393939] text-[3rem] py-10'>Total control and automation of your asphalt plant</h1>
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
                                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                                className="flex items-center gap-2 text-white transition-transform duration-300"
                            >
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.0303 13.0303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L11.25 14.1893V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.9697 11.9697C15.2626 11.6768 15.7374 11.6768 16.0303 11.9697C16.3232 12.2626 16.3232 12.7374 16.0303 13.0303Z" fill="#ffffff"></path></svg>

                                </span>
                            </button>
                        </div>
                    </div>



                    <div
                        ref={(el) => {
                            dropdownRefs.current[0] = el;
                        }}
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
                        <div className=" flex items-center">
                            <button
                                onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                                className="flex items-center gap-2 text-white transition-transform duration-300"
                            >
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.0303 13.0303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L11.25 14.1893V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.9697 11.9697C15.2626 11.6768 15.7374 11.6768 16.0303 11.9697C16.3232 12.2626 16.3232 12.7374 16.0303 13.0303Z" fill="#ffffff"></path></svg>

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
                        ref={(el) => {
                            dropdownRefs.current[1] = el;
                        }}
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
                                onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                                className="flex items-center gap-2 text-white transition-transform duration-300"
                            >
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.0303 13.0303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L11.25 14.1893V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.9697 11.9697C15.2626 11.6768 15.7374 11.6768 16.0303 11.9697C16.3232 12.2626 16.3232 12.7374 16.0303 13.0303Z" fill="#ffffff"></path></svg>
                                    
                                </span>
                            </button>
                        </div>
                    </div>

                    <div
                        ref={(el) => {
                            dropdownRefs.current[2] = el;
                        }}
                        className="w-full max-w-7xl mx-auto px-8 lg:px-0 md:px-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        style={{ maxHeight: "0px" }}
                    >
                        <div className='pl-0 lg:pl-12 md:pl-12 space-y-5 px-8 text-lg pb-5'>
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

            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center space-y-5 pt-5">
                <div className="flex justify-center items-center">
                    <h1 className=" font-bold text-4xl text-center">
                        Plant operation depends on fewer operators,
                        without compromising control or production quality.
                    </h1>
                </div>

                <p className="text-[#393939] font-semibold text-xl w-4/5 text-center">
                    Rely less on specialized operators who see themselves as indispensable;
                    now any non-specialist operator can quickly learn to run your plant
                    and will be monitored.
                </p>
            </div>

            {/* sección animación */}
            <div
                ref={sectionRef}
                className="relative min-h-screen flex flex-col px-6 py-10"
            >
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                >
                    Triaso Relief Assist
                </h1>
                <div
                    ref={contentRef}
                    className="flex-1 flex items-center justify-center pt-10"
                >
                    <div className=" max-w-7xl mx-auto text-center space-y-10">
                        <h1 className="text-3xl font-bold text-black">
                            The most modern artificial intelligence assistance
                        </h1>
                        <h2 className="text-xl font-semibold text-[#393939]">The most modern artificial intelligence assistance available for asphalt plant operation.</h2>
                        <img src={img3.src} alt="Triaso OS" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#89adff] to-[#f4f5f6]">
                <div className="max-w-7xl mx-auto flex justify-start px-8 ">
                    <div className="space-y-10">
                        <h1 className="uppercase font-bold text-black text-5xl">Ask Anything</h1>
                        <p ><span className="text-[#393939] font-semibold underline text-4xl">about your asphalt plant operation and  </span><span className="font-bold text-black text-5xl">receive <span className="font-bold text-black text-5xl underline">immediate</span></span></p>
                        <p className="text-[#393939] font-semibold text-4xl">practical assistance.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 pt-10 space-y-5">
                <h2 className="font-semibold text-xl text-[#393939]">Included in all our asphalt plants, this system provides fast, modern assistance for plant operation, allowing operators to obtain clear guidance by simply typing their questions.</h2>
                <div className="flex flex-col justify-center items-center">
                    <ul className="list-disc text-[#14427c]">
                        <li>Immediately identify the location of equipment faults.</li>
                        <li>Pinpoint the affected system or component automatically.</li>
                        <li>Explain the cause of alarms and operating conditions.</li>
                        <li>Guide operators through corrective actions step by step.</li>
                        <li>Provide operational recommendations based on plant status.</li>
                        <li>Assist with mix design execution and production setup.</li>
                        <li>Support manual and automatic operation decisions.</li>
                        <li>Help reduce downtime by accelerating troubleshooting.</li>
                        <li>Provide clear explanations of plant behavior and alerts.</li>
                        <li>Assist operators without requiring deep system expertise.</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-8 pt-14">
                <h1 className="font-bold text-3xl text-center text-[#393939] w-4/6">The control system uses three steps to alert the operator and protect the equipment:</h1>
                <div className="flex flex-col justify-center items-center space-y-5">

                    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
                        <svg fill="#ca1c1c" width="128" height="128" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number10</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM17.757 22.536h-2.469v-9.305c-0.901 0.841-1.964 1.463-3.188 1.867v-2.234c0.644-0.211 1.344-0.612 2.099-1.202s1.273-1.278 1.555-2.064h2.003v12.938z"></path> </g></svg>
                        <div className="w-4/5">
                            <h2 className="font-semibold text-xl text-[#393939]">First action</h2>
                            <p className="font-thin text-lg text-[#393939]">The operator is alerted when a parameter starts to drift out of the ideal range.</p>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
                        <div className="w-4/6">
                            <h2 className="font-semibold text-xl text-[#393939]">Second action</h2>
                            <p className="font-thin text-lg text-[#393939]">The operator can correct it manually or let the Artificial Intelligence adjust it automatically.</p>
                        </div>
                        <svg fill="#c91c1c" width="128" height="128" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number11</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM20.342 20.426v2.297h-8.656c0.093-0.867 0.374-1.688 0.843-2.465 0.468-0.776 1.393-1.807 2.774-3.090 1.111-1.037 1.793-1.74 2.045-2.109 0.34-0.51 0.51-1.014 0.51-1.512 0-0.551-0.147-0.975-0.441-1.271s-0.7-0.444-1.219-0.444c-0.512 0-0.92 0.156-1.223 0.467s-0.478 0.827-0.523 1.549l-2.469-0.247c0.146-1.359 0.605-2.335 1.378-2.928s1.739-0.888 2.898-0.888c1.27 0 2.268 0.343 2.994 1.028s1.089 1.538 1.089 2.557c0 0.58-0.104 1.132-0.312 1.656s-0.537 1.074-0.988 1.647c-0.299 0.38-0.839 0.929-1.621 1.644-0.781 0.714-1.276 1.188-1.484 1.422s-0.376 0.463-0.505 0.686h4.91z"></path> </g></svg>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
                        <svg fill="#c91c1c" width="128" height="128" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="mr-5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number12</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM18.995 21.357c-0.826 0.797-1.854 1.194-3.086 1.194-1.166 0-2.133-0.335-2.9-1.005-0.769-0.67-1.214-1.545-1.337-2.627l2.391-0.289c0.076 0.607 0.281 1.071 0.616 1.393 0.333 0.321 0.738 0.482 1.213 0.482 0.51 0 0.939-0.194 1.289-0.582 0.348-0.387 0.522-0.909 0.522-1.566 0-0.621-0.167-1.115-0.501-1.479-0.335-0.364-0.742-0.545-1.223-0.545-0.317 0-0.695 0.062-1.136 0.184l0.272-1.997c0.668 0.018 1.178-0.127 1.529-0.434s0.526-0.715 0.526-1.224c0-0.433-0.128-0.777-0.385-1.035-0.258-0.257-0.599-0.386-1.025-0.386-0.421 0-0.779 0.146-1.077 0.438s-0.479 0.72-0.544 1.281l-2.281-0.386c0.158-0.782 0.397-1.407 0.717-1.875s0.765-0.835 1.336-1.103 1.212-0.401 1.921-0.401c1.213 0 2.186 0.387 2.918 1.161 0.604 0.633 0.905 1.348 0.905 2.145 0 1.131-0.619 2.034-1.858 2.708 0.739 0.158 1.33 0.513 1.772 1.063 0.443 0.551 0.664 1.215 0.664 1.994 0.001 1.132-0.412 2.095-1.238 2.891z"></path> </g></svg>
                        <div className="w-1/2">
                            <h2 className="font-semibold text-xl text-[#393939]">Third action</h2>
                            <p className="font-thin text-lg text-[#393939]">If the issue isn’t resolved and values stay out of range, the system automatically shuts down the necessary components to protect the equipment.</p>
                        </div>
                    </div>

                    <div>
                        <img src={img2.src} alt="Triaso OS" />
                    </div>

                </div>
            </div>

        </div>
    );
}
