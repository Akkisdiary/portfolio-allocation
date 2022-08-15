import { tickerData } from './data';
import { generateChartData, generateDoughNutChartData } from './utils';

describe('utils()', () => {
  it('should convert given ticker data to chart data', () => {
    const result1 = generateChartData(tickerData, 'sector');
    expect(result1).toStrictEqual(
      expect.objectContaining([
        {
          name: 'sector 1',
          value: 120 * 2 + 84 * 12,
          fill: expect.any(String),
        },
        {
          name: 'sector 2',
          value: 94 * 2 + 35 * 10,
          fill: expect.any(String),
        },
      ])
    );

    const result2 = generateChartData(tickerData, 'industry');
    expect(result2).toStrictEqual(
      expect.objectContaining([
        {
          name: 'industry 1',
          value: 120 * 2 + 84 * 12 + 94 * 2 + 35 * 10,
          fill: expect.any(String),
        },
      ])
    );
  });
});

describe('utils(2)', () => {
  it('generateDoughNutChartData() - should convert given ticker data to doughnut chart data', () => {
    const result1 = generateDoughNutChartData(tickerData, 'sector');

    expect(result1).toStrictEqual({
      labels: ['sector 1', 'sector 2'],
      datasets: [
        {
          data: [120 * 2 + 84 * 12, 94 * 2 + 35 * 10],
        },
      ],
    });
  });
});
