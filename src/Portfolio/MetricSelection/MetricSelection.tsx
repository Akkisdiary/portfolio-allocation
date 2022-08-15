import { usePortfolio } from '../Manager/hooks';
import { Metric } from '../Manager/types';

const MetricSelection: React.FC = () => {
  const { metric, setMetric } = usePortfolio();

  const selectionChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setMetric(e.currentTarget.value as Metric);
  };

  return (
    <select
      value={metric}
      onChange={selectionChangeHandler}
      className="m-0 block rounded-t-md rounded-b-md border bg-slate-100 bg-clip-padding bg-no-repeat p-2 text-sm capitalize text-slate-700 shadow-sm transition hover:border-slate-500 focus:border-slate-500 focus:bg-white focus:shadow-md focus:outline-none active:rounded-b-none"
      data-testid="category-selection"
    >
      {Object.values(Metric).map((metric) => (
        <option key={metric} value={metric} className="capitalize">
          {metric}
        </option>
      ))}
    </select>
  );
};

export default MetricSelection;
