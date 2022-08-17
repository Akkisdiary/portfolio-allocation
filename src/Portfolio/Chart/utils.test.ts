import { data } from '../../api/mock/server';
import { Metric } from '../Manager';
import { generateDoughNutChartData } from './utils';

const holdings = data.map((d) => {
  return { quantity: '1', ...d };
});

describe('generateDoughNutChartData()', () => {
  it('convert by provided key', () => {
    const result1 = generateDoughNutChartData(holdings, 'sector', Metric.VALUE);

    expect(result1).toMatchObject({
      labels: ['Technology Services', 'Retail Trade', 'Electronic Technology', 'Consumer Durables'],
      datasets: [
        {
          data: [549.2735, 144.34, 173.14, 927.5],
        },
      ],
    });

    const result2 = generateDoughNutChartData(holdings, 'industry', Metric.VALUE);

    expect(result2).toMatchObject({
      labels: [
        'Internet Software/Services',
        'Internet Retail',
        'Telecommunications Equipment',
        'Motor Vehicles',
      ],
      datasets: [
        {
          data: [549.2735, 144.34, 173.14, 927.5],
        },
      ],
    });
  });

  it('convert by provided metric', () => {
    const result1 = generateDoughNutChartData(holdings, 'sector', Metric.PERCENTAGE);

    expect(result1).toMatchObject({
      labels: ['Technology Services', 'Retail Trade', 'Electronic Technology', 'Consumer Durables'],
      datasets: [
        {
          data: [30.61, 8.04, 9.65, 51.69], // total: 100%
        },
      ],
    });

    const result2 = generateDoughNutChartData(holdings, 'sector', Metric.VALUE);

    expect(result2).toMatchObject({
      labels: ['Technology Services', 'Retail Trade', 'Electronic Technology', 'Consumer Durables'],
      datasets: [
        {
          data: [549.2735, 144.34, 173.14, 927.5], // total: 100%
        },
      ],
    });
  });
});
