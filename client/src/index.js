import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById("root")
);
