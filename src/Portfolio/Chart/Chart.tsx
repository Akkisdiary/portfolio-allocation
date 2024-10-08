import React from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { usePortfolio } from '../Manager';
import { generateDoughNutChartData } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart: React.FC = () => {
  const { availableTickers, selectedCategory, currencyRates, selectedCurrency, metric } =
    usePortfolio();

  let chartData = generateDoughNutChartData(
    availableTickers(),
    selectedCategory,
    metric,
    currencyRates,
    selectedCurrency
  );

  if (
    chartData.datasets.length === 0 ||
    !chartData.datasets[0].data ||
    chartData.datasets[0].data.length === 0
  ) {
    chartData = {
      labels: ['Search Stocks'],
      datasets: [
        { data: [1], backgroundColor: ['#64748b33'], borderColor: ['#64748bB2'], borderWidth: 1 },
      ],
    };
  }

  return (
    <Doughnut
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        radius: 160,
        plugins: { legend: { position: 'bottom' } },
        layout: { padding: 10 },
      }}
      data-testid="chart-canvas"
    />
  );
};

export default Chart;
