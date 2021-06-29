import React from "react";
import { connect } from "react-redux";
import { Google } from "react-bootstrap-icons";

// actions
import { signIn, signOut } from "../actions";

class GooglAuth extends React.Component {
	// no longer needed since it is in redux now
	// state = {
	// 	isSignedIn: null,
	// };

	componentDidMount() {
		// Initialize the library: load GoogleAuth client portion
		// arrow function gets called after client:auth2 library is loaded to gapi
		// init returns a promise so we need to do something after init
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"859368255371-7ik0ol129mtqvhtooag7n3mgn2mvfsnn.apps.googleusercontent.com",
					scope: "email",
				})
				.then(() => {
					// is user signed in logic
					// get a reference to the auth object
					this.auth = window.gapi.auth2.getAuthInstance();
					// update component level state true/false if user is signed in or not
					// this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.onAuthChange(this.auth.isSignedIn.get());
					// update the state props by listening to event changes on the auth object
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	// recall with arrow function, contents are bound to components
	onAuthChange = (isSignedIn) => {
		// this.setState({ isSignedIn: this.auth.isSignedIn.get() });
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button
					className="btn btn-outline-danger border-0"
					onClick={this.onSignOutClick}
				>
					<Google size={32} className="p-2" />
					Logout
				</button>
			);
		} else {
			return (
				<button
					className="btn btn-outline-danger border-0"
					onClick={this.onSignInClick}
				>
					<Google size={32} className="p-2" />
					Login
				</button>
			);
		}
	}
	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GooglAuth);
