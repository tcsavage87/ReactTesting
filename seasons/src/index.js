// Has code to determine location + month
	// Use geolocation API built into browsers
	// window.navigator.geolocation.getCurrentPosition() takes 2 arguments
		// 1. Success handling, 2. Error handling
		// position.coords.latitude used to determine hemisphere

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

// Component Lifecycle - series of methods governing course of component existence
	// constructor - one-time setup (state init)
	// render - required, return JSX
	// componentDidMount - called after component renders on screen, data-loading or outside process
	// componentDidUpdate - called after component updates/re-renders, data-loading after state/props change
	// componentWillUnmount - called after component removed from DOM

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
	// First function called on instance of class is constructor to initialize state
	constructor(props) {
		// super passes props to refer to parent class' constructor fxn
		super(props); 

		// initialization of state object, only time direct assignment
		// this.state = { lat: null, errorMessage: '' };
	}

	// Can also define state outside of constructor
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({	lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	componentDidUpdate() {
		console.log('Component was updated');
	}

	// React requires that we define render
	render() {	
		// Conditional rendering - returning different JSX depending on state of component
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		// Can pass state as a prop to another component
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
	
		return (
			<div>
				<h1>Loading...<i className="spinner loading icon" /></h1>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));

