import React from "react";
import { formatCurrency } from "../../components/lib/utils";

interface Props {
  state: any;
  onChange: (field: string, value: number) => void;
}

export default function CostosVariables({ state, onChange }: Props) {
  const {
    horasxmes, rap, agrv, tav, arap, trap,
    asfvir, asfpesosxlitro, tasfvir,
    rejuve, rejupesosxlitro, trejuve,
    combustible, combpesosxlitro, tcombustible,
    electri, elecpesosxlitro, electon, telec,
    cosvariables
  } = state;

  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-black">
        Rentability for the contractor
      </h3>

      {/* Horas */}
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Monthly working hours</span>
        <input
          type="number"
          value={horasxmes || ""}
          min="0"
          onChange={(e) => onChange("horasxmes", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      {/* Totales */}
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md border-t-2 border-gray-400 pt-5">Variable costs (USD/M3)</span>
        <input
          disabled
          value={formatCurrency(cosvariables) + " / M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md border-t-2 border-gray-400 mt-5"></span>
      </label>

      {/* RAP */}
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">% RAP to be incorporated</span>
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
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Virgin aggregates (USD/M3)</span>
        <input
          type="number"
          value={agrv || ""}
          min="0"
          onChange={(e) => onChange("agrv", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          disabled
          value={formatCurrency(tav) + " / M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">RAP aggregates(USD/M3) </span>
        <input
          type="number"
          value={arap || ""}
          min="0"
          onChange={(e) => onChange("arap", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          disabled
          value={formatCurrency(trap) + " / M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Asfalto */}
      <label className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6 justify-center items-center gap-5 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">Asphalt for virgin aggregates(1)</span>
        <input
          type="number"
          value={asfvir || ""}
          min="0"
          onChange={(e) => onChange("asfvir", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-start md:text-center lg:text-center text-gray-800 lg:text-md md:text-md">(gal/M3) to the price of</span>
        <input
          type="number"
          value={asfpesosxlitro || ""}
          min="0"
          onChange={(e) => onChange("asfpesosxlitro", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">(USD/gal) applied to 95% of the mixture </span>
        <input
          disabled
          value={formatCurrency(tasfvir) + " / M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Rejuvenecedor */}
      <label className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6 justify-center items-center gap-5 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">Rejuvenator(2)</span>
        <input
          type="number"
          value={rejuve || ""}
          min="0"
          onChange={(e) => onChange("rejuve", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-start md:text-center lg:text-center text-gray-800 lg:text-md md:text-md">(gal/M3) to the price of</span>
        
        <input
          type="number"
          value={rejupesosxlitro || ""}
          min="0"
          onChange={(e) => onChange("rejupesosxlitro", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">(USD/gal) applied to 5% of the mixture</span>
        <input
          disabled
          value={formatCurrency(trejuve) + " / M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Combustible */}
      <label className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6 justify-center items-center gap-5 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">Fuel</span>
        <input
          type="number"
          value={combustible || ""}
          min="0"
          onChange={(e) => onChange("combustible", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-start md:text-center lg:text-center text-gray-800 lg:text-md md:text-md">(gal/M3) to the price of</span>
       
        <input
          type="number"
          value={combpesosxlitro || ""}
          min="0"
          onChange={(e) => onChange("combpesosxlitro", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">(USD/gal)</span>
        <input
          disabled
          value={formatCurrency(tcombustible) + " / M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      {/* Electricidad */}
      <label className="grid grid-cols-1 lg:grid-cols-8 md:grid-cols-8 items-center justify-between gap-5 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">Electricity (Kw/Hr) </span>
        <input
          type="number"
          value={electri || ""}
          min="0"
          onChange={(e) => onChange("electri", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">(Kw/hr) to the price of</span>

        <input
          type="number"
          value={elecpesosxlitro || ""}
          min="0"
          onChange={(e) =>
            onChange("elecpesosxlitro", Number(e.target.value))
          }
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">(USD/Kw) ÷</span>
        <input
          type="number"
          value={electon || ""}
          min="0"
          onChange={(e) => onChange("electon", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <span className="font-semibold text-sm text-gray-800 lg:text-md md:text-md">Ton/Hr (73 M3/Hr)</span>
        <input
          disabled
          value={formatCurrency(telec) + " / M3"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
      <div className="space-y-5 pt-5">
        <p className="text-sm text-gray-500">(1) Asphalt is not added to RAP because it already contains it.</p>
        <p className="text-sm text-gray-500">(2) A rejuvenator is added to the RAP to rejuvenate its asphalt.</p>
      </div>
    </section>
  );
}