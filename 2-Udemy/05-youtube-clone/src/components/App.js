import React from "react";

//components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
// apis
import youtubeapi from "../api/youtubeapi";

class App extends React.Component {
	state = {
		videos: [],
	};

	onSearchSubmit = async (term) => {
		// console.log("Term from App: ", term);
		const videoReponse = await youtubeapi.get("/search", {
			params: { q: term },
		});
		console.log(videoReponse.data.items);
		this.setState({ videos: videoReponse.data.items });
	};

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
						<VideoList videos={this.state.videos} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
