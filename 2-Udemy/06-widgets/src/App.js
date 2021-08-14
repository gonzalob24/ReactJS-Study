import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Navbar from "./components/Navbar";

import "bootstrap/dist/js/bootstrap";

const App = () => {
	const items = [
		{ title: "What is React?", content: "React is a front end js framework" },
		{ title: "Why use React?", content: "React is a a favorite framework" },
		{
			title: "How do you use React?",
			content: "Use it by creating components",
		},
	];
	const options = [
		{ label: "Select a Color", value: "" },
		{
			label: "The color Red",
			value: "red",
		},
		{
			label: "The color Green",
			value: "gren",
		},
		{
			label: "The color Blue",
			value: "blue",
		},
	];

	const [selectedItem, setSelectedItem] = useState(options[0]);
	// const [showDropdown, setShowDropdown] = useState(true);

	const showComponent = (route, component) => {
		return window.location.pathname === route ? component : null;
	};

	const showAccordion = () => {
		if (window.location.pathname === "/") {
			return <Accordion items={items} />;
		}
	};

	const showList = () => {
		if (window.location.pathname === "/list") {
			return <Search />;
		}
	};

	const showDropdown = () => {
		if (window.location.pathname === "/dropdown") {
			return (
				<DropDown
					label="Select a Color"
					options={options}
					// onSelectChange is an event
					onSelectChange={setSelectedItem}
					selected={selectedItem}
				/>
			);
		}
	};

	const showTranslate = () => {
		if (window.location.pathname === "/translate") {
			return <Translate />;
		}
	};
	return (
		<div>
			<Navbar />
			<Route path="/">
				{/* This accordion component is treated as a children prop in path */}
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<DropDown
					label="Select a Color NOW!!"
					options={options}
					onSelectChange={setSelectedItem}
					selected={selectedItem}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			{/* {showAccordion()} */}
			{/* {showList()} */}
			{/* {showDropdown()} */}
			{/* {showTranslate()} */}
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			{/* <button
				onClick={() => {
					setShowDropdown(!showDropdown);
				}}
			>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<DropDown
					options={options}
					onSelectChange={setSelectedItem}
					selected={selectedItem}
				/>
			) : null} */}
			{/* <Translate /> */}
		</div>
	);
};

export default App;
