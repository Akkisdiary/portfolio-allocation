import { tickerData } from './data';
import { generateChartData } from './utils';

describe("utils()", () => {
  it("should convert given ticker data to chart data", () => {
    const result1 = generateChartData(tickerData, "sector");
    expect(result1).toStrictEqual([
      {
        name: "sector 1",
        value: 120 * 2 + 84 * 12,
      },
      {
        name: "sector 2",
        value: 94 * 2 + 35 * 10,
      },
    ]);

    const result2 = generateChartData(tickerData, "industry");
    expect(result2).toStrictEqual([
      {
        name: "industry 1",
        value: 120 * 2 + 84 * 12 + 94 * 2 + 35 * 10,
      },
    ]);
  });
});

describe("<Chart />", () => {});
