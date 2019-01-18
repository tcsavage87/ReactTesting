// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import statement refers to ES2015 modules
// require statement refers to CommonJS modules

// Create a react component
// Component is function or class to produce HTML to show to user w/JSX and handle user feedback w/event listeners

const App = function() {
	return <div>Hi there!</div>;
};

// Take component and display on screen

ReactDOM.render(<App />, document.querySelector('#root'));