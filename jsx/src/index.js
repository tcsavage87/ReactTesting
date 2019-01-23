// Step 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import statement refers to ES2015 modules
// require statement refers to CommonJS modules

// Step 2. Create a react component
	// Component is function or class to produce HTML to show to user w/JSX and handle user feedback w/event listeners

// Adding custom styling to element in JSX requires {{ }} around style definition as an object, with camelCase and single quote around value and commma between style definitions

// Use " " for a string, but for any non-JSX property use ' ' such as style values

// Use className for class, htmlFor in place of for, and use { } within JSX to reference Javascript variable or function call

	// Cannot pass entire JS object as a reference within JSX for text, must refer to specific property (key)

const App = function() {
	const buttonText = 'Click me!';
	const labelText = 'Enter name:';

	return (
		<div>
			<label className="label" htmlFor="name">
			{labelText}
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white'}}>
			{buttonText}
			</button>
		</div>
	);
};

	// Use babeljs.io to try out conversion from React/JSX to ES5

	// JSX allows us to write cleaner code that then gets converted to function calls of .createElement()

// Step 3. Take component and display on screen

ReactDOM.render(<App />, document.querySelector('#root'));

