// Creating react components
// props : passing data in to components via component props
// const obj = {
// 	name: "Gonzalo",
// 	getName() {
// 		return this.name;
// 	},
// };
// The this binding is broken like in handleRemoveAll()
// bind() is expensive as it needs to run everytime we need it. A better fix is to override the constructor funciton.
// const getName = obj.getName.bind(obj);
// console.log(getName());

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: [],
		};
	}
	// I can pass functions as props
	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: [],
			};
		});
	}

	handlePick() {
		const random = Math.floor(Math.random() * this.state.options.length);
		alert(this.state.options[random]);
	}

	handleAddOption(option) {
		// console.log("from IA", option);
		if (!option) {
			return "Enter valid value to add item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option already exist";
		} else {
			this.setState((prevState) => {
				return {
					options: prevState.options.concat([option]),
				};
			});
		}
	}

	render() {
		const title = "Indecision";
		const subtitle = "Put your life in the hands of a computer!";
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	// handlePick() {
	// 	alert("Handle pick");
	// }

	render() {
		return (
			<div>
				<button
					onClick={this.props.handlePick}
					disabled={!this.props.hasOptions}
				>
					What should I do?
				</button>
			</div>
		);
	}
}

class Options extends React.Component {
	// props in constructor function is the same as this.props in components
	// constructor(props) {
	// 	super(props);
	// 	this.handleRemoveAll = this.handleRemoveAll.bind(this);
	// }
	// handleRemoveAll() {
	// 	console.log("This.props", this.props.options);
	// 	// alert("remove all");
	// }
	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
				{this.props.options.map((option, i) => (
					<Option key={i} optionText={option} />
				))}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <div>{this.props.optionText}</div>;
	}
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);

		this.state = {
			error: undefined,
		};
	}
	// don't delete this one because I am still doing some things from data in form
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.addOption.value.trim();

		// call the props here and pass data in
		const error = this.props.handleAddOption(option);
		console.log(error);
		this.setState(() => {
			return {
				error,
			};
		});

		e.target.addOption.value = "";
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="addOption" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

// const jsx = (
// 	<div>
// 		<Header />
// 		<Action />
// 		<Options />
// 		<AddOption />
// 	</div>
// );

const appRoot = document.querySelector("#app");
ReactDOM.render(<IndecisionApp />, appRoot);
