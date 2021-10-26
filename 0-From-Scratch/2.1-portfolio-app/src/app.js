import React from "react";
import ReactDOM from "react-dom";

// components
import AppRouter from "./routers/AppRouter";

// load styles
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.querySelector("#app"));
