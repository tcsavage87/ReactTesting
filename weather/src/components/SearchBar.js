import React from 'react';

class SearchBar extends React.Component {
	state = { location: '' };

	onFormSubmit = e => {
		e.preventDefault();
		this.props.getWeather(this.state.location);
		this.setState({ location: '' })
	};

	onInputChange = e => {
		this.setState({ location: e.target.value })
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input 
						type="text"
						onChange={this.onInputChange}
						value={this.state.location} />
					<label>Search for your Weather</label>
				</form>
			</div>
		);
	}
};

export default SearchBar;