import { tickersData } from '../../api/mock/data';
import { Metric } from '../Manager';
import { generateDoughNutChartData } from './utils';

const holdings = tickersData.map((d) => {
  return { ...d, quantity: '1' };
});

const currencyRates = {
  'usd-eur': 0.9958,
  'usd-inr': 79.91,
  'inr-usd': 0.012,
};

describe('generateDoughNutChartData()', () => {
  it('convert by provided key - sector', () => {
    const result = generateDoughNutChartData(
      holdings,
      'sector',
      Metric.VALUE,
      currencyRates,
      'usd'
    );

    expect(result).toMatchObject({
      labels: [
        'Technology Services',
        'Retail Trade',
        'Electronic Technology',
        'Consumer Durables',
        'Energy Minerals',
      ],
      datasets: [
        {
          data: [568.4387, 144.34, 173.14, 927.5, 31.3662],
        },
      ],
    });
  });

  it('convert by provided key - industry', () => {
    const result = generateDoughNutChartData(
      holdings,
      'industry',
      Metric.VALUE,
      currencyRates,
      'usd'
    );

    expect(result).toMatchObject({
      labels: [
        'Internet Software/Services',
        'Internet Retail',
        'Telecommunications Equipment',
        'Motor Vehicles',
        'Oil Refining/Marketing',
        'Information Technology Services',
      ],
      datasets: [
        {
          data: [549.2735, 144.34, 173.14, 927.5, 31.3662, 19.1652],
        },
      ],
    });
  });

  it('convert by provided metric - percentage', () => {
    const result = generateDoughNutChartData(
      holdings,
      'sector',
      Metric.PERCENTAGE,
      currencyRates,
      'usd'
    );

    expect(result).toMatchObject({
      labels: [
        'Technology Services',
        'Retail Trade',
        'Electronic Technology',
        'Consumer Durables',
        'Energy Minerals',
      ],
      datasets: [
        {
          data: [30.81, 7.82, 9.39, 50.28, 1.7], // total: 100%
        },
      ],
    });
  });

  it('convert to provided currency - INR', () => {
    const result1 = generateDoughNutChartData(
      holdings,
      'sector',
      Metric.VALUE,
      currencyRates,
      'INR'
    );

    expect(result1).toMatchObject({
      labels: [
        'Technology Services',
        'Retail Trade',
        'Electronic Technology',
        'Consumer Durables',
        'Energy Minerals',
      ],
      datasets: [
        {
          data: [45423.936517, 11534.2094, 13835.6174, 74116.525, 2506.4730419999996],
        },
      ],
    });
  });

  it('convert to provided currency - EUR', () => {
    const result = generateDoughNutChartData(
      holdings,
      'sector',
      Metric.VALUE,
      currencyRates,
      'EUR'
    );

    expect(result).toMatchObject({
      labels: [
        'Technology Services',
        'Retail Trade',
        'Electronic Technology',
        'Consumer Durables',
        'Energy Minerals',
      ],
      datasets: [
        {
          data: [566.05125746, 143.73377200000002, 172.412812, 923.6045, 31.23446196],
        },
      ],
    });
  });
});
