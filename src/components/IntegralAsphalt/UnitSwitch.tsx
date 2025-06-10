'use client';

import React, { useState } from 'react';

export default function UnitSwitch({
  onChange,
}: {
  onChange?: (value: 'imperial' | 'metric') => void;
}) {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');

  const toggleUnit = () => {
    const newUnit = unit === 'imperial' ? 'metric' : 'imperial';
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
          unit === 'metric' ? 'translate-x-full' : ''
        }`}
      ></div>

      {/* Texto sobrepuesto */}
      <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-bold">
        <span className={unit === 'imperial' ? 'text-black' : 'text-white'}>
          IMPERIAL
        </span>
        <span className={unit === 'metric' ? 'text-black' : 'text-white'}>
          METRIC
        </span>
      </div>
    </div>
  );
}
