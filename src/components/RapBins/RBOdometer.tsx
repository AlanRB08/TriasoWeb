import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import img1 from "../../assets/images/RapBins/RAProv4.webp";

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
            setValue(14);
            setValue1(21);
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
        <div className="flex flex-col items-center lg:items-start justify-center gap-10 md:gap-20">
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
            <p className="text-grisP text-center lg:text-start w-full">Dosing belt</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-4/6 pt-10 lg:pt-0 md:pt-0">
            <img src={img1.src} alt="Back of the RAP (Reclaimed Asphalt Pavement) Bin Unit"  />
          </div>
          <a
            href="#planosRapBins"
            className="group relative inline-flex items-center justify-center px-4 py-2 rounded-xl border border-black text-black font-medium overflow-hidden transition-all duration-300 ease-out hover:text-white hover:-translate-y-0.5 hover:shadow-lg
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
      <div className="my-20">
        <h1 className="text-center text-3xl md:text-5xl text-redBg font-bold">
          Your best business begins here
        </h1>
      </div>

      <div
        className="w-full mx-auto px-5 text-center mb-5"
      >
        <div className="mb-5">
          <p className="font-thin text-lg lg:text-xl md:text-xl">
            For very 10% of RAP, <br />
            the cost of hot-mix production
          </p>
          <h2 className="font-bold text-2xl lg:text-3xl">decreases 7%</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="/RapRecycled"
          className="hover:bg-blueMain hover:text-white text-blueMain mt-5 text-xs md:text-sm font-normal border-2 border-[#14427c] rounded-full py-2 px-6 transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-lg"
        >
          Learn more about RAP
        </a>

      </div>
    </div>
  );
};

export default RPOdometer;
