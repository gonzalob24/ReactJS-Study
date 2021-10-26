import React from "react";

const DemoWork = (props) => {
	console.log(props);
	return (
		<div>
			<h2>A Thing I've Done</h2>
			<p>This page if for the item with id of {props.match.params.id}</p>
		</div>
	);
};

export default DemoWork;
