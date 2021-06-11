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
// class is now called className
let count = 0;
const addOne = () => {
	count++;
	console.log("addOne: ", count);
	renderCounterApp();
};
const minusOne = () => {
	count--;
	console.log("minusOne: ", count);
	renderCounterApp();
};
const reset = () => {
	count = 0;
	console.log("Reset: ", count);
	renderCounterApp();
};

// Data binding: we need tempalte and ReactDOM to rerun later when count changes
// I can create a function and rerender when buttons are clicked
const appRoot = document.querySelector("#app");

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button id="count" className="button" onClick={addOne}>
				+1
			</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
