import React from "react";

class SearchBar extends React.Component {
	// when input changes
	state = {
		term: "",
	};

	onFormSubmit(e) {
		e.preventDefault();
		// this keyword does not bind to the button submit
		// pass the term up to the App compoent: child to parent now.
		this.props.onSubmit(this.state.term);
	}
	render() {
		return (
			<div>
				<form
					className="container-fluid"
					onSubmit={(e) => this.onFormSubmit(e)}
				>
					<div className="d-flex justify-content-center">
						<div className="row form-floating mb-3 col-md-8 col-sm-12">
							<input
								type="text"
								className="form-control"
								id="seachField"
								name="searchField"
								placeholder="seach for car"
								onChange={(e) =>
									this.setState({ term: e.target.value.toUpperCase() })
								}
								value={this.state.term}
							></input>
							<label htmlFor="seachField">Image Search</label>
						</div>
					</div>
					<div className="d-flex justify-content-center">
						<div className="row form-floating mb-3 col-md-8 col-sm-12">
							<button className="btn btn-success">Search</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
