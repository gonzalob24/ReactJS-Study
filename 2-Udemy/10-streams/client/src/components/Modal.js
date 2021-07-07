import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
	// onClick={() => history.push("/")}

	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active" onClick={props.onDismiss}>
			<div
				// stop propagation: makes sure that the event does not bubble up
				onClick={(e) => e.stopPropagation()}
				className="ui standard modal visible active"
			>
				<div className="header">{props.title}</div>
				<div className="content">{props.content}</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

export default Modal;
