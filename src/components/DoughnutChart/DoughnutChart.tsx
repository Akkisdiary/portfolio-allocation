import { Chart as ChartJS, ArcElement, Tooltip, Legend, DoughnutDataPoint } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import type { ChartData } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC<{ data: ChartData<'doughnut'> }> = ({ data }) => (
  <Doughnut data={data} />
);

export default DoughnutChart;
