import React from "react";

import Link from "./Link";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link active" href="/">
									Accordion
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/list">
									Search
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/dropdown">
									Dropdown
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/translate">
									Translate
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
