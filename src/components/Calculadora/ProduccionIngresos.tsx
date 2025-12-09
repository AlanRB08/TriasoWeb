import React from "react";

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
      <h3 className="text-xl font-semibold text-gray-700">Producción e ingresos</h3>

      <label className="flex flex-col gap-1 text-sm">
        Producción (Ton/Hr)
        <input
          type="number"
          value={prodton}
          onChange={(e) => onChange("prodton", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Producción (M3/Hr)
        <input
          disabled
          value={prodm3}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Producción mensual (M3)
        <input
          disabled
          value={produc}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Precio de venta (pesos/M3)
        <input
          type="number"
          value={precioventa}
          onChange={(e) => onChange("precioventa", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Ingresos mensuales
        <input
          disabled
          value={ingresos}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
