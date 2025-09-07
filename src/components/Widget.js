import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import DoughnutChart from './charts/DoughnutChart';
import StackedBarChart from './charts/StackedBarChart';

const Widget = ({ widget, categoryId }) => {
  const { dispatch } = useDashboard();

  const handleRemove = () => {
    dispatch({
      type: 'TOGGLE_WIDGET',
      payload: { categoryId, widgetId: widget.widgetId },
    });
  };

  const renderWidgetContent = () => {
    switch (widget.type) {
      case 'doughnut':
        return <DoughnutChart chartData={widget.chartData} total={widget.total} />;
      case 'stackedBar':
        return <StackedBarChart chartData={widget.chartData} totalLabel={widget.totalLabel} />;
      case 'text':
        return <p className="widget-text-content">{widget.content}</p>;
      default:
        return <p>Invalid widget type.</p>;
    }
  };

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h3>{widget.title}</h3>
        <button className="remove-widget-btn" onClick={handleRemove}>
          <span className="material-icons">close</span>
        </button>
      </div>
      <div className="widget-body">
        {renderWidgetContent()}
      </div>
    </div>
  );
};

export default Widget;