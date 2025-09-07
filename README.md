Dynamic CNAPP Dashboard - Frontend Assignment
This project is a dynamic and customizable dashboard application built with React. It was created as a solution for a frontend trainee assignment, focusing on component-based architecture, state management with the Context API, and data visualization with Chart.js. The goal was to replicate a provided UI mockup with full functionality.

Features
Dynamic Grid Layout: The entire dashboard, including categories and widgets, is rendered dynamically from a single JSON configuration file (dashboardData.json).

Add & Remove Widgets: Users can dynamically add or remove widgets from each category using an interactive modal.

State Management: Centralized state management is handled efficiently using React's Context API and the useReducer hook, allowing for actions like toggling widget visibility and resetting the dashboard state.

Data Visualization: Widgets display interactive charts (Doughnut and Stacked Bar) using the Chart.js and react-chartjs-2 libraries to represent data visually.

Search Functionality: The "Add Widget" modal includes a search bar to easily find and filter available widgets across different categories.

Interactive UI: Includes functional header buttons for adding widgets and refreshing the dashboard state without a page reload.

Technology Stack
React: A JavaScript library for building user interfaces.

React Hooks: useState, useReducer, and useContext for state management and component logic.

Chart.js & react-chartjs-2: For creating interactive and visually appealing charts.

CSS3: For custom styling, including modern techniques like CSS Grid, Flexbox, and custom properties for a clean and maintainable stylesheet.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

Prerequisites
Make sure you have Node.js and npm (or yarn) installed on your system.

Node.js: Download & Install Node.js

npm: Comes bundled with Node.js.

Installation & Setup
Create a new React project (if you are starting from scratch):

npx create-react-app my-dashboard-app
cd my-dashboard-app

Install project dependencies:
This project requires chart.js for data visualization. Install it along with its React wrapper.

npm install chart.js react-chartjs-2

Replace the code:
Copy the provided project files (App.js, index.css, components/, context/, data/) into the src folder of your new React app.

Run the development server:

npm start

The application will open automatically in your browser at http://localhost:3000.

Project Structure
The project follows a standard React application structure to keep the code organized and maintainable.

my-dashboard-app/
├── public/
│   └── index.html
├── src/
│   ├── components/       # Reusable React components
│   │   ├── charts/       # Chart-specific components
│   │   │   ├── DoughnutChart.js
│   │   │   └── StackedBarChart.js
│   │   ├── AddWidgetModal.js
│   │   └── Widget.js
│   ├── context/          # React Context for global state management
│   │   └── DashboardContext.js
│   ├── data/             # Static JSON data
│   │   └── dashboardData.json
│   ├── App.js            # Main application component
│   ├── index.css         # Global styles
│   └── index.js          # Entry point of the application
└── README.md

How It Works
The UI is driven by the src/data/dashboardData.json file. This file defines the categories and the list of all available widgets, including their type (e.g., 'doughnut'), content, and initial visibility.

Global state is managed in DashboardContext.js. The useReducer hook handles actions like TOGGLE_WIDGET and RESET_DASHBOARD.

The Widget.js component conditionally renders the correct content based on the type property in the JSON data, delegating to chart components or rendering plain text as needed.

The AddWidgetModal.js component allows users to toggle the isVisible property of any widget. The changes are dispatched to the central context, causing the UI to re-render in real-time.
