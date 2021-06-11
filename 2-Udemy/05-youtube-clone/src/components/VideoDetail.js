import React from "react";

const VideoDetail = (props) => {
	console.log(props);
	if (!props.video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
	return (
		<div className="container">
			<div className="ratio ratio-16x9">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div className="card mt-4 mb-4">
				{/* <div className="row">
					<div className="col ratio ratio-16x9">
						<iframe src={videoSrc} />
					</div>
				</div> */}
				<div className="row">
					<div className="col">
						<h4 className="display-6" style={{ fontSize: "1.5rem" }}>
							{props.video.snippet.title}
						</h4>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p className="">{props.video.snippet.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
