import React from "react";
import { connect } from "react-redux";

// components
import UserHeader from "./UserHeader";

// Actions
import { fetchPosts, fetchPostsAndUsers } from "../actions";

// Bootstrap Icons
import { PersonFill } from "react-bootstrap-icons";

class PostList extends React.Component {
	componentDidMount() {
		// call the action creator
		this.props.fetchPostsAndUsers();
	}
	renderList() {
		return this.props.posts.map((post) => {
			return (
				<div className="row" key={post.id}>
					<li className="list-group-item">
						<div className="row">
							<div className="col-1">
								<PersonFill size={50} />
							</div>
							<div className="col px-4">
								<h4 className="fs-4">{post.title}</h4>
								<p>{post.body}</p>
								<h4 className="fs-4">{post.title}</h4>
								<UserHeader userId={post.userId} />
							</div>
						</div>
					</li>
				</div>
			);
		});
	}

	render() {
		console.log(this.props.posts);
		return (
			<div>
				<ul className="list-group">{this.renderList()}</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

// I can pass null when I dont have data that I need to pass through
// export default connect(null, {fetchPosts})(PostList);
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
