import React from "react";
// reduxForm action is a function similar to connect
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { createStream } from "../../actions";

// const StreamCreate = () => {
// 	return <div>StreamCreate</div>;
// };

class StreamCreate extends React.Component {
	renderError(meta, touched) {
		if (touched && meta) {
			return <div>{meta}</div>;
		}
	}
	// whenever the component propery is inside a Field
	// this method will recieve  an argument with many props --> formProps
	// add all properties to input element tag {...formProps.input}
	renderInput = (formProps) => {
		console.log("Form Pops:", formProps);
		return (
			<div>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						{formProps.label}
					</label>
					<input
						{...formProps.input}
						type="text"
						className="form-control"
						id="title"
						autoComplete="off"
					/>
					{this.renderError(formProps.meta.error, formProps.meta.touched)}
					{/* <div>{formProps.meta.error}</div> */}
				</div>
			</div>
		);
	};

	onSubmit = (formValues) => {
		// Dont have to call this redux-form does it on its own
		// e.preventDefault();
		// console.log("form values", formValues);
		this.props.createStream(formValues);
		formValues.title = "";
		formValues.description = "";
	};

	render() {
		console.log("this.props: ", this.props);
		return (
			<div className="container-fluid">
				{/* handleSubmit is a redux-form callback */}
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field
						name="title"
						component={this.renderInput}
						// redux-form, Field does not know how to handle lable, but it is passed to render input as a prop
						label="Enter Title"
					/>
					<Field
						name="description"
						component={this.renderInput}
						label="Enter Description"
					/>
					<button className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

// form validation
const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = "You must enter a title";
	}
	if (!formValues.description) {
		errors.description = "You must enter a description";
	}

	return errors;
};

// pass only one object
// Also connect the actions methods
const formWrapped = reduxForm({
	form: "streamCreate",
	validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
