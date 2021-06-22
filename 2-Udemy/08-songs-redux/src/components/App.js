import React from "react";

// components
import SongList from "./SongList";
import SongDetail from "./ SongDetail";

const App = () => {
	return (
		<div className="container-fluid">
			<div className="row d-flex justify-content-between">
				<div className="col-4">
					<SongList />
				</div>
				<div className="col-6">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export default App;
