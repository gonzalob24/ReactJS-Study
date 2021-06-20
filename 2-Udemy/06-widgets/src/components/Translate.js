import React, { useState, useEffect } from "react";

import DropDown from "./DropDown";
import Convert from "./Convert";

const Translate = () => {
	const options = [
		{
			label: "Afrikaans",
			value: "af",
		},
		{
			label: "Arabic",
			value: "ar",
		},
		{
			label: "Hindi",
			value: "hi",
		},
		{
			label: "Spanish",
			value: "es",
		},
	];

	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");
	return (
		<div className="container-fluid col-4 m-0 auto">
			<div className="form-floating mb-3">
				<input
					type="text"
					className="form-control"
					id="floatingInput"
					placeholder="enter language"
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				></input>
				<label htmlFor="floatingInput">Enter Language</label>
			</div>
			<DropDown
				label="Select a Language"
				options={options}
				selected={language}
				onSelectChange={setLanguage}
			/>
			<hr />
			<h3 className="display-6 fs-5">Output</h3>
			<Convert text={text} language={language} />
		</div>
	);
};

export default Translate;
