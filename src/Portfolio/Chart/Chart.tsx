import React from 'react';

import { PieChart } from '../../components';
import { usePortfolio } from '../Manager/hooks';
import { generateChartData } from './utils';

const Chart: React.FC = () => {
  const { availableTickers } = usePortfolio();

  const chartData = generateChartData(availableTickers(), 'sector');

  return <PieChart data={chartData} />;
};

export default Chart;
