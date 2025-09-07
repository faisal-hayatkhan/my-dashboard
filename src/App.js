import React, { useState } from 'react';
import './index.css';
import { DashboardProvider, useDashboard } from './context/DashboardContext';
import Widget from './components/Widget';
import AddWidgetModal from './components/AddWidgetModal';

const AddWidgetPlaceholder = ({ onClick }) => (
  <div className="add-widget-placeholder" onClick={onClick}>
    <div className="add-widget-placeholder-content">
      <span className="material-icons">add</span>
      <span>Add Widget</span>
    </div>
  </div>
);


function Dashboard() {
  const { dashboardState } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const openModal = (categoryId) => {
    setActiveCategory(categoryId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveCategory(null);
  };
  
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <span className="header-title">Dashboard V2</span>
        </div>
        <div className="header-right">
          <button 
            className="header-btn" 
            onClick={() => openModal(dashboardState[0].categoryId)}
          >
            Add Widget
          </button>
          <button className="header-btn icon-btn"><span className="material-icons">refresh</span></button>
          <div className="header-dropdown">Last 2 days</div>
        </div>
      </header>

      <div className="dashboard-title">
        <h1>CNAPP Dashboard</h1>
      </div>

      <main className="dashboard">
        {dashboardState.map(category => (
          <section key={category.categoryId} className="dashboard-category">
            <div className="category-header">
              <h2>{category.categoryName}</h2>
            </div>
            <div className="widget-grid">
              {category.widgets.filter(w => w.isVisible).map(widget => (
                <Widget 
                  key={widget.widgetId} 
                  widget={widget} 
                  categoryId={category.categoryId}
                />
              ))}
              <AddWidgetPlaceholder onClick={() => openModal(category.categoryId)} />
            </div>
          </section>
        ))}
      </main>
      {isModalOpen && <AddWidgetModal categoryId={activeCategory} closeModal={closeModal} />}
    </div>
  );
}


function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;