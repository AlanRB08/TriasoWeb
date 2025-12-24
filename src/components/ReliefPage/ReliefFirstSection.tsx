import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Asegúrate de que las rutas sean correctas
import img1 from "../../assets/images/Relief/MainPhoto.webp";
import img2 from "../../assets/images/Relief/TriasoOS1.webp";

gsap.registerPlugin(ScrollTrigger);

export default function ReliefFirstSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const leftFeaturesRef = useRef<HTMLDivElement>(null);
  const rightFeaturesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !imageRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          end: "+=150%", 
          scrub: 1, 
          pin: true, 
        },
      });

      tl.fromTo(
        sectionRef.current,
        { backgroundPosition: "50% 0%" },
        { backgroundPosition: "50% 100%", ease: "none" },
        0
      );

      tl.fromTo(
        imageRef.current,
        { y: 100, opacity: 0, scale: 0.9 }, 
        { y: 0, opacity: 1, scale: 1, ease: "power2.out" },
        0
      );

      const features = [
        ...leftFeaturesRef.current!.children, 
        ...rightFeaturesRef.current!.children
      ];
      
      tl.fromTo(
        features,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, ease: "power2.out" },
        0.15 
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-24">
      <div className="max-w-7xl px-8 mx-auto space-y-6 flex flex-col justify-center items-center pb-12 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Asphalt Plant Control & Automation
        </h1>
        <h2 className="text-2xl font-semibold text-[#393939]">
          The Ultimate Automation Control & Supervision System
        </h2>
        <p className="text-xl font-semibold text-redBg ">
          A practical and efficient way to achieve total control of your asphalt plant’s operations.
        </p>
        
        <div className="w-full py-4">
          <img src={img1.src} alt="Control System Dashboard" className="w-full h-auto object-cover rounded-lg" />
        </div>

        <p className="font-semibold text-lg text-[#393939]">
          Offering a practical and efficient way to manage industrial equipment operations. 
          With advanced monitoring and automation, it simplifies the control of key processes.
        </p>
      </div>
      <section
        ref={sectionRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden -mt-24"
        style={{
          background: "linear-gradient(to bottom, #f2f4f5 0%, #f2f4f5 40%, #111111 65%, #111111 100%)",
          backgroundSize: "100% 250%",
        }}
      >
        <div className=" text-white w-full px-4 mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-4 z-10 pt-20">
  
          <div ref={leftFeaturesRef} className="flex flex-col space-y-8 items-center lg:items-end order-2 lg:order-1">
             <p>Cloud Historical Reports</p>
             <p>Security and Reliability</p>
             <p>Automatic unit conversion</p>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <img
              ref={imageRef}
              src={img2.src}
              alt="Triaso App Interface"
              className="w-full h-full z-20 object-cover"
              style={{ filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.6))" }}
            />
          </div>

          <div ref={rightFeaturesRef} className="flex flex-col space-y-8 items-center lg:items-start order-3">
            <p>Fewer Operators Full Control</p>
            <p>Unique Login for Each Operator on Shift</p>
            <p>Remote Cloud Monitoring</p>
          </div>

        </div>
      </section>
    </div>
  );
}