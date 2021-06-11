import React from "react";

export default class AddOption extends React.Component {
	state = {
		error: undefined,
	};

	// don't delete this one because I am still doing some things from data in form
	handleAddOption = (e) => {
		e.preventDefault();
		const option = e.target.addOption.value.trim();

		// call the props here and pass data in
		const error = this.props.handleAddOption(option);
		this.setState(() => ({ error }));
		if (!error) {
			e.target.addOption.value = "";
		}
	};
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

// or use the line below
// export default AddOption;
