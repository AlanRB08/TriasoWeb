import React from "react";
import { formatCurrency, formatNumber } from "../../components/lib/utils";

interface Props {
  state: any;
  onChange: (field: string, value: number) => void;
}

export default function CostosFijos({ state, onChange }: Props) {
  const { cfOperador, cfMantenimiento, cfPayloder, cf, tcFijos } = state;

  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-black">Costos fijos</h3>

      <label className="flex flex-col gap-1 text-sm">
        Operador y ayudantes

        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-500 font-semibold">
            $
          </span>
          <input
            type="number"
            value={cfOperador || ""}
            min="0"
            onChange={(e) => onChange("cfOperador", Number(e.target.value))}
            className="border border-gray-300 rounded-lg pl-7 pr-3 py-2 w-full focus:ring-2 focus:ring-black outline-none"
          />
          <span className="absolute left-40 top-[9px]">pesos/mes</span>
        </div>
        
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Mantenimiento
        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-500 font-semibold">
            $
          </span>
          <input
            type="number"
            value={cfMantenimiento || ""}
            min="0"
            onChange={(e) => onChange("cfMantenimiento", Number(e.target.value))}
            className="border border-gray-300 rounded-lg pl-7 pr-3 py-2 w-full focus:ring-2 focus:ring-black outline-none"
          />
          <span className="absolute left-40 top-[9px]">pesos/mes</span>
        </div>

      </label>

      <label className="flex flex-col gap-1 text-sm">
        Payloder con operación
        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-500 font-semibold">
            $
          </span>
        
        <input
          type="number"
          value={cfPayloder || ""}
          min="0"
          onChange={(e) => onChange("cfPayloder", Number(e.target.value))}
          className="border border-gray-300 rounded-lg pl-7 pr-3 py-2 w-full focus:ring-2 focus:ring-black outline-none"
        />
        <span className="absolute left-40 top-[9px]">pesos/mes</span>
        </div>
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Costos fijos (total)
        <input
          disabled
          value={formatCurrency(cf) +" pesos/mes"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
