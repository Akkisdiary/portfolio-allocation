import React from 'react';

import { Select } from '../../components';
import { Metric, usePortfolio } from '../Manager';

const MetricSelection: React.FC = () => {
  const { metric, setMetric } = usePortfolio();

  const selectionChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setMetric(e.currentTarget.value as Metric);
  };

  return (
    <Select
      value={metric}
      onChange={selectionChangeHandler}
      options={Object.values(Metric)}
      data-testid="metric-selection"
    />
  );
};

export default MetricSelection;
