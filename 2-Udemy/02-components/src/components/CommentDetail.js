import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const CommentDetail = (props) => {
	return (
		<div className="row">
			<div className="col-4">
				<a href="/">
					<img alt="avatar" className="img-thumbnail" src={props.image} />
				</a>
			</div>
			<div className="col-8">
				<a href="/" className="lead">
					{props.author + " "}
				</a>
				<span className="date">{" " + props.timeAgo}</span>
				<div className="lead">{props.comment}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
