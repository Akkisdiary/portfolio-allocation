import { Metric } from '../Manager';

import type { ChartData } from 'chart.js';
import type { SelectableCategory, TickerHolding, CurrencyRates } from '../Manager';
import { DEFAULT_SELECTED_CURRENCY } from '../Manager/context';

const colors = [
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

export const generateDoughNutChartData = (
  data: TickerHolding[],
  key: SelectableCategory,
  metric: Metric,
  currencyRates: CurrencyRates,
  currencyIn: string
): ChartData<'doughnut'> => {
  const memo: {
    [key: string]: number;
  } = {};

  for (const tik of data) {
    const tikCurrency = tik.currency;
    const quantity = tik.quantity ? parseInt(tik.quantity) : 0;

    let value = tik.price * quantity;

    if (tikCurrency.toLowerCase() !== DEFAULT_SELECTED_CURRENCY.toLowerCase()) {
      const defaultRate =
        currencyRates[`${tikCurrency.toLowerCase()}-${DEFAULT_SELECTED_CURRENCY.toLowerCase()}`];
      value = value * defaultRate;
    }

    if (DEFAULT_SELECTED_CURRENCY.toLowerCase() !== currencyIn.toLowerCase()) {
      const conversionRate =
        currencyRates[`${DEFAULT_SELECTED_CURRENCY.toLowerCase()}-${currencyIn.toLowerCase()}`];
      value = value * conversionRate;
    }

    const name = tik[key];
    memo[name] = memo[name] ? memo[name] + value : value;
  }

  const labels: string[] = [];
  const values: number[] = [];
  const bgColors: string[] = [];

  Object.entries(memo).forEach(([k, v], idx) => {
    labels.push(k);
    values.push(v);
    const c = colors[idx % colors.length];
    bgColors.push(c);
  });

  if (metric === Metric.PERCENTAGE) {
    const total = values.reduce((accumulator, value) => accumulator + value, 0);
    for (let i = 0; i < values.length; i++) {
      const percentage = (values[i] / total) * 100;
      values[i] = Math.round((percentage + Number.EPSILON) * 100) / 100;
    }
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
