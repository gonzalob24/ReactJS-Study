import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
	return (
		<div>
			<h2>My Work</h2>
			<p>Take a look at some of my work</p>
			<Link to="/portfolio/1">Thing 1 </Link>
			<Link to="/portfolio/2">Thing 2 </Link>
			<Link to="/portfolio/3">Thing 3 </Link>
		</div>
	);
};

export default Portfolio;
