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

// Show different text/icons based on props

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				let hemisphere;
				position.coords.latitude > 0 ? hemisphere = 'North' : hemisphere = 'South';
				console.log(hemisphere);
			},
			err => console.log(err)
		);
		return <div>Latitude</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));