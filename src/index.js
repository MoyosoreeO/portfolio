import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UtilityContextProvider } from "./Components/Store/Context/UtilityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UtilityContextProvider>
    <App />
  </UtilityContextProvider>
);
