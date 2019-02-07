import React from 'react';

// Allow ImageCard to render, then access DOM for image height
// WIth this info, set height on state which will force re-rendering of component
// Upon re-render, assign grid-row-end style property to allocate appropriate space


// To access DOM in React, use Ref system (Not document.querySelector())
	// Gives access to a single DOM element
	// Created in constructor, assign them variables and pass to JSX element as props
	// Ref is JS object with current property that is DOM node containing data

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };
		// Template for creating a Ref, creates a reference point attached to a JSX element that can be accessed to retrieve data
		this.imageRef = React.createRef();

	}

	componentDidMount() {
		// Must use eventlistener to wait to check height until image is retrieved from source and rendered ('load')
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const imageHeight = this.imageRef.current.clientHeight;

		const spans = Math.ceil(imageHeight / 10);
		this.setState({ spans: spans });
	}

	render () {
		const { description, urls } = this.props.image;
		return (
			<div style={{gridRowEnd: `span ${this.state.spans}`}}>
				<img 
					ref={this.imageRef}
					alt={description} 
					src={urls.regular} 
				/>
			</div>
		);
	}
}

export default ImageCard;