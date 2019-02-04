import React from 'react';

// when returning multiple elements, by iterating over a list, important to include key property on the root element that matches key on list data

const ImageList = (props) => {
	console.log(props.images);
	const images = props.images.map(({ description, id, urls}) => {
		return (
			<img 
				alt={description}
				key={id}
				src={urls.regular} 
			/>
		);
	});

	return (
		<div>{images}</div>
	);
};


export default ImageList;