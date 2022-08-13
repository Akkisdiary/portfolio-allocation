import { ChartDataPoint } from '../../components/PieChart/types';
import { TickerHolding } from '../Manager/types';

const colors = ['red', 'green', 'blue', 'purple', 'yellow'];

export const generateChartData = (
  data: TickerHolding[],
  key: keyof TickerHolding
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
