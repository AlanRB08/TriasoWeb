import React from "react";

interface Props {
  state: any;
  onChange: (field: string, value: number) => void;
}

export default function CostosFijos({ state, onChange }: Props) {
  const { cfOperador, cfMantenimiento, cfPayloder, cf, tcFijos } = state;

  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">Costos fijos</h3>

      <label className="flex flex-col gap-1 text-sm">
        Operador y ayudantes
        <input
          type="number"
          value={cfOperador}
          onChange={(e) => onChange("cfOperador", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Mantenimiento
        <input
          type="number"
          value={cfMantenimiento}
          onChange={(e) => onChange("cfMantenimiento", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Payloder con operación
        <input
          type="number"
          value={cfPayloder}
          onChange={(e) => onChange("cfPayloder", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Costos fijos (total)
        <input
          disabled
          value={cf}
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
