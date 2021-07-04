import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

// actions
import { fetchStream } from "../../actions";
import { editStream } from "../../actions";

// Components
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
	componentDidMount() {
		// needs to call its own data
		this.props.fetchStream(this.props.match.params.id);
		console.log("StreamEdit: ", this.props);
	}
	// don't push up values that did not change formValues has everything in the form two input fields here
	onSubmit = (formValues) => {
		// calback for stream form
		console.log("Stream Edit: ", formValues);
		// instead of console log do something
		this.props.editStream(this.props.match.params.id, formValues);
	};
	render() {
		// console.log("StreamEdit: ", this.props);
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit Stream</h3>
				<StreamForm
					onSubmit={this.onSubmit}
					// initialValues={{ title: "Edit Me", description: "Change me too" }}
					// I am passing in the entire stream so the reduxForm will also show id, userId
					// Dont show values that did not change
					// initialValues={this.props.stream}
					// using lodash
					// initialize={_.pick(this.props.stream, 'title', 'description')}
					initialValues={{
						title: this.props.stream.title,
						description: this.props.stream.description,
					}}
				/>
			</div>
		);
	}
}

// ownProps can access the props passed in to StreamEdit
const mapStateToProps = (state, ownProps) => {
	console.log("ownProps", ownProps);
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);

// const StreamEdit = (props) => {
// 	console.log("StreamEdit: ", props);
// 	return <div>StreamEdit</div>;
// };
// // ownProps can access the props passed in to StreamEdit
// const mapStateToProps = (state, ownProps) => {
// 	console.log("ownProps", ownProps);
// 	return {
// 		stream: state.streams[ownProps.match.params.id],
// 	};
// };
