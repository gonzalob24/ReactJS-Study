import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<p>
				404 - <Link to="/">Go Home</Link>
			</p>
		</div>
	);
};

export default NotFound;
