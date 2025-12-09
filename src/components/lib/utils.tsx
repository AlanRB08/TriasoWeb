export function formatNumber(n: number | string) {
  if (n === null || n === undefined || n === "") return "";
  const num =
    typeof n === "string" ? Number(n.toString().replace(/,/g, "")) : n;
  if (Number.isNaN(num)) return "";
  return num.toLocaleString("es-MX", { maximumFractionDigits: 2 });
}

export function parseNumber(v: string | number) {
  if (typeof v === "number") return v;
  if (!v) return 0;
  const cleaned = (v as string).toString().replace(/,/g, "").trim();
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
}

// PMT: Payment for loans/investments, same as Excel
export function pmt(
  rate_per_period: number,
  number_of_payments: number,
  present_value: number,
  future_value = 0,
  type = 0
) {
  if (number_of_payments === 0) return 0;

  if (rate_per_period !== 0) {
    const q = Math.pow(1 + rate_per_period, number_of_payments);
    return (
      -(rate_per_period * (future_value + q * present_value)) /
      ((-1 + q) * (1 + rate_per_period * type))
    );
  }

  return -(future_value + present_value) / number_of_payments;
}
