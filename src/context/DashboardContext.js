import React, { createContext, useReducer, useContext } from 'react';
import initialData from '../data/dashboardData.json';

const DashboardContext = createContext();

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_WIDGET': {
      const { categoryId, widgetId } = action.payload;
      return state.map(category => {
        if (category.categoryId === categoryId) {
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
    }
    case 'RESET_DASHBOARD': {
      return initialData;
    }
    default:
      return state;
  }
};

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialData);

  return (
    <DashboardContext.Provider value={{ dashboardState: state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
