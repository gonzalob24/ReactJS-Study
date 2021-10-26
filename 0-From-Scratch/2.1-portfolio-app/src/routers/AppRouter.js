import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Header from "../components/Header";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import DemoWork from "../components/DemoWork";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/portfolio" exact component={Portfolio} />
					<Route path="/portfolio/:id" component={DemoWork} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;
