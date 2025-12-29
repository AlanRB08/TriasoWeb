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
  new Intl.NumberFormat('es-US', { style: 'currency', currency: 'USD' }).format(num);

const fmtNum = (num: number) =>
  new Intl.NumberFormat('es-MX').format(num);

interface Props {
  state: any;
}

export const InversionPDF = ({ state }: Props) => {
  const {
    dlls, pesos,
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

        <Text style={styles.title}>Investment analysis for a Triaso counterflow plant for RAP</Text>
        <Text style={styles.title}>Analyst spreadsheet</Text>

        {/* valorplanta */}
        <Text style={styles.sectionTitle}>Asphalt plant value</Text>
        <View style={styles.table}>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Equipment value</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{fmtNum(dlls)}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>USD</Text>
          </View>

          {/* <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Paridad</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{paridad}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>MXN / USD</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCol, styles.colLabel]}>Valor del equipo (MXN)</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{fmt(pesos)}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>pesos</Text>
          </View> */}

        </View>

        {/* rentabilidad inversionista */}
        <Text style={styles.sectionTitle}>Investor profitability</Text>
        <View style={styles.table}>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Annual performance</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{anual}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>%</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Investment period</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{meses}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>months</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.colLabel]}>Resale value (% of purchase price)</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{reventa}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>%</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCol, styles.colLabel]}>Monthly investor income</Text>
            <Text style={[styles.tableCol, styles.colValue]}>{fmt(rentaMensual)}</Text>
            <Text style={[styles.tableCol, styles.colUnit]}>USD</Text>
          </View>

        </View>

        {/* costos variables */}
        <Text style={styles.sectionTitle}>Rentability for the Contractor - Variable Costs</Text>
        <View style={{ marginBottom: 5 }}>
          <Text>Hours/month: {horasxmes} | % RAP: {rap}%</Text>
        </View>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableColHeader]}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Concept</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>Input</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>Price</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>Unit Cost.</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Virgin aggregates</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{(100 - rap)}%</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{agrv}</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(tav)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>RAP aggregates</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{rap}%</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{arap}</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(trap)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Asphalt (95% mixture)</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{asfvir} Gallons/M3</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{asfpesosxlitro} $/Gallon</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(tasfvir)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Rejuvenator (5% mixture)</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{rejuve} Gallons/M3</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{rejupesosxlitro} $/Gallon</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(trejuve)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Fuel</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{combustible} Gallons/M3</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{combpesosxlitro} $/Gallon</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(tcombustible)}/M3</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '40%' }]}>Electricity ({electon} Ton/Hr)</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{electri} Kw</Text>
            <Text style={[styles.tableCol, { width: '20%' }]}>{elecpesosxlitro} $/Kw</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(telec)}/M3</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCol, { width: '80%', textAlign: 'right' }]}>Variable Unit Cost:</Text>
            <Text style={[styles.tableCol, { width: '20%', textAlign: 'right' }]}>{fmt(cosvariables)}/M3</Text>
          </View>

        </View>

        {/* costos fijos */}
        <Text style={styles.sectionTitle}>Fixed costs (Monthly)</Text>
        <View style={styles.table}>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '70%' }]}>Operator and assistants</Text>
            <Text style={[styles.tableCol, { width: '30%', textAlign: 'right' }]}>{fmt(cfOperador)}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '70%' }]}>Maintenance</Text>
            <Text style={[styles.tableCol, { width: '30%', textAlign: 'right' }]}>{fmt(cfMantenimiento)}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { width: '70%' }]}>Operational Payloder</Text>
            <Text style={[styles.tableCol, { width: '30%', textAlign: 'right' }]}>{fmt(cfPayloder)}</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCol, { width: '70%' }]}>Total Fixed Costs</Text>
            <Text style={[styles.tableCol, { width: '30%', textAlign: 'right' }]}>{fmt(tcFijos)}</Text>
          </View>

        </View>

        {/* resumen */}
        <Text style={styles.sectionTitle}>Financial Summary ({horasxmes} Hours/month and {rap}% RAP)</Text>

        <View style={styles.summaryBox}>

          <View style={styles.summaryText}>
            <Text>Monthly Production ({fmtNum(prodton)} Tons/Hr):</Text>
            <Text>{fmtNum(produc)} M3</Text>
          </View>

          <View style={styles.summaryText}>
            <Text>Selling price:</Text>
            <Text>{fmt(precioventa)} / M3</Text>
          </View>

          <View style={[styles.summaryText, { borderBottom: 1, paddingBottom: 5, marginBottom: 5 }]}>
            <Text>TOTAL INCOME:</Text>
            <Text style={{ color: 'blue' }}>{fmt(ingresos)}</Text>
          </View>

          <View style={styles.summaryText}>
            <Text>(-) Investor income:</Text>
            <Text>{fmt(rentaMensual)}</Text>
          </View>

          <View style={styles.summaryText}>
            <Text>(-) Total Variable Costs:</Text>
            <Text>{fmt(tcVariables)}</Text>
          </View>

          <View style={styles.summaryText}>
            <Text>(-) Total Fixed Costs:</Text>
            <Text>{fmt(tcFijos)}</Text>
          </View>

          <View style={[styles.summaryText, { borderBottom: 1, paddingBottom: 5, marginBottom: 5 }]}>
            <Text>TOTAL COSTS:</Text>
            <Text style={styles.redText}>{fmt(ucostos)}</Text>
          </View>

          <View style={[styles.summaryText, { marginTop: 10 }]}>
            <Text>MONTHLY NET PROFIT:</Text>
            <Text style={[styles.greenText, { fontSize: 13 }]}>{fmt(utilidad)}</Text>
          </View>

        </View>

        <Text style={{ position: 'absolute', bottom: 30, left: 30, right: 30, fontSize: 8, textAlign: 'center', color: 'gray' }}>
          This document is a financial projection based on the data provided.
        </Text>

      </Page>
    </Document>
  );
};
