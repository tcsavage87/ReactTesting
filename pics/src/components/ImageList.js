import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

// when returning multiple elements, by iterating over a list, important to include key property on the root element that matches key on list data

const ImageList = (props) => {
	const images = props.images.map(image => {
		return <ImageCard image={image} key={image.id} />;
	});

	return (
		<div className="image-list">{images}</div>
	);
};

export default ImageList;