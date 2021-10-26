import React from "react";

const EditExpenseDashboardPage = (props) => {
	console.log("props: ", props);
	return (
		<div>
			<p>Edit item with id: {props.match.params.id}</p>
		</div>
	);
};

export default EditExpenseDashboardPage;
