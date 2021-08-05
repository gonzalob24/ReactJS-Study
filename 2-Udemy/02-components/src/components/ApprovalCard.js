import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ApprovalCard = (props) => {
	console.log("From ApprovalCard", props);
	return (
		<div className="container mb-5">
			<div className="card" style={{ width: "20rem" }}>
				<div>{props.children}</div>
				<div className="card-body p-0">
					<a href="/" className="btn btn-primary">
						Approve
					</a>
					<a href="/" className="btn btn-danger mx-3">
						ReJect
					</a>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
