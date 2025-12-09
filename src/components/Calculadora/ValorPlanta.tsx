import React from "react";

interface Props {
  dlls: number;
  paridad: number;
  pesos: number;
  onChange: (field: string, value: number) => void;
}

export default function ValorPlanta({ dlls, paridad, pesos, onChange }: Props) {
  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">Valor de la Planta de asfalto</h3>

      <label className="flex flex-col gap-1 text-sm">
        Valor del equipo (USD)
        <input
          type="number"
          value={dlls}
          onChange={(e) => onChange("dlls", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Paridad (MXN / USD)
        <input
          type="number"
          value={paridad}
          step="0.01"
          onChange={(e) => onChange("paridad", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Valor en pesos
        <input
          value={pesos.toLocaleString("es-MX")}
          disabled
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
