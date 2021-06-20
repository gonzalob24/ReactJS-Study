import React, { useState, useEffect } from "react";
import axios from "axios";

// api key : AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// key only works in localhost:3000

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState("");
	const [debouncedText, setDebouncedText] = useState(text);

	// set the timer for 1 second
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedText(text);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [text]);

	useEffect(() => {
		//make API request use query string parameters
		const doTranslation = async () => {
			const { data } = await axios.post(
				"https://translation.googleapis.com/language/translate/v2",
				{},
				{
					params: {
						q: debouncedText,
						target: language.value,
						key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
					},
				}
			);
			setTranslated(data.data.translations[0].translatedText);
		};
		doTranslation();
	}, [language, debouncedText]); // add them becaues I am looking for changes in language selected or text entered

	return <div className="display-6 fs-6">{translated}</div>;
};

export default Convert;
