import React from "react";
import { PersonPlus } from "react-bootstrap-icons";

const Spinner = (props) => {
	return (
		<div
			className="container-fluid d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<div className="row">
				<div className="col text-center">
					<div className="spinner-border text-light" role="status"></div>
					<span className="d-block text-light">{props.message}</span>
				</div>
			</div>
			{/* <div class="row">
				<div class="col ">
					<div class="text-light">Click Allow</div>
				</div>
			</div> */}
		</div>
	);
};

Spinner.defaultProps = {
	message: "Loading...",
};
export default Spinner;
