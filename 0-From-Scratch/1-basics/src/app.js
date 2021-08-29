import React from "react";
import ReactDOM from "react-dom";

// components
import IndecisionApp from "./components/IndecisionApp";
// import IndecisionApp from "./components/IndecisionApp_old";

// load styles
import "./styles/styles.scss";

const appRoot = document.querySelector("#app");

ReactDOM.render(<IndecisionApp />, appRoot);
