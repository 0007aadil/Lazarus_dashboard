// src/components/HoldingsChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HoldingsChart = ({ data }) => {
  return (
    <div>
      <h2>Holdings</h2>
      <Bar data={data} />
    </div>
  );
};

export default HoldingsChart;
