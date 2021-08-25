import React from "react";
import ReactDOM from "react-dom";
import Header from "./common/header/header";
import RouteTable from "./common/routeprocess";
import "./index.css";
import page from './common/main'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <RouteTable/>
  </React.StrictMode>,
  document.getElementById("root")
);
