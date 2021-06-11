// contains jsx
// scripts in public will be auto generated
// npm i -g babel-cli
// npm i babel-preset-react babel-preset-env

/*
to run: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
 --watch listens for changes and I can keep it running
*/

console.log("app.js is running");

// JSX
// let template = React.createElement(
// 	"h1",
// 	{ id: "first" },
// 	"This is JSX from app.js"
// );

//=============================
// JSX expression go inside {}
// JSX conditional rendering / logic
// if statements
// ternary operator
// logical and operator

// Basic JSX
const getOptions = (options) => {
	if (options.length > 0) {
		return (
			<p>
				Here are your options:{" "}
				{options.map((option, i) => (
					<li key={i}>{option}</li>
				))}
			</p>
		);
	} else {
		return <p>No options</p>;
	}
};
const app = {
	title: "Gonzalo's Indecision App",
	subtitle: "Basic Info",
	options: ["One", "Two"],
};

let template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
		{getOptions(app.options)}
	</div>
);

// Reference a variable
let username = "Gonzalo B.";
let userAge = 34;
let userLocation = "Mars";

const user = {
	// username: "Gonzalo B.",
	userAge: 34,
	userLocation: "Mars",
};

const getLocation = (location) => {
	if (location) {
		// I can return jsx
		return <p>Location: {location}</p>;
	} else {
		return undefined; // nothing will show up
	}
};

const templateTwo = (
	<div>
		<h1>{user.username ? user.username : "Anonymous"}</h1>
		{user.userAge >= 18 && <p>Age: {user.userAge}</p>}
		{/* <p>Location: {getLocation(user.userLocation)}</p> */}
		{getLocation(user.userLocation)}
		{/* {<h3>My h3</h3>} */}
	</div>
);

ReactDOM.render(template, document.querySelector("#app"));
