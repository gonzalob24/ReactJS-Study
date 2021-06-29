import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

// 859368255371-7ik0ol129mtqvhtooag7n3mgn2mvfsnn.apps.googleusercontent.com

// components
import App from "./components/App";

// reducers
import reducers from "./reducers";

// css
import "bootstrap/dist/css/bootstrap.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
