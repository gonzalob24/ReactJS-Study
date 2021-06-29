import React from "react";
// There are three routers
import {
	BrowserRouter,
	HashRouter,
	MemoryRouter,
	Route,
	Link,
} from "react-router-dom";

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
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={StreamList} />
				<Route path="/streams/new" exact component={StreamCreate} />
				<Route path="/streams/edit" exact component={StreamEdit} />
				<Route path="/streams/delete" exact component={StreamDelete} />
				<Route path="/streams/show" exact component={StreamShow} />
			</BrowserRouter>
		</div>
	);
};

export default App;
