import axios from "axios";

const KEY = "AIzaSyCkxKn3A2b3uYz0lZQqdmkgHx5UsoMd7TA";

// url: https://www.googleapis.com/youtube/v3/search

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
