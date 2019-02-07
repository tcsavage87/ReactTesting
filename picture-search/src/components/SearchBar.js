import React from 'react';

// Event handlers
	// Goal is to store information within components rather than in DOM
	// Uncontrolled elements 
		// Periods of time when values of elements are unknown inside react js, ex. only known when onChange is called by peering into DOM and input was only location where value was known
		// No constant assigned to track value to be retrieved
	// Controlled elements 
		// Implementing methods to control/measure the value and content of elements by using state as a constant
		// Goal is to centralize all known info within React component

class SearchBar extends React.Component {
	
	state = { term: '' };

	// Function for eventhandling naming convention is onElementNameEvent

	// 'this' inside a class used for state and render refers to class component

	// Value of 'this' within method is determined on method call, so must convert method into arrow function

	// Running props within class component requires this.props

	onFormSubmit = e => {
		e.preventDefault();
		this.props.runOnSubmit(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input 
							type="text" 
							placeholder="Search" 
							value={this.state.term} 
							onChange={e => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;