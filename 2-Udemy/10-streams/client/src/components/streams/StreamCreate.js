import React from "react";
// reduxForm action is a function similar to connect
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { createStrem } from "../../actions";

// const StreamCreate = () => {
// 	return <div>StreamCreate</div>;
// };

class StreamCreate extends React.Component {
	renderError(meta, touched) {
		if (touched && meta) {
			return <div>{meta}</div>;
		}
	}
	renderInput = (formProps) => {
		console.log(formProps.meta);
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
		this.props.createStrem(formValues);
		formValues.title = "";
		formValues.description = "";
	};

	render() {
		console.log("this.props: ", this.props);
		return (
			<div className="container-fluid">
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field
						name="title"
						component={this.renderInput}
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

export default connect(null, { createStrem })(formWrapped);
