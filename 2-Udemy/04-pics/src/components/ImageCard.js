import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spans: 0,
		};
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		// console.log(this.imageRef.current.clientHeight);
		// this also works like above but waits to get height after load
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		// console.log(this.imageRef.current.clientHeight);
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10 + 1);
		this.setState({ spans });
	};

	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				{/* ref is a rect element */}
				<img ref={this.imageRef} src={urls.regular} alt={description}></img>
			</div>
		);
	}
}

export default ImageCard;
