import React from "react";
// There are three routers
import {
	BrowserRouter,
	HashRouter,
	MemoryRouter,
	Route,
	Link,
	Router,
} from "react-router-dom";

import history from "../history";

// components
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

import "bootstrap/dist/js/bootstrap";

const App = () => {
	return (
		<div>
			{/* Now I have access to the history object within my action creators */}
			<Router history={history}>
				<Header />
				<Route path="/" exact component={StreamList} />
				<Route path="/streams/new" exact component={StreamCreate} />
				<Route path="/streams/edit/:id" exact component={StreamEdit} />
				<Route path="/streams/delete/:id" exact component={StreamDelete} />
				<Route path="/streams/show" exact component={StreamShow} />
			</Router>
		</div>
	);
};

export default App;
