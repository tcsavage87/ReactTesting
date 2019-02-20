import React from 'react';

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = { fahrenheit: true, temp: '', realFeel: '' };
	}

	handleFahrenheit = () => {
		this.setState({ fahrenheit: true });
	}

	handleCelsius = () => {
		this.setState({ fahrenheit: false});
	}

	render() {		
		const { weather, location } = this.props;

		if (!weather.temp_f) {
			return <div></div>;
		} 
		return(
			<div className="ui segment two column grid">
				<div className="column">
					<h1 className="ui huge red ribbon label">{location.name}, {location.region}</h1>
					<h3>{weather.condition.text}</h3>
					<img 
						className="ui image"
						alt={weather.condition.text} 
						src={weather.condition.icon} 
					/>
					<h2>{this.state.fahrenheit ? `${weather.temp_f} ℉` : `${weather.temp_c} ℃`}</h2>
					<h3>Feels Like {this.state.fahrenheit ? `${weather.feelslike_f} ℉` : `${weather.feelslike_c} ℃`}</h3>
					<div className="ui buttons">
						<button 
							className="ui circular blue button" 
							onClick={this.handleFahrenheit}>℉</button>
						<button 
							className="ui circular green button"
							onClick={this.handleCelsius}>℃</button>
					</div>
				</div>
				<div className="column">
					<h2 className="ui blue right ribbon label">Conditions at {weather.last_updated}</h2>
					<h4>Humidity: {weather.humidity}%</h4>
					<h4>Winds: {weather.wind_dir} {weather.wind_mph} mph</h4>
					<h4>Visibility: {weather.vis_miles}</h4>
				</div>
			</div>
		);
	}
} 

export default SearchResults;

/* If C button clicked, render temp as temp_c and addClass selected to C button, removeClass selected from F Button.*/
