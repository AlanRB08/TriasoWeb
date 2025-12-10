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
    uingresos,
    ucostos,
    utilidad,
  } = state;

  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-black">Producción e ingresos</h3>

      <label className="flex flex-col gap-1 text-sm">
        Producción (Ton/Hr)
        <input
          type="number"
          value={prodton || ""}
          min="0"
          onChange={(e) => onChange("prodton", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Producción (M3/Hr)
        <input
          disabled
          value={formatNumber(prodm3)}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Producción(M3)
        <input
          disabled
          value={formatNumber(produc)}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Precio de venta de la mezcla en planta (pesos/M3)
        <input
          type="number"
          value={precioventa || ""}
          min="0"
          onChange={(e) => onChange("precioventa", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Ingresos mensuales
        <input
          disabled
          value={formatCurrency(ingresos) +" pesos"}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
