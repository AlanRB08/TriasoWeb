import React from "react";

interface Props {
  state: any;
}

export default function ResumenFinanciero({ state }: Props) {
  const {
    horasxmes,
    rap,
    rentaMensual,
    tcVariables,
    tcFijos,
    ucostos, // Total de costos
    prodton,
    prodm3,
    produc,
    precioventa,
    ingresos,
    utilidad,
    cosvariables, // Costo variable unitario para mostrar en el texto
    electon, // Para el texto descriptivo
  } = state;

  // Formateador de moneda para visualización limpia
  const fmt = (num: number) =>
    num.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

  const fmtNum = (num: number) => num.toLocaleString("es-MX");

  // Texto dinámico repetitivo
  const tituloDinamico = `con ${horasxmes} Hrs/mes y ${rap}% de RAP`;

  return (
    <div className="space-y-8">
      {/* ------------------------------------------------------------ */}
      {/* TABLA 1: RESUMEN DE COSTOS */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2">
          Total de costos {tituloDinamico}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Total Costos Header */}
          <div className="md:col-span-2 bg-gray-50 p-3 rounded-lg flex justify-between items-center border border-gray-200 mb-2">
            <span className="font-semibold text-gray-700">TOTAL COSTOS (Mensual)</span>
            <span className="text-xl font-bold text-red-600">{fmt(ucostos)}</span>
          </div>

          {/* Desglose */}
          <div className="text-sm text-gray-600">Renta mensual para el inversionista</div>
          <div className="text-right font-medium">{fmt(rentaMensual)}</div>

          <div className="text-sm text-gray-600">
            <p>Costos variables totales</p>
            <p className="text-xs text-gray-400">
              ({fmt(cosvariables)}/M3 x {Math.round(prodm3)} M3/Hr x {horasxmes} Hrs)
            </p>
          </div>
          <div className="text-right font-medium">{fmt(tcVariables)}</div>

          <div className="text-sm text-gray-600">Costos fijos totales</div>
          <div className="text-right font-medium">{fmt(tcFijos)}</div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* TABLA 2: PRODUCCIÓN E INGRESOS */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2">
          Ingresos en planta {tituloDinamico}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
           {/* Total Ingresos Header */}
           <div className="md:col-span-2 bg-gray-50 p-3 rounded-lg flex justify-between items-center border border-gray-200 mb-2">
            <span className="font-semibold text-gray-700">TOTAL INGRESOS (Mensual)</span>
            <span className="text-xl font-bold text-blue-600">{fmt(ingresos)}</span>
          </div>

          <div className="text-sm text-gray-600">Producción (Ton/Hr)</div>
          <div className="text-right font-medium">{fmtNum(prodton)} Ton/Hr</div>

          <div className="text-sm text-gray-600">Producción Volumétrica (M3/Hr)</div>
          <div className="text-right font-medium">{fmtNum(prodm3)} M3/Hr</div>

          <div className="text-sm text-gray-600">Producción Mensual (M3)</div>
          <div className="text-right font-medium">{fmtNum(produc)} M3</div>

          <div className="text-sm text-gray-600">Precio de venta (pesos/M3)</div>
          <div className="text-right font-medium">{fmt(precioventa)}</div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* TABLA 3: UTILIDAD FINAL */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-green-50 rounded-xl shadow p-6 border border-green-200 space-y-4">
        <h3 className="text-xl font-bold text-green-800 border-b border-green-200 pb-2">
          Utilidad {tituloDinamico}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-sm text-gray-700">Ingresos Totales</div>
          <div className="text-right font-medium text-gray-700">{fmt(ingresos)}</div>

          <div className="text-sm text-gray-700">(-) Costos Totales</div>
          <div className="text-right font-medium text-red-500">- {fmt(ucostos)}</div>

          <div className="md:col-span-2 border-t border-green-200 mt-2 pt-2 flex justify-between items-center">
            <span className="text-lg font-bold text-green-900">UTILIDAD NETA MENSUAL</span>
            <span className="text-2xl font-bold text-green-700">{fmt(utilidad)}</span>
          </div>
        </div>
      </section>
    </div>
  );
}