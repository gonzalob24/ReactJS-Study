import React from "react";
import ReactDOM from "react-dom";

const App = () => {
	return (
		<div>
			<label className="label" htmlFor="name">
				Name:
			</label>
			<input type="text" id="name"></input>
			<button style={{ backgroundColor: "red" }}>Submit</button>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
