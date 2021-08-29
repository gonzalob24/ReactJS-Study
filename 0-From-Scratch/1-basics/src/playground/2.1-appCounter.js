class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleSubtractOne = this.handleSubtractOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		// initialize the state of counter
		this.state = {
			count: 0,
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

	componentDidMount() {
		console.log("Mounting..");
		try {
			const num = localStorage.getItem("num");
			const parsedNum = parseInt(num, 10);
			if (!isNaN(parsedNum)) {
				this.setState(() => ({ count: parsedNum }));
			}
		} catch (err) {
			//
		}
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("Updating..");
		if (prevState.count !== this.state.count) {
			localStorage.setItem("num", this.state.count);
		}
	}

	componentWillUnmount() {
		console.log("Unmounting");
	}
	render() {
		console.log(this.state.count);
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

// Counter.defaultProps = {
// 	count: 0,
// };

const appRoot = document.querySelector("#app");

ReactDOM.render(<Counter />, appRoot);
