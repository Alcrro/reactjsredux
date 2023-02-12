import React from "react";
// React-dom/client is the new way to import react-dom
// Package provides a new API for rendering to the DOM
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
