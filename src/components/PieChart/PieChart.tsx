import React from 'react';
import { Pie, PieChart as PChart, ResponsiveContainer, Tooltip } from 'recharts';

import { DataPoint } from './types';

interface IPieChartProps {
    data: DataPoint[];
}

const PieChart: React.FC<IPieChartProps> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
