import React from 'react';

const SearchResults = ({ weather, location }) => {
	if (!weather.temp_f) {
		return <div></div>;
	}
	console.log(weather);
	return(
		<div>
			<h1>{location.name}, {location.region}</h1>
			<h3>{weather.condition.text}</h3>
			<img alt={weather.condition.text} src={weather.condition.icon} />
			<p>Temperature is {weather.temp_f} F</p>
		</div>
	);
};

export default SearchResults;