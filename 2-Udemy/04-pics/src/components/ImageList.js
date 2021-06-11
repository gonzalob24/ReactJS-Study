import React from "react";
// keys are used for perfmance when it comes to rendering as react will look for keys in the DOM
// and decide if it needs to be rendered again.
import ImageCard from "./ImageCard";

import "./ImageList.css";
const ImageList = (props) => {
	console.log(props.images);
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="image-list">{images}</div>;
};

export default ImageList;
