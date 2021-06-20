import React, { useState } from "react";

const DropDown = ({ options, selected, onSelectChange, label }) => {
	const renderOptions = options.map((option, i) => {
		return (
			<div
				key={i}
				onClick={() => {
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
		<div className="dropdown">
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

			<ul className="dropdown-menu" aria-labelledby="dropdownMenu">
				{renderOptions}
			</ul>
		</div>
	);
};

export default DropDown;
