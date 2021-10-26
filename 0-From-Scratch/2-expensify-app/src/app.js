import React from "react";
import ReactDOM from "react-dom";

// components
import Approuter from "./routers/AppRouter";
// load styles
// import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<Approuter />, document.querySelector("#app"));
