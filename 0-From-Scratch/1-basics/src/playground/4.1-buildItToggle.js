class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

		this.state = {
			visible: false,
		};
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visible: !prevState.visible,
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{!this.state.visible ? "Show Details" : "Hide Details"}
				</button>
				{this.state.visible && <p>Detials to show and hide</p>}
			</div>
		);
	}
}

const appRoot = document.querySelector("#app");
ReactDOM.render(<VisibilityToggle />, appRoot);
