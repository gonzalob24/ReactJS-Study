import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

// const StreamList = () => {
// 	return <div>StreamList</div>;
// };
// use class based component b/c I want to call action creator in componentDidMount one time

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}
	render() {
		return <div>StreamList</div>;
	}
}

export default connect(null, { fetchStreams })(StreamList);
