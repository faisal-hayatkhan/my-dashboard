import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ chartData, total }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="doughnut-chart-container">
      <div className="doughnut-chart-wrapper">
        <Doughnut data={chartData} options={options} />
        <div className="doughnut-total">
          <span>{total}</span>
          <small>Total</small>
        </div>
      </div>
      <div className="custom-legend">
        {chartData.labels.map((label, index) => (
          <div key={label} className="legend-item">
            <span
              className="legend-color-dot"
              style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
            ></span>
            <span>{`${label} (${chartData.datasets[0].data[index]})`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;