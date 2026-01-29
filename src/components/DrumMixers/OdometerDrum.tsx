import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import odoImg from "../../assets/images/DrumMixers/Low/odometerImgLow.webp";
import "odometer/themes/odometer-theme-default.css";

const OdometerDrum = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value6, setValue6] = useState(0);

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
          setValue6(0);

          setTimeout(() => {
            setValue(25);
            setValue6(500);
            setValue1(50);
            setValue2(7);
            setValue4(5);
            setValue3(150);
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
    <div ref={sectionRef} className="max-w-7xl mx-auto px-8 lg:mt-56 lg:mb-56 md:mt-56 md:mb-56">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-center lg:items-start justify-center gap-10 md:gap-20">
          <div className="flex flex-col items-center justify-center lg:items-start">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center items-center lg:justify-start lg:items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value6} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Tph</p>
            </div>
            <p className="text-grisP text-center lg:text-start">Range of hot-mix production</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center items-center lg:justify-start lg:items-baseline w-full">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">%</p>
            </div>
            <p className="text-grisP text-center lg:text-start">
              RAP (Recycled Asphalt Pavement) Incorporation
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center items-center lg:justify-start lg:items-baseline w-full gap-1 lg:gap-0">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <h1>.</h1>
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value3} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal lg:ml-3">million BTU/hr</p>
            </div>
            <p className="text-grisP text-center lg:text-start w-full">
              Modulating burner capacity
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={odoImg.src} alt="Odometer Drum" className="rounded-2xl" />
          </div>
          <a
  href="#planosDrumMixers"
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

export default OdometerDrum;
