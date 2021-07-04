import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { CameraFill } from "react-bootstrap-icons";

// const StreamList = () => {
// 	return <div>StreamList</div>;
// };
// use class based component b/c I want to call action creator in componentDidMount one time

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdmin(stream) {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="col align-self-center text-end">
					<Link className="btn btn-primary" to={`/streams/edit/${stream.id}`}>
						Edit
					</Link>{" "}
					<Link className="btn btn-danger" to={`/streams/delete`}>
						Delete
					</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.streams.map((stream) => {
			return (
				<li key={stream.id} className="list-group-item">
					<div className="row">
						<div className="col-1 text-center">
							<CameraFill />
						</div>
						<div className="col text-start">
							{stream.title}
							<p>{stream.description}</p>
						</div>
						{this.renderAdmin(stream)}
					</div>
				</li>
			);
		});
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<Link className="btn btn-success float-end mt-3" to="/streams/new">
					Create Stream
				</Link>
			);
		}
	}
	render() {
		console.log("All streams: ", this.props.streams);
		return (
			<div>
				<div className="container-fluid col-7 m-0">
					<h2 className="mt-3 mb-3 text-center">StreamList</h2>
					<ul className="list-group">{this.renderList()}</ul>
					<div className="row">
						<div className="col">{this.renderCreate()}</div>
					</div>
				</div>
			</div>
		);
	}
}

// access store
const mapStateToProps = (state) => {
	// get all streams object: turn object of objects into an array
	// using Object.values(obj)
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
