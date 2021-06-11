import React from "react";
import ReactDOM from "react-dom";

// Fake Data
import faker from "faker";

// Components
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/spinner";

// CSS bootstrap
import "bootstrap/dist/css/bootstrap.css";

// import "semantic-ui-css/semantic.min.css";

// Life cycles with state system
class App extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	// this.state = {
	// 	// 	lat: null,
	// 	// 	errorMessage: "",
	// 	// };
	// }
	// state by itseld
	state = {
		lat: null,
		errorMessage: "",
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState((prevState) => {
					return { lat: position.coords.latitude };
				});
			},
			(err) => {
				this.setState((prevState) => {
					return { errorMessage: err.message };
				});
			}
		);
	}

	componentDidUpdate() {
		console.log("Component updated automatically");
	}
	// need to define this render method
	render() {
		return (
			<div className="border border-3 border-danger">
				{!this.state.lat && !this.state.errorMessage && (
					<Spinner message={"Please Accept Location Request"} />
				)}
				{this.state.lat && <SeasonDisplay lat={this.state.lat} />}
				<br />
				{this.state.errorMessage && <div>Error: {this.state.errorMessage}</div>}
			</div>
		);
	}
}

const rootApp = document.querySelector("#root");

ReactDOM.render(<App />, rootApp);
