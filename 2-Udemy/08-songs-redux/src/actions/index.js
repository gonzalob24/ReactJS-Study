// Action creator

const selectSong = (song) => {
	// return an action
	// console.log("action song: ", song);
	return {
		type: "SONG_SELECTED",
		payload: song,
	};
};

export { selectSong };
