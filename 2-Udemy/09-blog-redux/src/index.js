import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// components
import App from "./components/App";

// reducer
import reducers from "./reducers";

// middleware
import thunk from "redux-thunk";

// css
import "bootstrap/dist/css/bootstrap.css";

// connect/apply middleware to redux store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
