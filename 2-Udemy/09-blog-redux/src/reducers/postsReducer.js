// reducers should always have a return statement
// export default (state, action) => {
// 	return 12;
// };

// best practice
const postsReducer = (state = [], action) => {
	// switch statement instead of if/elseif/else
	switch (action.type) {
		case "FETCH_POSTS":
			return action.payload;
		default:
			return state;
	}
	// if (action.type === "FETCH_POST") {
	// 	return action.payload;
	// }
	// // otherwise return current state
	// return state;
};

export default postsReducer;

// export default (state = [], action) => {
// 	switch (action.type) {
// 		case "FETCH_POSTS":
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };
