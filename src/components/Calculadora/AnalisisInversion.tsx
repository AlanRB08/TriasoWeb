import React, { useState, useEffect } from "react";

import ValorPlanta from "./ValorPlanta";
import RentabilidadInversionista from "./RentabilidadInversionista";
import CostosVariables from "./CostosVariables";
import CostosFijos from "./CostosFijos";
import ProduccionIngresos from "./ProduccionIngresos";
import ResumenFinanciero from "./ResumenFinanciero";

import { parseNumber, pmt } from "../lib/utils";

export default function AnalisisInversion() {
  const [state, setState] = useState({
    dlls: 650000,
    paridad: 21.88,
    pesos: 0,

    anual: 25,
    meses: 60,
    reventa: 30,
    rentaMensual: 0,

    horasxmes: 200,
    rap: 5,
    agrv: 200,
    arap: 100,
    tav: 0,
    trap: 0,
    asfvir: 100,
    asfpesosxlitro: 11,
    tasfvir: 0,
    rejuve: 4.5,
    rejupesosxlitro: 20,
    trejuve: 0,
    combustible: 12,
    combpesosxlitro: 9,
    tcombustible: 0,
    electri: 300,
    elecpesosxlitro: 4,
    electon: 126,
    telec: 0,

    cosvariables: 0,
    tcVariables: 0,

    cfOperador: 40000,
    cfMantenimiento: 100000,
    cfPayloder: 180000,
    cf: 0,
    tcFijos: 0,

    prodton: 126,
    prodm3: 0,
    produc: 0,
    precioventa: 1800,
    ingresos: 0,
    uingresos: 0,
    ucostos: 0,
    utilidad: 0,
  });

  const onChange = (field: string, value: number) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };


  useEffect(() => {
    const s = { ...state };

  // 1) Valor en pesos
  s.pesos = s.dlls * s.paridad;

  // 2) Renta mensual 
  const i = s.anual / 100 / 12;
  const n = s.meses;

  const fv =  s.pesos * (s.reventa / 100); 
  s.rentaMensual = Math.round(pmt(i, n, -s.pesos, fv));

  // 3) Costos variables unitarios
  s.tav = Math.round(s.agrv * (1 - s.rap / 100));
  s.trap = Math.round(s.arap * (s.rap / 100));

  s.tasfvir = Math.round(s.asfvir * s.asfpesosxlitro * (1 - s.rap / 100));
  s.trejuve = Math.round(s.rejuve * s.rejupesosxlitro * (s.rap / 100));

  s.tcombustible = Math.round(s.combustible * s.combpesosxlitro);

  s.telec = Math.round((s.electri * s.elecpesosxlitro / s.electon) * 1.72);

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

  // 5) Costos variables totales s
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
    state.paridad,
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
    <div className="max-w-6xl mx-auto p-8 space-y-10">

      <h1 className="text-3xl font-bold text-gray-800">
        Análisis de Inversión — Planta de Asfalto
      </h1>

      {/* 1 */}
      <ValorPlanta
        dlls={state.dlls}
        paridad={state.paridad}
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
    </div>
  );
}
