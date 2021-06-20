import React, { useState, useEffect } from "react";

import youtubeapi from "../api/youtubeapi";

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);
	// const [selectedVideo, setSelectedVideo] = useState(null);
	// adding defaultSearchTerm inside of the [] sovles stale data references
	// optimizes code
	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		// console.log("Term from App: ", term);
		const videoReponse = await youtubeapi.get("/search", {
			params: { q: term },
		});
		setVideos(videoReponse.data.items);
		// setSelectedVideo(videoReponse.data.items[0]);
	};

	// I can return an object or an array
	// return {videos, onSearchSubmit};
	return [videos, search];
};

export default useVideos;
