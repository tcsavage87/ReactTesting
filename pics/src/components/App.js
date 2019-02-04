import React from 'react';
// 3rd party imports typically above dev created file imports
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList.js';

// AJAX request to handle data must be handled outside of React: axios or fetch
	// axios is 3rd party package (NPM) with pre-written code to handle network requests 
	// fetch is function built into browsers, basic/lower-level (DIY)

// Two options to receive notification when request is finished
	// .then() - contains function to run upon completion when working with promise
	// async - use async keyword in front of function, allows for async/await usage. create const name = await axios.get()
		// using async/await allows to save results to variable (response) and then log or save response.data.results without waiting on promise or .then()

// to submit GET with axios, call .get() method with 2 arguments
	// 1st arg - address destination of request
	// 2nd arg - object containing options customizing request
// Axios requests return promise
// If using arrow function to bind this, place async before parameter 

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async term => {
		// Code object arg according to API specs (Unsplash API documentation)
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar runOnSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} images
				<ImageList />
			</div>
		);
	}
}

// when passing methods as props to child components can use any name, and must be called by that name in child

export default App;