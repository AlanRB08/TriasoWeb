import React from "react";
import { formatCurrency, formatNumber } from "../../components/lib/utils";
interface Props {
  state: any;
  onChange: (field: string, value: number) => void;
}

export default function ProduccionIngresos({ state, onChange }: Props) {
  const {
    prodton,
    prodm3,
    produc,
    precioventa,
    ingresos,
  } = state;

  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-black">Production and revenue</h3>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Production (Tons/Hr)</span>
        <input
          type="number"
          value={prodton || ""}
          min="0"
          onChange={(e) => onChange("prodton", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Production(M3/Hr) </span>
        <input
          disabled
          value={formatNumber(prodm3)}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Production(M3) </span>
        <input
          disabled
          value={formatNumber(produc)}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Sale price of the mixture at the plant (dollars/M3) </span>
        <input
          type="number"
          value={precioventa || ""}
          min="0"
          onChange={(e) => onChange("precioventa", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Monthly revenue</span>
        <input
          disabled
          value={formatCurrency(ingresos) +" dollars"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
