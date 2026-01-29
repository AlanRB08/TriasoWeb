import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import single from "../../assets/images/IntegralAsphalt/single.webp";

const OdometerSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reinicia valores antes de animar
          setValue(0);
          setValue1(0);
          setValue2(0);
          setValue3(0);
          setValue4(0);

          setTimeout(() => {
            setValue(10);
            setValue1(20);
            setValue2(1);
            setValue4(5);
            setValue3(3);
          }, 300); // Pequeño retraso para asegurar reinicio
        }
      },
      {
        threshold: 0.5, // cuando el 50% sea visible
      }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-8 mt-20">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-lg lg:text-4xl md:text-4xl">Everything in a single unit</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-center lg:items-start justify-center gap-10 md:gap-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-center items-center lg:justify-start lg:items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Tph</p>
            </div>
            <p className="text-grisP">Range of hot-mix production</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-center items-center lg:justify-start lg:items-baseline w-full">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">kW</p>
            </div>
            <p className="text-grisP">Three-phase electric generator</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-center items-center lg:justify-start lg:items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <h1>.</h1>
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value3} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">million BTU/hr</p>
            </div>
            <p className="text-grisP text-center lg:text-start w-full">
              Modulating burner capacity
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div>
            <img src={single.src} alt="Back of a Integral asphalt plant of 10 Tph" />
          </div>
          <a
  href="#planosIntegral"
  className="
    group relative inline-flex items-center justify-center
    px-4 py-2 rounded-xl
    border border-black
    text-black font-medium
    overflow-hidden

    transition-all duration-300 ease-out
    hover:text-white hover:-translate-y-0.5 hover:shadow-lg
  "
>
  <span
    className="
      absolute inset-0 bg-black
      translate-y-full
      transition-transform duration-300 ease-out
      group-hover:translate-y-0
    "
  />
  <span className="relative z-10">
    All Technical Details
  </span>
</a>
        </div>
      </div>
    </div>
  );
};

export default OdometerSection;
