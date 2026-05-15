import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { UserProvider } from "./context/UserContext";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </UserProvider>
  </React.StrictMode>
);
