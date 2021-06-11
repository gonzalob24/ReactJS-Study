import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 8fO_vx-bRywsCVnH-Vnx8Z05ETrIpR9vZpx1zitLiVU",
	},
});

// 8fO_vx-bRywsCVnH-Vnx8Z05ETrIpR9vZpx1zitLiVU
//qZcjBlo1zJbps3Mu-2nkvwcGZH1ZUgNG-Ps1nT7UEeo
// axios
// 	.get("https://api.unsplash.com/search/photos", {
// 		params: {
// 			query: term,
// 		},
// 		headers: {
// 			Authorization:
// 				"Client-ID 8fO_vx-bRywsCVnH-Vnx8Z05ETrIpR9vZpx1zitLiVU",
// 		},
// 	})
// 	.then((res) => {
// 		console.log(res.data.results);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// 	const response = await axios.get("https://api.unsplash.com/search/photos", {
// 		params: {
// 			query: term,
// 		},
// 		headers: {
// 			Authorization: "Client-ID 8fO_vx-bRywsCVnH-Vnx8Z05ETrIpR9vZpx1zitLiVU",
// 		},
// 	});
// 	this.setState({ images: response.data.results });
// };
