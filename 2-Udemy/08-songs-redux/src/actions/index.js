// Action creator

const selectSong = (song) => {
	// return an action
	// the payload is optional
	// console.log("action song: ", song);
	return {
		type: "SONG_SELECTED",
		payload: song,
	};
};

// named export allows me to export many actions
// to import {name} from "location"
export { selectSong };
