import React from "react";

import VideoItem from "./VideoItem";

const VideoList = (props) => {
	// console.log("From videoList", props);
	const videosList = props.videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				snippet={video}
				onVideoSelect={props.onVideoSelect}
			/>
		);
	});

	return <div>{videosList}</div>;
};

export default VideoList;
