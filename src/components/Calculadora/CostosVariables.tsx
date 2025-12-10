import React from "react";
import { formatCurrency, formatNumber } from "../../components/lib/utils";

interface Props {
  state: any;
  onChange: (field: string, value: number) => void;
}

export default function CostosVariables({ state, onChange }: Props) {
  const {
    horasxmes,
    rap,
    agrv,
    tav,
    arap,
    trap,
    asfvir,
    asfpesosxlitro,
    tasfvir,
    rejuve,
    rejupesosxlitro,
    trejuve,
    combustible,
    combpesosxlitro,
    tcombustible,
    electri,
    elecpesosxlitro,
    electon,
    telec,
    cosvariables,
    tcVariables,
  } = state;

  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-black">
        Rentabilidad para el contratista — Costos variables
      </h3>

      {/* Horas */}
      <label className="flex flex-col gap-1 text-sm">
        Horas de trabajo por mes
        <input
          type="number"
          value={horasxmes || ""}
          min="0"
          onChange={(e) => onChange("horasxmes", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      {/* RAP */}
      <label className="flex flex-col gap-1 text-sm">
        % RAP a incorporar
        <input
          type="number"
          value={rap || ""}
          min="0"
          onChange={(e) => onChange("rap", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      {/* Materiales */}
      <label className="flex flex-col gap-1 text-sm">
        Agregados vírgenes (pesos/M3)
        <input
          type="number"
          value={agrv || ""}
          min="0"
          onChange={(e) => onChange("agrv", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          disabled
          value={formatCurrency(tav) + " pesos/M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Agregados RAP (pesos/M3)
        <input
          type="number"
          value={arap || ""}
          min="0"
          onChange={(e) => onChange("arap", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          disabled
          value={formatCurrency(trap) + " pesos/M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Asfalto */}
      <label className="flex flex-col gap-1 text-sm">
        Asfalto vírgen (lts/M3)
        <input
          type="number"
          value={asfvir || ""}
          min="0"
          onChange={(e) => onChange("asfvir", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        A pesos/lt que se aplica al 95% de la mezcla
        <input
          type="number"
          value={asfpesosxlitro || ""}
          min="0"
          onChange={(e) => onChange("asfpesosxlitro", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          disabled
          value={tasfvir + " pesos/M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Rejuvenecedor */}
      <label className="flex flex-col gap-1 text-sm">
        Rejuvenecedor (lts/M3)
        <input
          type="number"
          value={rejuve || ""}
          min="0"
          onChange={(e) => onChange("rejuve", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        Precio (pesos/lt) que se aplica al 5% de la mezcla 
        <input
          type="number"
          value={rejupesosxlitro || ""}
          min="0"
          onChange={(e) => onChange("rejupesosxlitro", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          disabled
          value={trejuve + " pesos/M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Combustible */}
      <label className="flex flex-col gap-1 text-sm">
        Combustible (lts/M3)
        <input
          type="number"
          value={combustible || ""}
          min="0"
          onChange={(e) => onChange("combustible", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        Precio (pesos/lt)
        <input
          type="number"
          value={combpesosxlitro || ""}
          min="0"
          onChange={(e) => onChange("combpesosxlitro", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          disabled
          value={tcombustible + " pesos/M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Electricidad */}
      <label className="flex flex-col gap-1 text-sm">
        Electricidad (Kw/Hr)
        <input
          type="number"
          value={electri || ""}
          min="0"
          onChange={(e) => onChange("electri", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />

         A un precio (pesos/Kw)
        <input
          type="number"
          value={elecpesosxlitro || ""}
          min="0"
          onChange={(e) =>
            onChange("elecpesosxlitro", Number(e.target.value))
          }
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        Entre Ton/Hr (73 M3/Hr)
        <input
          type="number"
          value={electon || ""}
          min="0"
          onChange={(e) => onChange("electon", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          disabled
          value={telec +" pesos/M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Totales */}
      <label className="flex flex-col gap-1 text-sm">
        Costos variables (pesos/M3)
        <input
          disabled
          value={cosvariables + " pesos/M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
