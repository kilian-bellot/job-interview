import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ColorContext, colorValues } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ColorContext.Provider value={colorValues}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
