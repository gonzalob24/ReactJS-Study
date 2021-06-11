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
	options: [],
};
const onFormSubmit = (e) => {
	e.preventDefault();
	// const option = e.target.option.value;
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
	}
	e.target.elements.option.value = "";
	renderApp();
};

const onRemoveAll = () => {
	app.options = [];
	renderApp();
};

const appRoot = document.querySelector("#app");
//Warning: Each child in an array or iterator should have a unique "key" prop.
// with jsx tag a key prop to each jsx. They key optimizes the rendering process
//
const onMakeDecision = () => {
	const randNumber = Math.floor(Math.random() * app.options.length);
	const option = app.options[randNumber];
	alert(option);
};
const renderApp = () => {
	let template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>
				{app.options.length > 0 ? "Here are your options: " : "No options:"}
			</p>
			{/* <p>{app.options.length}</p> */}
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
				What should I do?
			</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{app.options.map((option, i) => (
					<li key={i}>{option}</li>
				))}
			</ol>

			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

renderApp();
