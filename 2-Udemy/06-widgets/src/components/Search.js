import React, { useEffect, useState } from "react";
import axios from "axios";
// baseURL "en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=TERM"

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("programming");
	const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
	const [results, setResults] = useState([]);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(searchTerm);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [searchTerm]);

	useEffect(() => {
		const searchWiki = async () => {
			const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
				params: {
					action: "query",
					list: "search",
					format: "json",
					origin: "*",
					srsearch: debouncedTerm,
				},
			});
			// console.log(response);
			setResults(data.query.search);
		};

		searchWiki();
	}, [debouncedTerm]);

	// console.log(results);
	// console.log("Run with every render");

	// callback function is needed
	// Configure it so that ir rund properly

	/* Notes Below this line
	useEffect(() => {
		// console.log("I run after every reder at initial render");
		// 1. Make a helpful async function
		const searchWiki = async () => {
			const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
				params: {
					action: "query",
					list: "search",
					format: "json",
					origin: "*",
					srsearch: searchTerm,
				},
			});
			// console.log(response);
			setResults(data.query.search);
		};

		if (searchTerm && !results.length) {
			searchWiki();
		} else {
			const timeOutId = setTimeout(() => {
				if (searchTerm) {
					searchWiki();
				}
			}, 1000);
			// I am allowed to return only one thing; another function
			// When does this get called? it gets called first on rerender Only
			return () => {
				clearTimeout(timeOutId);
			};
		}

		// 2. IIFE
		// (async () => {
		//   await axios.get("skdjfh")
		// })();

		// 3. use a promise
		// axios.get('jjj').then((res) => {
		//   console.log(res);
		// }).catch((err) => {
		//   console.log(err);
		// })
	}, [searchTerm, results.length]);
  
  */

	const renderResults = results.map((result) => {
		return (
			<div key={result.pageid}>
				<ol className="list-group">
					<li className="list-group-item">
						<h5>{result.title}</h5>
						{/* Security hole xss attack: cross site scripting attack: Render html fron ubtrusted source allowing hackers to execute js inside app. 
            In order to becareful I need to make sure that the text I get is from a trusted source
            */}
						<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>{" "}
						<div className="col d-flex flex-row-reverse">
							<a
								className="btn btn-primary"
								href={`https://en.wikipedia.org?curid=${result.pageid}`}
								target="_blank"
								rel="noreferrer"
							>
								Go
							</a>
						</div>
					</li>
				</ol>
			</div>
		);
	});
	return (
		<div className="container-fluid">
			<form>
				<div className="mb-3">
					<label htmlFor="search" className="form-label">
						Search
					</label>
					<input
						type="text"
						className="form-control "
						id="search"
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
						aria-describedby="searchHelp"
					></input>
					<div id="searchHelp" className="form-text">
						Enter a search term
					</div>
				</div>
			</form>
			<div>{renderResults}</div>
		</div>
	);
};

export default Search;
