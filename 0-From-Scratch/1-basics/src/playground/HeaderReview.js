class IndecisionApp extends React.Component {
	render() {
		const options = ["1", "2", "3", "4"];
		return (
			<div>
				<Header title="Indecision APp" />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		);
	}
}

class Options extends React.Component {
	// props gets passed
	constructor(props) {
		// to make sure props gets set
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll() {
		console.log(this.props.options);
	}
	render() {
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
				{this.props.options.map((item, i) => {
					return <p key={i}>{item}</p>;
				})}
			</div>
		);
	}
}

// option component
class Option extends React.Component {
	render() {
		return <div>Option here</div>;
	}
}

class AddOption extends React.Component {
	render() {
		return (
			<div>
				<h1>Add Option</h1>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should I do</button>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		console.log("Props: ", this.props);
		return (
			<div>
				<h1>Indecision App</h1>
				<h2>Put your life in the hands of your computer!</h2>
			</div>
		);
	}
}

// const jsx = (
// 	<div>
// 		<h1>Title</h1>
// 		<Header />
// 		<Action />
// 		<Options />
// 		<AddOption />
// 	</div>
// );

ReactDOM.render(<IndecisionApp />, document.querySelector("#app"));
