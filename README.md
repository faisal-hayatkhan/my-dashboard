# Dynamic CNAPP Dashboard (Create React App)

This project is a dynamic and customizable dashboard application built
with React, bootstrapped with Create React App. It was created as a
solution for a frontend trainee assignment, focusing on modern React
principles like hooks for state management, component-based
architecture, and data visualization.

## ✨ Features

-   **Fully Dynamic**: The entire dashboard, including categories and
    widgets, is rendered from a single JSON object.
-   **Add & Remove Widgets**: Users can dynamically add or remove
    widgets from each category using an interactive modal.
-   **Centralized State Management**: State is handled efficiently using
    React's Context API and `useReducer` hook.
-   **Data Visualization**: Widgets display interactive charts (Doughnut
    and Stacked Bar) using the Chart.js library.
-   **Search Functionality**: The "Add Widget" modal includes a search
    bar to easily filter available widgets.
-   **Reset to Default**: A refresh button instantly resets the
    dashboard to its initial state.

## 🛠 Technology Stack

-   **React**: A JavaScript library for building user interfaces.
-   **React Hooks**: `useState`, `useReducer`, `useContext`, and
    `createContext`.
-   **Chart.js & react-chartjs-2**: For creating interactive and
    visually appealing charts.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your
local machine.

### Prerequisites

You must have **Node.js** (which includes npm) installed on your system.

### Installation & Setup

1.  **Create a new React project**:

    ``` bash
    npx create-react-app my-dashboard-app
    cd my-dashboard-app
    ```

2.  **Install Dependencies**: This project requires chart.js. Install it
    along with its React wrapper.

    ``` bash
    npm install chart.js react-chartjs-2
    ```

3.  **Replace the Code**: Open the `src/` folder. Replace the contents
    of `App.js` and `index.css` with the code provided for this project.

### Available Scripts

In the project directory, you can run:

-   **`npm start`**\
    Runs the app in the development mode.\
    Open <http://localhost:3000> to view it in your browser.\
    The page will reload when you make changes.\
    You may also see any lint errors in the console.

-   **`npm run build`**\
    Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the
    build for the best performance.\
    Your app is ready to be deployed!\
    See the section about deployment for more information.

-   **`npm test`**\
    Launches the test runner in the interactive watch mode.\
    See the section about running tests for more information.

## ⚙️ How It Works

This project is a great example of a moderately complex application
built within a single file. Here's a breakdown of its architecture:

### Data Source (`initialData`)

A constant JavaScript object at the top of the file acts as our
"database." It defines the structure, content, and initial state of all
widgets.

### State Management (`DashboardContext`)

-   A `dashboardReducer` function handles all state transitions
    (toggling widget visibility, resetting the dashboard).
-   `DashboardProvider` wraps the main application, making the state and
    dispatch function available to all child components via the
    `useDashboard` custom hook.

### Components

-   All components (`DoughnutChart`, `Widget`, `AddWidgetModal`, etc.)
    are defined as functions within the same file.
-   The `Widget` component conditionally renders the correct content (a
    chart or text) based on the `type` property defined in the
    `initialData` object.

------------------------------------------------------------------------
