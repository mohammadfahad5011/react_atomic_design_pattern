import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import DataContextApi from "./utils/DataContextApi";

ReactDOM.render(
  <DataContextApi>
    <App />
  </DataContextApi>,

  document.getElementById("root")
);
