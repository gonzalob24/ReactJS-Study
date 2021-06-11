import React from "react";
import { render } from "react-dom";
import Modal from "react-modal";

const OptionModal = (props) => {
	return (
		<Modal
			isOpen={!!props.selectedOption}
			contentLabel="selected option"
			onRequestClose={props.handleClearSelectedOption}
			appElement={document.querySelector("#app")}
		>
			<h3>Selected Option</h3>
			{props.selectedOption && <p>{props.selectedOption}</p>}
			<button onClick={props.handleClearSelectedOption}>Close Me!</button>
		</Modal>
	);
};

export default OptionModal;
