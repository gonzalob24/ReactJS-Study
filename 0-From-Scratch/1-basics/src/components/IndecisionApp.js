import React from "react";

// components
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
	state = {
		options: this.props.options,
		selectedOption: undefined,
	};
	// Remove on item at a time. Passed this function down to multiple children components
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option),
		}));
	};

	// I can pass functions as props
	handleDeleteOptions = () => {
		this.setState(() => ({
			options: [],
		}));
	};

	handlePick = () => {
		const random = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[random];
		this.setState(() => ({
			selectedOption: option,
		}));
	};

	handleAddOption = (option) => {
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
	};

	handleClearSelectedOption = () => {
		this.setState(() => ({
			selectedOption: undefined,
		}));
	};

	// Life Cycle methods:
	// 1) gets/does something on render
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
	// 2) checks for any updates
	componentDidUpdate(prevProps, prevState) {
		// save data to local storage
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
			console.log("Component did updated: Saving data");
		}
	}

	// fired before component goes away
	componentWillUnmount() {
		console.log("Component will unmount");
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
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: [],
};
