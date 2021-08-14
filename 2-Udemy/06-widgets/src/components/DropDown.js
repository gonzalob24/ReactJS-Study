import { Callbacks } from "jquery";
import React, { useState, useEffect, useRef } from "react";
import { Arrow90degDown } from "react-bootstrap-icons";

const DropDown = ({ options, selected, onSelectChange, label }) => {
	// manually close a dropdown, keep track of open and close items
	// manually  invkoked aebent listeners get called first
	// const [open, setOpen] = useState(false);

	// // access a direct element in the dom
	// const ref = useRef();

	// useEffect(() => {
	// 	const onBodyClick = (e) => {
	// 		// console.log(e.target);
	// 		if (ref.current.contains(e.target)) {
	// 			return;
	// 		}
	// 		console.log("body click");
	// 		setOpen(false);
	// 	};

	// 	document.body.addEventListener("click", onBodyClick);

	// 	// clean up to remove event listener from body
	// 	return () => {
	// 		// remove the click event
	// 		document.body.removeEventListener("click", onBodyClick);
	// 	};
	// }, []);

	const renderOptions = options.map((option, i) => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div
				key={i}
				onClick={() => {
					console.log("item clicked");
					onSelectChange(option);
				}}
			>
				<li>
					<a className="dropdown-item">{option.value}</a>
				</li>
			</div>
		);
	});

	return (
		// <div className="dropdown col-6 ui form" ref={ref}>
		<div className="dropdown col-12 ui form">
			<label className="form-label d-block">{label}</label>
			<button
				className="btn btn-secondary dropdown-toggle col-12"
				type="button"
				id="dropDownMenu"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{selected.label}
			</button>

			<ul
				className="dropdown-menu col-12"
				aria-labelledby="dropdownMenu"
				onClick={() => {
					console.log("Dropdown clicked");
				}}
			>
				{renderOptions}
			</ul>
		</div>
	);
};

export default DropDown;
