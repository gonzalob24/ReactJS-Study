import { combineReducers } from "redux";

// Songs data: Fixed for now
const songsReducer = () => {
	return [
		{
			title: "No Scrubs",
			duration: "4:05",
		},
		{
			title: "Macarena",
			duration: "2:30",
		},
		{
			title: "All Star",
			duration: "3:15",
		},
		{
			title: "I want it that way",
			duration: "1:45",
		},
	];
};

const selectedSong = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

// so that i can access reducers in APp
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSong,
});
