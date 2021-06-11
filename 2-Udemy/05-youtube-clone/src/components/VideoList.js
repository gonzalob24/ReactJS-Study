import React from "react";

import VideoItem from "./VideoItem";

const VideoList = (props) => {
	const videosList = props.videos.map((video) => {
		return <VideoItem key={video.id.videoId} snippet={video.snippet} />;
	});
	return <div>{videosList}</div>;
};

export default VideoList;
