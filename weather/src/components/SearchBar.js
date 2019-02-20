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
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
					<label>Search for your Weather</label>
					<input 
						placeholder="Zip, City, or State"
						type="text"
						onChange={this.onInputChange}
						value={this.state.location} />
					</div>
				</form>
			</div>
		);
	}
};

export default SearchBar;