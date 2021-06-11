// stateless functional components

// localStorage.setItem(key, value)
// localStorage.getItem(key)

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: props.options,
		};
	}
	// Life Cycle methods: Stateless function components DO NOT manage any life cycle
	// as a result thet are faster
	// 1) gets/does something on render
	// renders on its own on window load
	componentDidMount() {
		// fetch data
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (err) {
			//Do nothing if JSON data is not valid
		}
	}
	// 2) checks for any updates on components
	componentDidUpdate(prevProps, prevState) {
		// save data to local storage
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
			console.log("Component did updated: Saving data");
		}
	}

	// fired before component goes away
	// clean up component. For example individual options that go away
	componentWillUnmount() {
		console.log("Component will unmount");
	}

	// Remove on item at a time. Passed this function down to multiple children components
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option),
		}));
	}

	// I can pass functions as props
	handleDeleteOptions() {
		this.setState(() => ({
			options: [],
		}));
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
			this.setState((prevState) => ({
				options: prevState.options.concat([option]),
			}));
		}
	}

	render() {
		const subtitle = "Put your life in the hands of a computer!!!";
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: [],
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: "Indecision",
};

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>
				What should I do?
			</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started</p>}
			{props.options.map((option, i) => (
				<Option
					key={i}
					optionText={option}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>
				Remove
			</button>
		</div>
	);
};

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
		this.setState(() => ({ error }));
		if (!error) {
			e.target.addOption.value = "";
		}
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

// Faster than class based components. No overhead / code that manages state
//
// const User = (props) => {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Age: {props.age}</p>
// 		</div>
// 	);
// };

ReactDOM.render(<IndecisionApp />, appRoot);

// ReactDOM.render(
// 	<IndecisionApp options={["Devils Den", "Second Dist"]} />,
// 	appRoot
// );
