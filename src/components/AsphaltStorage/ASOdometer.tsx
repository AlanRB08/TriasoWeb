import React, { useEffect, useState, useRef } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import single from '../../assets/images/IntegralAsphalt/single.png';
import ASOdom from "../../assets/images/AsphaltStorage/ASOdo.png";

const ASOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reinicia valores antes de animar
          setValue(0);
          setValue1(0);
          setValue2(0);
          setValue4(0);
          setValue5(0);
          setValue6(0);

          setTimeout(() => {
            setValue(12);
            setValue1(30);
            setValue2(220);
            setValue4(1);
            setValue5(2); 
            setValue6(4);           
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
    <div ref={sectionRef} className="w-full px-8 lg:px-52 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-start justify-center gap-10 md:gap-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">thousand gallons</p>
            </div>
            <p className="text-black font-thin text-start w-full">Asphalt storage capacity</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">°C</p>
            </div>
            <p className="text-black font-thin text-start w-full">Maximum achievable temperature</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-7xl font-normal justify-start items-baseline w-full gap-2">
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <p>&</p>
              <Odometer value={value5} format="(,ddd)" duration={2000} />
              <p>.</p>
              <Odometer value={value6} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">million</p>
            </div>
            <p className="text-black font-thin text-start w-full">Btu/hr capacity</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={ASOdom.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASOdometer;
