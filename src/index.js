import React from "react";
import ReactDOM from "react-dom";
// Components imports
import App from "./App";
//framework for responsive, pretty layouts
import 'semantic-ui-css/semantic.min.css'
// CSS imports
import "./css/index.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
