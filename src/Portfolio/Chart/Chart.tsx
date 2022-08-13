import React from "react";
import PieChart from "../../components/PieChart";
import { usePortfolio } from "../context";
import { generateChartData } from "./utils";

const Chart: React.FC = () => {
  const { availableTickers } = usePortfolio();

  const chartData = generateChartData(availableTickers(), "sector");

  return <PieChart data={chartData} />;
};

export default Chart;
