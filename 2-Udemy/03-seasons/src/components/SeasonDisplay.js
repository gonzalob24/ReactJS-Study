import React from "react";

import { Snow, Sun } from "react-bootstrap-icons";

import "./seasonStyle.css";

const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: "summer",
	},
	winter: {
		text: "Burr, it's cold!",
		iconName: "winter",
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat < 0 ? "winter" : "summer";
	}
};
const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];
	return (
		<div className={`seasonDisplay ${iconName}`}>
			{iconName === "summer" ? (
				<Sun id={"icon-left"} size={96} />
			) : (
				<Snow id={"icon-left"} size={96} />
			)}
			<h1>{text}</h1>
			{iconName === "summer" ? (
				<Sun id={"icon-right"} size={96} />
			) : (
				<Snow id={"icon-right"} size={96} />
			)}{" "}
		</div>
	);
};

export default SeasonDisplay;
