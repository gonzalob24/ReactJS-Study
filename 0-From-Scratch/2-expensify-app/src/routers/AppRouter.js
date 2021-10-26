import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

//components
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpenseDashboardPage from "../components/AddExpenseDashboardPage";
import EditExpenseDashboardPage from "../components/EditExpenseDashboardPage";
import HelpExpenseDashboardPage from "../components/HelpExpenseDashboardPage";
import Header from "../components/Header";
import NotFound from "../components/NotFound";

const Approuter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={ExpenseDashboardPage} />
					<Route path="/create" component={AddExpenseDashboardPage} />
					<Route path="/edit/:id" component={EditExpenseDashboardPage} />
					<Route path="/help" component={HelpExpenseDashboardPage} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default Approuter;
