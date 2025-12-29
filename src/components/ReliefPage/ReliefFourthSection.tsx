import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../assets/images/Relief/TriasoOS3.webp";
import img2 from "../../assets/images/Relief/TriasoOS4.webp";

gsap.registerPlugin(ScrollTrigger);

export default function ReliefFourthSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !titleRef.current || !contentRef.current) return;

        gsap.set(sectionRef.current, {
            backgroundColor: "#f4f5f6",
        });

        gsap.set(titleRef.current, {
            color: "#000000",
            y: 0,
        });

        gsap.set(contentRef.current, {
            opacity: 0,
            y: 0,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=150%",
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.to(sectionRef.current, {
            backgroundColor: "#89adff",
            ease: "none",
        });

        tl.to(
            titleRef.current,
            {
                y: 45,
                color: "#000000",
                ease: "none",
            },
            0
        );

        tl.to(
            contentRef.current,
            {
                opacity: 1,
                y: 0,
                ease: "none",
            },
            0.4
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


    return (
        <div className="pt-5">
            <div className="max-w-7xl mx-auto space-y-5">
                <div className="flex justify-center items-center">
                    <h1 className="w-4/5 font-bold text-3xl text-center">
                        Plant operation depends on fewer operators,
                        without compromising control or production quality.
                    </h1>
                </div>

                <p className="text-[#393939] font-semibold text-lg text-center">
                    Rely less on specialized operators who see themselves as indispensable;
                    now any non-specialist operator can quickly learn to run your plant
                    and will be monitored.
                </p>
            </div>

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
                    className="flex-1 flex items-center justify-center"
                >
                    <div className=" max-w-7xl mx-auto text-center space-y-10">
                        <h1 className="text-3xl font-bold text-black">
                            The most modern artificial intelligence assistance
                        </h1>
                        <h2 className="text-xl font-semibold text-[#393939]">The most modern artificial intelligence assistance available for asphalt plant operation.</h2>
                        <img src={img1.src} alt="Triaso OS" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#89adff] to-[#f4f5f6]">
                <div className="max-w-7xl mx-auto flex justify-start px-8 ">
                    <div className="space-y-5">
                        <h1 className="uppercase font-bold text-black text-5xl">Ask Anything</h1>
                        <p ><span className="text-[#393939] font-semibold underline text-4xl">about your asphalt plant operation and  </span><span className="font-bold text-black text-5xl">receive <span className="font-bold text-black text-5xl underline">immediate</span></span></p>
                        <p className="text-[#393939] font-semibold text-4xl">practical assistance.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 pt-5 space-y-5">
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

            <div className="max-w-7xl mx-auto px-8 pt-5">
                <h1 className="font-bold text-3xl text-[#393939]">The control system uses three steps to alert the operator and protect the equipment:</h1>
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
                        <svg fill="#c91c1c" width="128" height="128" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number12</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM18.995 21.357c-0.826 0.797-1.854 1.194-3.086 1.194-1.166 0-2.133-0.335-2.9-1.005-0.769-0.67-1.214-1.545-1.337-2.627l2.391-0.289c0.076 0.607 0.281 1.071 0.616 1.393 0.333 0.321 0.738 0.482 1.213 0.482 0.51 0 0.939-0.194 1.289-0.582 0.348-0.387 0.522-0.909 0.522-1.566 0-0.621-0.167-1.115-0.501-1.479-0.335-0.364-0.742-0.545-1.223-0.545-0.317 0-0.695 0.062-1.136 0.184l0.272-1.997c0.668 0.018 1.178-0.127 1.529-0.434s0.526-0.715 0.526-1.224c0-0.433-0.128-0.777-0.385-1.035-0.258-0.257-0.599-0.386-1.025-0.386-0.421 0-0.779 0.146-1.077 0.438s-0.479 0.72-0.544 1.281l-2.281-0.386c0.158-0.782 0.397-1.407 0.717-1.875s0.765-0.835 1.336-1.103 1.212-0.401 1.921-0.401c1.213 0 2.186 0.387 2.918 1.161 0.604 0.633 0.905 1.348 0.905 2.145 0 1.131-0.619 2.034-1.858 2.708 0.739 0.158 1.33 0.513 1.772 1.063 0.443 0.551 0.664 1.215 0.664 1.994 0.001 1.132-0.412 2.095-1.238 2.891z"></path> </g></svg>
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
