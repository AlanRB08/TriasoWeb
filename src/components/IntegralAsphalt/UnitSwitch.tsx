<<<<<<< HEAD
"use client";

import React, { useState } from "react";
=======
'use client';

import React, { useState } from 'react';
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff

export default function UnitSwitch({
  onChange,
}: {
<<<<<<< HEAD
  onChange?: (value: "imperial" | "metric") => void;
}) {
  const [unit, setUnit] = useState<"imperial" | "metric">("imperial");

  const toggleUnit = () => {
    const newUnit = unit === "imperial" ? "metric" : "imperial";
=======
  onChange?: (value: 'imperial' | 'metric') => void;
}) {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');

  const toggleUnit = () => {
    const newUnit = unit === 'imperial' ? 'metric' : 'imperial';
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
    setUnit(newUnit);
    onChange?.(newUnit);
  };

  return (
    <div
      onClick={toggleUnit}
      className="relative w-48 h-10 rounded-full border border-white cursor-pointer select-none"
    >
      {/* Fondo deslizante */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${
<<<<<<< HEAD
          unit === "metric" ? "translate-x-full" : ""
=======
          unit === 'metric' ? 'translate-x-full' : ''
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
        }`}
      ></div>

      {/* Texto sobrepuesto */}
      <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-bold">
<<<<<<< HEAD
        <span className={unit === "imperial" ? "text-black" : "text-white"}>
          IMPERIAL
        </span>
        <span className={unit === "metric" ? "text-black" : "text-white"}>
=======
        <span className={unit === 'imperial' ? 'text-black' : 'text-white'}>
          IMPERIAL
        </span>
        <span className={unit === 'metric' ? 'text-black' : 'text-white'}>
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
          METRIC
        </span>
      </div>
    </div>
  );
}
