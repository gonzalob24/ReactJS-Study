import React from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";

const App = () => {
	const items = [
		{ title: "What is React?", content: "React is a front end js framework" },
		{ title: "Why use React?", content: "React is a a favorite framework" },
		{
			title: "How do you use React?",
			content: "Use it by creating components",
		},
	];
	return (
		<div>
			{/* <Accordion items={items} /> */}
			<Search />
		</div>
	);
};

export default App;
