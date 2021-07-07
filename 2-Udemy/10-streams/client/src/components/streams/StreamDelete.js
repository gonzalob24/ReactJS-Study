import React from "react";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

// Components
import Modal from "../Modal";
// turned this into a class based component to use life cycle method
class StreamDelete extends React.Component {
	// React fragment, jsx element to return multiple elements without a parent div
	// I can also use <> </> syntax.
	//
	// const actions = (
	// 	<React.Fragment>
	// 		<button className="ui button negative">Delete</button>
	// 		<button className="ui button" onClick={() => history.push("/")}>
	// 			Cancel
	// 		</button>
	// 	</React.Fragment>
	// )

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	renderActions() {
		return (
			<React.Fragment>
				<button
					className="ui button negative"
					onClick={() => {
						this.props.deleteStream(this.props.match.params.id);
					}}
				>
					Delete
				</button>
				<Link className="ui button" to="/">
					Cancel
				</Link>
			</React.Fragment>
		);
	}
	renderContent() {
		if (!this.props.stream) {
			return "Are you sure?";
		}

		return `Are you sure you want to delete the stram with title: ${this.props.stream.title}`;
	}
	render() {
		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push("/")}
			/>
		);
	}
}

const mapStateToprops = (state, ownProps) => {
	// connect to react redux store
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToprops, { fetchStream, deleteStream })(
	StreamDelete
);
