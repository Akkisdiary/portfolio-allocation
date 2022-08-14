import React from 'react';

import { PieChart } from '../../components';
import { usePortfolio } from '../Manager/hooks';
import { generateChartData } from './utils';

const Chart: React.FC = () => {
  const { availableTickers, selectedCategory } = usePortfolio();

  const chartData = generateChartData(availableTickers(), selectedCategory);

  return <PieChart data={chartData} />;
};

export default Chart;
