import React from "react";
import { Link } from "react-router-dom";

// components
import GooglAuth from "./GoogleAuth";

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Streamer
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse flex-grow-0"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									All Streams
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="">
									<GooglAuth />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
