import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import bagHouseMain from "../../assets/images/BagHouses/bagHouseMain.webp"

const BHOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);

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
          setValue5(0);

          setTimeout(() => {
            setValue(4);
            setValue1(99);
            setValue2(10);
            setValue4(5);
            setValue3(500);
            setValue5(90);
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
    <div ref={sectionRef} className="max-w-7xl px-8 mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-start justify-center gap-10 md:gap-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <p>-</p>
              <Odometer value={value5} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">thousand ACFM</p>
            </div>
            <p className="text-grisP">Capacity of baghouses</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p>.</p>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">%</p>
            </div>
            <p className="text-grisP">filtration capturing fine particles</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value3} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">tph</p>
            </div>
            <p className="text-grisP text-start w-full">
              Baghouses for asphalt plants ranges
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-3/5">
            <img src={bagHouseMain.src} alt="Baghouse Odometer" className="rounded-lg" />
          </div>
          <a
  href="#planosBagHouses"
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
      <div className="w-full py-10">
        <h2 className="text-2xl md:text-4xl text-grisT font-bold text-center">
          The baghouses are highly efficient at capturing fine particles,{" "}
          <span className="text-black">achieving up to 99.99% filtration</span>.
        </h2>
      </div>
    </div>
  );
};

export default BHOdometer;
