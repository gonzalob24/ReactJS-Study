import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
	console.log("SongDetail Props: ", props);
	if (!props.selectedSong) {
		return (
			<div>
				<h3 className="display-6">Select a song</h3>
			</div>
		);
	}
	return (
		<div>
			<h3 className="display-6">Details for:</h3>
			<h5>
				Title: <span>{props.selectedSong.title}</span>
			</h5>
			<h5>
				Duration: <span>{props.selectedSong.duration}</span>
			</h5>
		</div>
	);
};

const mapStateToProps = (state) => {
	// console.log("SongDetail Map: ", state);
	return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
