import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const CommentDetail = (props) => {
	// in reusable components include via props the items that I will be using to return/render
	console.log("From commentDetail: props came from index", props);
	return (
		<div className="row">
			<div className="col-4">
				<a href="/">
					<img alt="avatar" className="img-thumbnail" src={props.image} />
				</a>
			</div>
			<div className="col-8">
				<a href="/" className="leaf text-decoration-none">
					{props.author + " "}
				</a>
				<span className="date">{" " + props.timeAgo}</span>
				<div className="lead">{props.comment}</div>
			</div>
		</div>
	);
};

// export the component so that I can use it elsewhere in my app
export default CommentDetail;
