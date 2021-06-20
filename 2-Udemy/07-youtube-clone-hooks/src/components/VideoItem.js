import React from "react";

// css
import "./VideoItem.css";

const VideoItem = (props) => {
	return (
		<div
			className="container mb-3 video-item"
			onClick={() => {
				props.onVideoSelect(props.snippet);
			}}
		>
			<div className="card">
				<div className="row g-0">
					<div className="col d-inline" style={{ maxWidth: "180px" }}>
						<img
							src={props.snippet.snippet.thumbnails.medium.url}
							className="img-fluid rounded"
							alt={props.snippet.snippet.title}
						></img>
					</div>
					<div className="col-md-7">
						<div className="card-body">
							<p className="card-text" style={{ fontSize: "0.9rem" }}>
								{props.snippet.snippet.title}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
