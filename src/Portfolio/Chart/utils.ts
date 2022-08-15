import { ChartDataPoint } from '../../components/PieChart/types';
import type { SelectableCategory, TickerHolding } from '../Manager/types';
import { Metric } from '../Manager/types';

import type { ChartData } from 'chart.js';

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

/**
 * Deprecated - Now using chartjs
 */
export const generateChartData = (
  data: TickerHolding[],
  key: SelectableCategory
): ChartDataPoint[] => {
  const memo: {
    [key: string]: number;
  } = {};

  for (const tik of data) {
    if (tik['quantity'] !== undefined && tik['price'] !== undefined) {
      const quantity = parseInt(tik.quantity);

      const name = tik[key]!;
      const value = tik.price! * quantity;

      memo[name] = memo[name] ? memo[name] + value : value;
    }
  }

  const result = Object.entries(memo).map(([k, v], idx) => {
    const c = colors[idx % colors.length];
    return { name: k.toString(), value: Math.round(v), fill: c };
  });

  return result;
};

export const generateDoughNutChartData = (
  data: TickerHolding[],
  key: SelectableCategory,
  metric: Metric
): ChartData<'doughnut'> => {
  const memo: {
    [key: string]: number;
  } = {};

  for (const tik of data) {
    if (tik['quantity'] !== undefined && tik['price'] !== undefined) {
      const quantity = parseInt(tik.quantity);

      const name = tik[key]!;
      const value = tik.price! * quantity;

      memo[name] = memo[name] ? memo[name] + value : value;
    }
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
    console.log(total);
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
      },
    ],
  };
};
