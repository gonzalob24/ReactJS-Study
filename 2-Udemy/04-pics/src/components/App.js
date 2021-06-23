import React from "react";
import unsplash from "../api/unsplashAPI";

// Components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
	state = {
		images: [],
	};

	onSearchSubmit = async (term) => {
		const response = await unsplash.get("/search/photos", {
			params: {
				query: term,
			},
		});
		this.setState({ images: response.data.results });
	};

	componentDidMount() {}

	render() {
		console.log("Pics: ", this.props);
		return (
			<div className="container-fluid card col-8 mt-4">
				<div className="row text-center">
					<div className="col">
						<h1 className="display-4">App</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<SearchBar onSubmit={this.onSearchSubmit} />
						<ImageList images={this.state.images} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
