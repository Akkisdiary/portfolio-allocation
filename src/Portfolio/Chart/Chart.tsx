import React from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { usePortfolio } from '../Manager';
import { generateDoughNutChartData } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart: React.FC = () => {
  const { availableTickers, selectedCategory, metric } = usePortfolio();

  const chartData = generateDoughNutChartData(availableTickers(), selectedCategory, metric);

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
