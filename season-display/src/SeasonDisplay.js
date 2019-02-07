// CSS file must be imported into js file it styles, will insert into HTML
import './SeasonDisplay.css';
import React from 'react';

// Create configuration Object
const seasonConfig = {
	summer: {
		text: 'Let\'s hit the beach!',
		iconName: 'sun'
	},
	winter: {
		text: 'Brr it\'s chilly!',
		iconName: 'snowflake'
	}
};

// Evaluate seasonality based on latitude and month with helper function
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		// Can use a ternary operator within JSX, or perform logic outside of component
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

// Functional Component
const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth());
	// use destructuring to pull properties of object
	const { text, iconName } = seasonConfig[season];

	return (
		// root element has className matching component name
		<div className={`season-display ${season}`} >
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;