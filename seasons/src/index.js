// Has code to determine location + month
	// Use geolocation API built into browsers
	// window.navigator.geolocation.getCurrentPosition() takes 2 arguments
		// 1. Success handling, 2. Error handling
		// position.coords.latitude used to determine hemisphere: if 

// In order to pass latitude into JSX content must use class based component
	// Geolocation call takes time, and might return after JSX gets rendered
	// Within functional component, unable to wait to render JSX until geolocation returns
	// Class-based component (with state) allows this functionality by telling component to re-render JSX with returned geolocation info

// Class-based components
	// 1. Must be JS Class
	// 2. Must extend (subclass) React.Component
	// 3. Must define a 'render' method that returns some JSX
		// Other methods included within React.Component

// State
	// 1. Only usable with class-based components (unless w/ hooks)
	// 2. State is a JS Object that contains data relevant to component
	// 3. Updating state on a component causes the component to instantly render
	// 4. State must be initialized upon component creation
	// 5. State can only be updated using setState()

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// First function called on instance of class is constructor to initialize state
	constructor(props) {
		// super passes props to refer to parent class' constructor fxn
		super(props); 

		// initialization of state object, only time direct assignment
		this.state = { lat: null, hemisphere: '', errorMessage: '' }; 
		
		window.navigator.geolocation.getCurrentPosition(
			position => {
				// call setState() to update state object when success, pass object with update to object
				this.setState({	lat: position.coords.latitude });
			},
			err => {
				this.setState({ errorMessage: err.message });
			}
		);
	}
	// React requires that we define render
	render() {	
		// Conditional rendering - returning different JSX depending on state of component
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		}
	
		return <div>Loading...</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));

