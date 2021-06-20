import { React, useEffect, useState } from "react";

import { CaretDownFill } from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.css";

const Accordion = (props) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		// when rerendering happens the default value is no longer user.
		// so the value is updated. I can access old value with prevState
		setActiveIndex(index);
	};

	const itemsList = props.items.map((item, i) => {
		const hidden =
			i === activeIndex ? "collapse multi-collapse" : "collapsing hide";
		return (
			<div className="container-fluid col-6 m-0 auto" key={i}>
				<div className="card">
					<div
						className="dropdown-toggle"
						data-bs-toggle="collapse"
						href={`#multiCollapseExample${i}`}
						aria-expanded="false"
						aria-controls={`multiCollapseExample${i}`}
						onClick={() => {
							onTitleClick(i);
						}}
					>
						<h1 className="card-title display-6 fs-3 d-inline">{item.title}</h1>
					</div>
					<div className="row">
						<div className="col">
							<div
								className={`collapse multi-collapse`}
								id={`multiCollapseExample${i}`}
							>
								<div className="card-body">{item.content}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	});
	return <div>{itemsList}</div>;
};

export default Accordion;
