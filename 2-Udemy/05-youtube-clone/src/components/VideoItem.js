import React from "react";

// css
import "./VideoItem.css";

const VideoItem = (props) => {
	return (
		<div className="container mb-3 video-item">
			<div className="card">
				<div className="row g-0">
					<div className="col d-inline" style={{ maxWidth: "180px" }}>
						<img
							src={props.snippet.thumbnails.medium.url}
							className="img-fluid rounded"
						></img>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<p className="card-text">{props.snippet.title}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
