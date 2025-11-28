import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import single from "../../assets/images/IntegralAsphalt/single.png";
import img1 from "../../assets/images/RapBins/RAProv4.png";

const RPOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value4, setValue4] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reinicia valores antes de animar
          setValue(0);
          setValue1(0);
          setValue2(0);
          setValue4(0);

          setTimeout(() => {
            setValue(10);
            setValue1(20);
            setValue2(18);
            setValue4(120);
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
    <div ref={sectionRef} className="w-full max-w-7xl px-8 mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-start justify-center gap-10 md:gap-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Tph</p>
            </div>
            <p className="text-grisP">RAP feeding capacity</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">M Tons</p>
            </div>
            <p className="text-start text-grisP">RAP capacity</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">inches</p>
            </div>
            <p className="text-grisP text-start w-full">Dosing belt</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={img1.src} alt="" />
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-center text-3xl md:text-5xl text-redBg font-bold">
          Your best business begins here
        </h1>
      </div>

      <div
        className="w-full mx-auto px-5 text-center mb-5"
      >
        <div className="mb-5">
          <p className="font-thin text-base lg:text-lg">
            For very 10% of RAP, <br />
            the cost of hot-mix production
          </p>
          <h2 className="font-bold text-lg lg:text-2xl">decreases 7%</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="
    px-6 py-2 
    border border-[#1c3d6e]
    text-[#1c3d6e]
    rounded-full 
    hover:bg-[#1c3d6e]/10
    transition-all
  "
        >
          Learn more about RAP
        </button>

      </div>
    </div>
  );
};

export default RPOdometer;
