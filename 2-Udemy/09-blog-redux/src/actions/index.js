import _ from "lodash";
import jsonplaceholder from "../apis/jsonplaceholder";

// with thunk now I can return a function by calling dispatch

export const fetchPostsAndUsers = () => {
	return async (dispatch, getState) => {
		// console.log("About to Fetch Posts");
		await dispatch(fetchPosts());
		// console.log("From action", getState().posts);
		const userIds = _.uniq(_.map(getState().posts, "userId"));
		// get fetchUser for each id
		userIds.forEach((id) => dispatch(fetchUser(id)));
	};
};

export const fetchPosts = () => {
	return async (dispatch, getState) => {
		// console.log("reducer: ", getState());
		const response = await jsonplaceholder.get("/posts");
		dispatch({ type: "FETCH_POSTS", payload: response.data });
		// console.log("reducer after: ", getState());
	};
};

// need user Id
// With this method i can only fetchUser only one time b/c of _.memoize()
export const fetchUser = (id) => {
	return async (dispatch, getState) => {
		const response = await jsonplaceholder.get(`/users/${id}`);
		dispatch({ type: "FETCH_USER", payload: response.data });
	};
};

// ******* MEMOIZED SOLUTION ******* //
// export const fetchUser = (id) => {
// 	return (dispatch, getState) => {
// 		_fetchUser(id, dispatch);
// 	};
// };
// // private method example
// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonplaceholder.get(`/users/${id}`);
// 	dispatch({ type: "FETCH_USER", payload: response.data });
// });
// ****************************** //

// using the function keyword to make a function
// which one do I memoize? None of the methods below worked b/c I end calling memoize everytime
// i envoke the action creator.
// export const fetchUser = function (id) {
// 	return async function (dispatch, getState) {
// 		const response = await jsonplaceholder.get(`/users/${id}`);
// 		dispatch({ type: "FETCH_USER", payload: response.data });
// 	};
// };

// I can still make other normal function creators

/*
export const fetchPosts = async () => {
	// bad approach won't work, instead return a function
	const response = await jsonplaceholder.get("/posts");
	return {
		type: "FETCH_POSTS",
		payload: response,
	};  
};

*/
