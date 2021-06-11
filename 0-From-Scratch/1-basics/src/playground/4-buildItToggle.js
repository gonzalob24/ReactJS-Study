let show = false;
const onToggle = () => {
	// if (show) {
	// 	show = false;
	// } else {
	// 	show = true;
	// }
	show = !show;
	render();
};
const appRoot = document.querySelector("#app");

const render = () => {
	const visibilityToggle = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={onToggle}>
				{show ? "Hide details" : "Show details"}
			</button>
			{show ? <p>The information in the p tag</p> : undefined}
		</div>
	);
	ReactDOM.render(visibilityToggle, appRoot);
};
render();
