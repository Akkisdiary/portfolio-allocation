import type { ChartData } from 'chart.js';
import type { SelectableCategory, TickerHolding, ExchangeRates } from '../Manager';

const COLORS = [
  '#f87171',
  '#fbbf24',
  '#a3e635',
  '#4ade80',
  '#2dd4bf',
  '#38bdf8',
  '#818cf8',
  '#e879f9',
  '#fb7185',
  '#22d3ee',
  '#bfdbfe',
  '#a78bfa',
  '#f472b6',
];

/**
 * Converts a price from one currency to another using the provided exchange rates.
 *
 * The conversion is performed via an intermediary default currency, defined as `DEFAULT_SELECTED_CURRENCY`.
 * Currency codes are case-insensitive.
 *
 * @param price - The price value to be converted.
 * @param fromCurrency - The currency code of the original price (e.g., 'USD').
 * @param toCurrency - The target currency code to convert the price to (e.g., 'EUR').
 * @param exchangeRates - An object containing exchange rates in the format `{ 'base-target': rate }`.
 *                        The function expects rates for conversions involving the default currency.
 * @returns The converted price in the target currency. If conversion is not possible (e.g., missing rates),
 *          returns the original price.
 */
export const priceByExchangeRate = (
  price: number,
  fromCurrency: string,
  toCurrency: string,
  exchangeRates: ExchangeRates,
): number => {
  fromCurrency = fromCurrency.toLowerCase();
  toCurrency = toCurrency.toLocaleLowerCase();
  
  if (fromCurrency === toCurrency) {
    return price
  }
  const directRate = exchangeRates[`${fromCurrency}-${toCurrency}`];
  if (directRate) {
    return price * directRate;
  }
  const reverseRate = exchangeRates[`${toCurrency}-${fromCurrency}`];
  if (reverseRate) {
    return price / reverseRate;
  }
  return NaN;
}

export const generateDoughNutChartData = (
  data: TickerHolding[],
  attribute: SelectableCategory,
): ChartData<'doughnut'> => {
  const agg: {[key: string]: number} = {}

  for (let i = 0; i < data.length; i++) {
    const h = data[i];

    const category = h[attribute];
    const quantity = h.quantity;
    let value = h.price * quantity;

    agg[category] = (agg[category] || 0) + value
  }

  const labels: string[] = Object.keys(agg);
  const values: number[] = Object.values(agg);
  const bgColors: string[] = [];

  for (let i = 0; i < labels.length; i++) {
    bgColors.push(COLORS[i % COLORS.length]);
  }

  return {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: bgColors,
        borderWidth: 1,
      },
    ],
  };
};
