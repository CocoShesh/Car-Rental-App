import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HandleModalProvider } from "./context/HandleModalContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HandleModalProvider>
      <App />
    </HandleModalProvider>
  </React.StrictMode>
);
