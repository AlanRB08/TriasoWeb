import React from "react";

interface Props {
  anual: number;
  meses: number;
  reventa: number;
  rentaMensual: number;
  onChange: (field: string, value: number) => void;
}

export default function RentabilidadInversionista({
  anual,
  meses,
  reventa,
  rentaMensual,
  onChange,
}: Props) {
  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-black">
        Rentabilidad para el inversionista
      </h3>

      <label className="flex flex-col gap-1 text-sm">
        Rendimiento anual (%)
        <input
          type="number"
          value={anual || "" }
          min="0"
          onChange={(e) => onChange("anual", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Periodo (meses)
        <input
          type="number"
          value={meses || ""}
          min="0"
          onChange={(e) => onChange("meses", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Valor de reventa (%)
        <input
          type="number"
          value={reventa || ""}
          min="0"
          onChange={(e) => onChange("reventa", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Renta mensual
        <input
          value={rentaMensual.toLocaleString("es-MX") + " pesos"}
          disabled
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
