import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Put App component in separate file

ReactDOM.render(
	<App />, 
	document.querySelector('#root')
);

// App component is passed into index.js
// SearchBar is passed prop of runOnSubmit from App.js; when submitted, calls runOnSubmit with value of this.state.term
// This calls onSearchSubmit in App.js, which submits an axios request with the query of the term passed into the function
// The results of the request are saved in App.js this.state.images which are then passed as props into the ImageList component as images
// In ImageList.js, a new images array is created which maps over the props.images array, creating an ImageCard component for each image
// The images array returns an array of JSX components and is passed as the content into a div to be returned as the ImageList component
// The ImageCard Component is created with props image and key, image being the image object from the image results array
// THe ImageCard Component then creates <img> elements with the attributes derived from the this.props.image 

