import React from "react";

// To be able to connect to the store
// To access the store make an instance of Connect inside of SongList component
import { connect } from "react-redux";

// Actions
import { selectSong } from "../actions";

class SongList extends React.Component {
	// this.props == {songs: state.songs}

	renderList() {
		return this.props.songs.map((song) => {
			return (
				<li
					className="list-group-item d-flex justify-content-between align-items-center"
					key={song.title}
				>
					{song.title}{" "}
					<button
						className="btn btn-primary"
						onClick={() => {
							// console.log("Selected Song: ", song);
							this.props.selectSong(song);
						}}
					>
						Select
					</button>
				</li>
			);
		});
	}

	render() {
		// console.log("in songlist", this.props);
		// console.log("From SongList: ", this.props);
		return (
			<div>
				<ul className="list-group list-group-flush">{this.renderList()}</ul>
			</div>
		);
	}
}

// calling the returned function
// I need to configure the connect instance to get data from provifer
// state is entire list of songs, all of the data inside redux store
const mapStateToProps = (state) => {
	// console.log("Map store", state);
	return {
		songs: state.songs,
	};
};

// also allows me to connect to actions by passing in arguments
// Why? so that I can forward the return value to redux and action creator updates state in redux store
// Why not call it directly? because it will be treated as a normal JS object. The return value will not get forwarded to redux

// the connect funciton will automatically call the dispatch function to save the returned value in the redux store.
// add the action creators to connect
export default connect(mapStateToProps, {
	selectSong: selectSong,
})(SongList);
