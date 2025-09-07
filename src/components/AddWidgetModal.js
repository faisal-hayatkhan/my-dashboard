import React, { useState, useEffect } from 'react';
import { useDashboard } from '../context/DashboardContext';

const AddWidgetModal = ({ categoryId, closeModal }) => {
  const { dashboardState, dispatch } = useDashboard();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(categoryId);
  const [localWidgets, setLocalWidgets] = useState(dashboardState);

  useEffect(() => {
    setLocalWidgets(dashboardState);
  }, [dashboardState]);

  const handleCheckboxChange = (catId, widgetId) => {
    const updatedState = localWidgets.map(category => {
      if (category.categoryId === catId) {
        return {
          ...category,
          widgets: category.widgets.map(widget =>
            widget.widgetId === widgetId
              ? { ...widget, isVisible: !widget.isVisible }
              : widget
          ),
        };
      }
      return category;
    });
    setLocalWidgets(updatedState);
  };

  const handleConfirm = () => {
    localWidgets.forEach(category => {
      category.widgets.forEach(widget => {
        const originalWidget = dashboardState
          .find(c => c.categoryId === category.categoryId)
          .widgets.find(w => w.widgetId === widget.widgetId);
        
        if (originalWidget.isVisible !== widget.isVisible) {
          dispatch({
            type: 'TOGGLE_WIDGET',
            payload: { categoryId: category.categoryId, widgetId: widget.widgetId },
          });
        }
      });
    });
    closeModal();
  };

  const filteredWidgets = localWidgets
    .find(cat => cat.categoryId === activeTab)
    ?.widgets.filter(widget =>
      widget.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Personalise your dashboard</h2>
          <button onClick={closeModal} className="close-modal-btn">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-tabs">
            {dashboardState.map(cat => (
              <button
                key={cat.categoryId}
                className={`tab-btn ${activeTab === cat.categoryId ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.categoryId)}
              >
                {cat.categoryName.split(' ')[0]} {/* Short name for tab */}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search in all widgets..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="widget-list">
            {filteredWidgets?.map(widget => (
              <div key={widget.widgetId} className="widget-list-item">
                <input
                  type="checkbox"
                  id={widget.widgetId}
                  checked={widget.isVisible}
                  onChange={() => handleCheckboxChange(activeTab, widget.widgetId)}
                />
                <label htmlFor={widget.widgetId}>{widget.title}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={closeModal}>Cancel</button>
          <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;