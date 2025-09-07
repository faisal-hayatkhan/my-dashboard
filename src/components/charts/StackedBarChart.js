import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = ({ chartData, totalLabel }) => {
  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
  };

  return (
    <div className="stacked-bar-chart-container">
        <div className="total-label">{totalLabel}</div>
        <div className="bar-chart-wrapper">
            <Bar options={options} data={chartData} />
        </div>
        <div className="custom-legend bar-legend">
        {chartData.datasets.map((dataset) => (
            <div key={dataset.label} className="legend-item">
            <span
                className="legend-color-dot"
                style={{ backgroundColor: dataset.backgroundColor }}
            ></span>
            <span>{`${dataset.label} (${dataset.data[0]})`}</span>
            </div>
        ))}
        </div>
    </div>
  );
};

export default StackedBarChart;