import React from "react";

class SearchBar extends React.Component {
	state = {
		term: "",
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.term);
		// console.log(e.target.searchField.value);
	};

	onInputChange = (e) => {
		this.setState({ term: e.target.value });
		// console.log(e.target.value);
	};
	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className="row d-flex justify-content-center">
					<div className="col-md-8 col-sm-12">
						<div className="form-floating mb-3">
							<input
								type="text"
								className="form-control"
								id="searchField"
								name="searchField"
								value={this.state.term}
								placeholder="Search for something"
								// onChange={(e) => {
								// 	this.setState({ term: e.target.value });
								// }}
								onChange={this.onInputChange}
							></input>
							<label htmlFor="searchField">Search</label>
						</div>
					</div>
					<div className="row d-flex justify-content-center p-0 mb-3">
						<div className="d-grid col-md-8 col-sm-12">
							<button className="btn btn-outline-success">Submit</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default SearchBar;
