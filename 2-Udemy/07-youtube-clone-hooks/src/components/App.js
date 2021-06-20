import React, { useEffect, useState } from "react";

// custom hooks
import useVideos from "../hooks/useVideos";

//components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// apis
// import youtubeapi from "../api/youtubeapi";

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos("buildings");

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="container-fluid card col-8 mt-4">
			<div className="row">
				<div className="col">
					<h1 className="display-6 text-center">YouTube Clone</h1>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<SearchBar onSearchSubmit={search} />
				</div>
			</div>
			<div className="row">
				<div className="col col-6">
					<VideoDetail video={selectedVideo} />
				</div>
				<div className="col col-6">
					<VideoList
						videos={videos}
						onVideoSelect={(video) => setSelectedVideo(video)}
					/>
				</div>
			</div>
		</div>
	);
};

/*
////////// ------ Older Code -------- ///////////////////
class App extends React.Component {
	state = {
		videos: [],
		// on first reder this is set to null
		selectedVideo: null,
	};

	onSearchSubmit = async (term) => {
		// console.log("Term from App: ", term);
		const videoReponse = await youtubeapi.get("/search", {
			params: { q: term },
		});

		console.log(videoReponse.data.items);
		this.setState({
			videos: videoReponse.data.items,
			selectedVideo: videoReponse.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		// console.log("onVideoSelect: ", video);
		this.setState({ selectedVideo: video });
	};
	// on first render call this
	componentDidMount() {
		this.onSearchSubmit("buildings");
	}

	render() {
		return (
			<div className="container-fluid card col-8 mt-4">
				<div className="row">
					<div className="col">
						<h1 className="display-6 text-center">YouTube Clone</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<SearchBar onSearchSubmit={this.onSearchSubmit} />
					</div>
				</div>
				<div className="row">
					<div className="col col-6">
						<VideoDetail video={this.state.selectedVideo} />
					</div>
					<div className="col col-6">
						<VideoList
							videos={this.state.videos}
							onVideoSelect={this.onVideoSelect}
						/>
					</div>
				</div>
			</div>
		);
	}
}
*/

export default App;
