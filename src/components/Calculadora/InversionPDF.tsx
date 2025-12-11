import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 10, fontFamily: 'Helvetica' },
  title: { fontSize: 16, marginBottom: 10, textAlign: 'left' },

  sectionTitle: {
    fontSize: 12,
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    padding: 4
  },

  table: {
    display: "flex",
    flexDirection: "column",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#bfbfbf',
    borderStyle: 'solid',
    marginBottom: 10
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: '#bfbfbf',
    borderStyle: 'solid'
  },
  tableCol: {
    borderRight: 1,
    borderColor: '#bfbfbf',
    padding: 4,
    flexGrow: 1
  },
  tableColHeader: { backgroundColor: '#e0e0e0' },

  colLabel: { width: '50%' },
  colValue: { width: '25%', textAlign: 'right' },
  colUnit: { width: '25%' },

  totalRow: { backgroundColor: '#f9f9f9' },

  summaryBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 10
  },

  summaryText: {
    fontSize: 12,
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex'
  },

  greenText: { color: 'green' },
  redText: { color: 'red' }
});

const fmt = (num: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(num);

const fmtNum = (num: number) =>
  new Intl.NumberFormat('es-MX').format(num);

interface Props {
  state: any;
}

export const InversionPDF = ({ state }: Props) => {
  const {
    dlls, paridad, pesos,
    anual, meses, reventa, rentaMensual,
    horasxmes, rap,
    agrv, tav,
    arap, trap,
    asfvir, asfpesosxlitro, tasfvir,
    rejuve, rejupesosxlitro, trejuve,
    combustible, combpesosxlitro, tcombustible,
    electri, elecpesosxlitro, electon, telec,
    cosvariables, tcVariables,
    cfOperador, cfMantenimiento, cfPayloder, tcFijos,
    prodton, prodm3, produc, precioventa, ingresos, ucostos, utilidad
  } = state;

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <Text style={styles.title}>Análisis de inversión en una planta de contraflujo Triaso para RAP</Text>
        <Text style={styles.title}>Hoja de cálculo para el analista</Text>

        {/* valorplanta */}
        <Text style={styles.sectionTitle}>Valor de la Planta de asfalto</Text>
        <View style={styles.table}>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Valor del equipo</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{fmtNum(dlls)}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>dólares</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Paridad</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{paridad}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>MXN / USD</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCol, styles.colLabel]}>Valor del equipo (MXN)</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{fmt(pesos)}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>pesos</Text>
          </View>

        </View>

        {/* rentabilidad inversionista */}
        <Text style={styles.sectionTitle}>Rentabilidad para el inversionista</Text>
        <View style={styles.table}>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Rendimiento anual</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{anual}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>%</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Periodo de la inversión</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{meses}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>meses</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Valor de reventa (% compra)</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{reventa}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>%</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCol, styles.colLabel]}>Renta mensual inversionista</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{fmt(rentaMensual)}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>pesos</Text>
          </View>

        </View>

        {/* costos variables */}
        <Text style={styles.sectionTitle}>Rentabilidad para el contratista - Costos Variables</Text>
        <View style={{ marginBottom: 5 }}>
          <Text>Horas/mes: {horasxmes} | % RAP: {rap}%</Text>
        </View>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableColHeader]}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Concepto</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>Insumo</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>Precio</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>Costo Unit.</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Agregados vírgenes</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{(100 - rap)}%</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{agrv}</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(tav)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Agregados RAP</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{rap}%</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{arap}</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(trap)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Asfalto (al 95% mezcla)</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{asfvir} lts/M3</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{asfpesosxlitro} $/lt</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(tasfvir)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Rejuvenecedor (al 5% mezcla)</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{rejuve} lts/M3</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{rejupesosxlitro} $/lt</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(trejuve)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Combustible</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{combustible} lts/M3</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{combpesosxlitro} $/lt</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(tcombustible)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Electricidad ({electon} Ton/Hr)</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{electri} Kw</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{elecpesosxlitro} $/Kw</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(telec)}/M3</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCol, { width: '80%', textAlign: 'right' }]}>Costo Variable Unitario:</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(cosvariables)}/M3</Text>
          </View>

        </View>

        {/* costos fijos */}
        <Text style={styles.sectionTitle}>Costos Fijos (Mensual)</Text>
        <View style={styles.table}>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '70%' }]}>Operador y ayudantes</Text>
            <Text style={[styles.tableCol, { width: '30%', textAlign: 'right' }]}>{fmt(cfOperador)}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '70%' }]}>Mantenimiento</Text>
            <Text style={[styles.tableCol, { width: '30%', textAlign: 'right' }]}>{fmt(cfMantenimiento)}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '70%' }]}>Payloder con operación</Text>
            <Text style={[styles.tableCol, { width: '30%', textAlign: 'right' }]}>{fmt(cfPayloder)}</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCol, { width: '70%' }]}>Total Costos Fijos</Text>
            <Text style={[styles.tableCol, { width: '30%', textAlign: 'right' }]}>{fmt(tcFijos)}</Text>
          </View>

        </View>

        {/* resumen */}
        <Text style={styles.sectionTitle}>Resumen Financiero ({horasxmes} Hrs/mes y {rap}% RAP)</Text>

        <View style={styles.summaryBox}>

          <View style={styles.summaryText}>
            <Text>Producción Mensual ({fmtNum(prodton)} Ton/Hr):</Text>
            <Text>{fmtNum(produc)} M3</Text>
          </View>

          <View style={styles.summaryText}>
            <Text>Precio de venta:</Text>
            <Text>{fmt(precioventa)} / M3</Text>
          </View>

          <View style={[styles.summaryText, { borderBottom: 1, paddingBottom: 5, marginBottom: 5 }]}>
            <Text>INGRESOS TOTALES:</Text>
            <Text style={{ color: 'blue' }}>{fmt(ingresos)}</Text>
          </View>

          <View style={styles.summaryText}>
            <Text>(-) Renta Inversionista:</Text>
            <Text>{fmt(rentaMensual)}</Text>
          </View>

          <View style={styles.summaryText}>
            <Text>(-) Costos Variables Totales:</Text>
            <Text>{fmt(tcVariables)}</Text>
          </View>

          <View style={styles.summaryText}>
            <Text>(-) Costos Fijos Totales:</Text>
            <Text>{fmt(tcFijos)}</Text>
          </View>

          <View style={[styles.summaryText, { borderBottom: 1, paddingBottom: 5, marginBottom: 5 }]}>
            <Text>COSTOS TOTALES:</Text>
            <Text style={styles.redText}>{fmt(ucostos)}</Text>
          </View>

          <View style={[styles.summaryText, { marginTop: 10 }]}>
            <Text>UTILIDAD NETA MENSUAL:</Text>
            <Text style={[styles.greenText, { fontSize: 13 }]}>{fmt(utilidad)}</Text>
          </View>

        </View>

        <Text style={{ position: 'absolute', bottom: 30, left: 30, right: 30, fontSize: 8, textAlign: 'center', color: 'gray' }}>
          Este documento es una proyección financiera basada en los datos proporcionados.
        </Text>

      </Page>
    </Document>
  );
};
