// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import statement refers to ES2015 modules
// require statement refers to CommonJS modules

// Create a react component
// Component is function or class to produce HTML to show to user w/JSX and handle user feedback w/event listeners

// Adding custom styling to element in JSX requires {{ }} around style definition, with camelCase and single quote around value and commma between style definitions

const App = function() {
	return (
		<div>
			<label class="label" for="name">Enter name:</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white'}}>Submit</button>
		</div>
	);
};

// Use babeljs.io to try out conversion from React/JSX to ES5

// JSX allows us to write cleaner code that then gets converted to function calls of .createElement()

// Take component and display on screen

ReactDOM.render(<App />, document.querySelector('#root'));