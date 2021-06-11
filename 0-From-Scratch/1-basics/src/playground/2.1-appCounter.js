class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleSubtractOne = this.handleSubtractOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		// initialize the state of counter
		this.state = {
			count: props.count,
			name: "Gonzalo",
		};
	}

	handleAddOne() {
		// dont manually update the object b/c it won't rerender
		// this.state.count = this.state.count + 1;
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	}
	handleSubtractOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1,
			};
		});
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0,
			};
		});
	}
	render() {
		return (
			<div>
				<h1>{this.state.name}'s Counter</h1>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleSubtractOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}
}

Counter.defaultProps = {
	count: 0,
};

const appRoot = document.querySelector("#app");

ReactDOM.render(<Counter />, appRoot);
