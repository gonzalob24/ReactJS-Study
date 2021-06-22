import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// components
import App from "./components/App";

// Reducers
import reducers from "./reducers";

//css
import "bootstrap/dist/css/bootstrap.css";
// pass instance of the store as a prop to the Provider instance
// now any component in App will have access to the store
//https://react-redux.js.org/api/provider
// it makes the store available to nested components
ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
