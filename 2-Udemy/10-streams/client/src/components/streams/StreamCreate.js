import React from "react";
import { connect } from "react-redux";

// actions
import { createStream } from "../../actions";

// Components
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		// Dont have to call this redux-form does it on its own
		// e.preventDefault();
		// console.log("form values", formValues);
		this.props.createStream(formValues);
	};

	render() {
		console.log("this.props: ", this.props);
		return (
			<div className="container-fluid">
				{/* handleSubmit is a redux-form callback */}
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
