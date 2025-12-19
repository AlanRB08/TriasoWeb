import React, { useState, useEffect } from "react";

import ValorPlanta from "./ValorPlanta";
import RentabilidadInversionista from "./RentabilidadInversionista";
import CostosVariables from "./CostosVariables";
import CostosFijos from "./CostosFijos";
import ProduccionIngresos from "./ProduccionIngresos";
import ResumenFinanciero from "./ResumenFinanciero";

import { pdf } from '@react-pdf/renderer';
import { InversionPDF } from "./InversionPDF";

import { parseNumber, pmt } from "../lib/utils";

export default function AnalisisInversion() {
  const [isClient, setIsClient] = useState(false);

 const [state, setState] = useState({
    dlls: 650000,
    // paridad: 18, 
    pesos: 0,   

    anual: 25,
    meses: 60,
    reventa: 30,
    rentaMensual: 0,

    horasxmes: 200,
    rap: 5,
    agrv: 15,   
    arap: 5,
    tav: 0,
    trap: 0,
    asfvir: 25,  
    asfpesosxlitro: 2.50, 
    tasfvir: 0,
    rejuve: 1,
    rejupesosxlitro: 5, 
    trejuve: 0,
    combustible: 3,
    combpesosxlitro: 3.50, 
    tcombustible: 0,
    electri: 300,
    elecpesosxlitro: 0.15, 
    electon: 125,
    telec: 0,

    cosvariables: 0,
    tcVariables: 0,

    cfOperador: 2500, 
    cfMantenimiento: 5000,
    cfPayloder: 8000,
    cf: 0,
    tcFijos: 0,

    prodton: 126,
    prodm3: 0,
    produc: 0,
    precioventa: 90, 
    ingresos: 0,
    uingresos: 0,
    ucostos: 0,
    utilidad: 0,
  });

  const onChange = (field: string, value: number) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const handleDownloadPdf = async () => {
    try {
      const doc = <InversionPDF state={state} />;
      const asPdf = pdf([]);
      asPdf.updateContainer(doc);
      const blob = await asPdf.toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Analisis_Financiero_Planta.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generando PDF:', err);
      alert('Ocurrió un error al generar el PDF');
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, [])

useEffect(() => {
    const s = { ...state };

    s.pesos = s.dlls; 

    // 2) Renta mensual 
    const i = s.anual / 100 / 12;
    const n = s.meses;

    const fv = s.pesos * (s.reventa / 100);
    s.rentaMensual = Math.round(pmt(i, n, -s.pesos, fv));

    // 3) Costos variables
    s.tav = s.agrv * (1 - s.rap / 100);
    s.trap = s.arap * (s.rap / 100);

    s.tasfvir = s.asfvir * s.asfpesosxlitro * (1 - s.rap / 100);
    s.trejuve = s.rejuve * s.rejupesosxlitro * (s.rap / 100);

    s.tcombustible = s.combustible * s.combpesosxlitro;

    // Electricidad
    s.telec = (s.electri * s.elecpesosxlitro / s.electon) * 1.72;

    s.cosvariables =
      s.tav +
      s.trap +
      s.tasfvir +
      s.trejuve +
      s.tcombustible +
      s.telec;

    // 4) Producción 
    s.prodm3 = Math.round(s.prodton / 1.8);
    s.produc = Math.round(s.prodm3 * s.horasxmes);

    // 5) Costos variables totales 
    s.tcVariables = Math.round(
      s.cosvariables * (s.electon / 1.8) * s.horasxmes
    );

    // 6) Costos fijos
    s.cf = Math.round(
      s.cfOperador + s.cfMantenimiento + s.cfPayloder
    );

    s.tcFijos = s.cf;

    // 7) Ingresos
    s.ingresos = Math.round(s.produc * s.precioventa);
    s.uingresos = s.ingresos;

    // 8) Costos totales y utilidad
    s.ucostos = s.tcVariables + s.tcFijos + s.rentaMensual;
    s.utilidad = s.ingresos - s.ucostos;

    setState(s);
  }, [
    state.dlls,
    // state.paridad, 
    state.anual,
    state.meses,
    state.reventa,

    state.horasxmes,
    state.rap,
    state.agrv,
    state.arap,
    state.asfvir,
    state.asfpesosxlitro,
    state.rejuve,
    state.rejupesosxlitro,
    state.combustible,
    state.combpesosxlitro,
    state.electri,
    state.elecpesosxlitro,
    state.electon,

    state.cfOperador,
    state.cfMantenimiento,
    state.cfPayloder,

    state.prodton,
    state.precioventa,
  ]);

  return (
    <div className="w-full bg-[url(/fondopatron.png)]">
      <div className="max-w-7xl mx-auto space-y-10 px-5 md:px-0 lg:px-0">

        <h1 className="text-3xl font-bold text-white pt-10">
          Análisis de Inversión — Planta de Asfalto
        </h1>

        <p className="text-white text-md">Los valores en los cuadros blancos son sugeridos, favor de poner los datos que a usted les parezcan adecuados. Los cuadros en gris son calculados.</p>
        <ValorPlanta
          dlls={state.dlls}
          pesos={state.pesos}
          onChange={onChange}
        />

        {/* 2 */}
        <RentabilidadInversionista
          anual={state.anual}
          meses={state.meses}
          reventa={state.reventa}
          rentaMensual={state.rentaMensual}
          onChange={onChange}
        />

        {/* 3 */}
        <CostosVariables state={state} onChange={onChange} />

        {/* 4 */}
        <CostosFijos state={state} onChange={onChange} />

        {/* 5 */}
        <ProduccionIngresos state={state} onChange={onChange} />
        {/* Res */}
        <ResumenFinanciero state={state} />

        {/* botón */}

        <div className="flex justify-center items-center">
          {isClient ? (
            <button
              onClick={handleDownloadPdf}
              className="mt-4 md:mt-0 bg-[#14427c] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              style={{ position: 'relative', zIndex: 9999 }}
              type="button"
            >
              Descargar PDF
            </button>
          ) : (
            <button className="mt-4 md:mt-0 bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
              Loading PDF...
            </button>
          )}
        </div>


      </div>

    </div>
  );
}
