import React from "react";
import { TelephoneMinus } from "react-bootstrap-icons";

// connect to redux
import { connect } from "react-redux";

// actions
import { fetchUser } from "../actions";

// right now has access to entire array of user: NOT IDEAL. B/c i am giving it more data than
// what it needs
class UserHeader extends React.Component {
	componentDidMount() {
		// dont need to call own fetchUser
		// this.props.fetchUser(this.props.userId);
	}

	render() {
		// const user = this.props.users.find((user) => user.id === this.props.userId);
		// console.log(user);
		// const {user} = this.props;
		if (!this.props.user) {
			return null;
		}
		return <div>{this.props.user.name}</div>;
	}
}

// connect to redux store to get access to the data
// We do this mapStatToProps so that we can do calculations before getting the data
// I can do logic calculations here like find, reduce, map
// This will increase reusability and scales better
// ownProps is a reference to the props that are going to be sent to the component
const mapStateToProps = (state, ownProps) => {
	// find the appropriate user
	return { user: state.users.find((user) => user.id === ownProps.userId) };
};

// connect to call action creator
export default connect(mapStateToProps)(UserHeader);
