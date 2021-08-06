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
	/* 
		constructor belongs to JS language: called when instance of the App component is created
		it is automatically called with the props object, then call the super(props).
		The constructor overrides the constructor inside React.Component
		super: reference to the parents constructor function
	*/

	// constructor(props) {
	// 	super(props);
	// initialize state. This is the only time we do direct assignment to this.state
	// this.state = {
	// 	lat: null,
	// 		errorMessage: "",
	// 	};
	// }
	// state by itself: I don't need to constructor; Babel takes code and implements the
	// constructor function for me and initialized the state for me.
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

	// need to define this render method, render gets called very frequently, all of the time
	// this will impact performace
	render() {
		console.log("seasons: ", this.props);
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

/**************************************************** */
const AppOld = () => {
	window.navigator.geolocation.getCurrentPosition(
		(position) => console.log(position),
		(err) => console.log(err)
	);
	return (
		<div>
			<h2>Hey!!</h2>
			{/* I need to keep track of state: so use a class component for now */}
			<h2>{"Latitude: "}</h2>
		</div>
	);
};

const rootApp = document.querySelector("#root");

ReactDOM.render(<App />, rootApp);
