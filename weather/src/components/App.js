import React from 'react';
import apixu from '../api/apixu';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


class App extends React.Component {	
	state = { weather: [], location: [] }

	getWeather = async location => {
		const response = await apixu.get('/current.json', {
			params: {
				q: location
			}
		});
		this.setState({ weather: response.data.current,
			location: response.data.location });
	};

	render() {
		return (
			<div>
				<SearchBar getWeather={this.getWeather} />
				<SearchResults 
					location={this.state.location} 
					weather={this.state.weather} />
			</div>
		);
	}
};

export default App;