import React, { useCallback } from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { usePortfolio } from '../Manager/hooks';
import { generateDoughNutChartData } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart: React.FC = () => {
  const { availableTickers, selectedCategory } = usePortfolio();

  const getChartData = useCallback(
    () => generateDoughNutChartData(availableTickers(), selectedCategory),
    [availableTickers, selectedCategory]
  );

  const chartData = getChartData();

  return (
    <Doughnut
      data={chartData}
      options={{
        responsive: true,
        // maintainAspectRatio: false,
        radius: 160,
        plugins: { legend: { position: 'bottom' } },
        layout: { padding: 10 },
      }}
    />
  );
};

export default Chart;
