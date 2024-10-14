// src/components/WatchlistChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const WatchlistChart = ({ data }) => {
  return (
    <div>
        
      <Doughnut data={data} />
    </div>
  );
};

export default WatchlistChart;
