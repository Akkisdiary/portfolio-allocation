import { DataPoint } from "../../components/PieChart/types";
import { SelectedTickerDetail } from "../types";

const colors = ["red", "green", "blue", "purple", "yellow"];

export const generateChartData = (
  data: SelectedTickerDetail[],
  key: keyof SelectedTickerDetail
): DataPoint[] => {
  const memo: {
    [key: string]: number;
  } = {};

  for (const tik of data) {
    const name = tik[key]!.toString();
    const value = tik.price! * tik.quantity!;

    memo[name] = memo[name] ? memo[name] + value : value;
  }

  const result = Object.entries(memo).map(([k, v], idx) => {
    const c = colors[idx % colors.length];
    return { name: k.toString(), value: Math.round(v), fill: c };
  });

  return result;
};
