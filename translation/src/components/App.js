import React from 'react';
import UserCreate from './UserCreate';

// Context API
	// Use context object to supply data to nested children
	// 2 ways to get information in
		// 1) Set Default Value
		// 2) Create Provider Object within Parent Component
	// 2 ways to get information out
		// 1) Reference this.context 
		// 2) create Consumer Component

class App extends React.Component {
	state = { language: 'english' }

	onLanguageChange = (language) => {
		this.setState({ language });
	};

	render() {
	    return (
	      	<div className="ui container">
	        	<div>
	        		Select a language:
	        		<i className="flag us" onClick={() => this.onLanguageChange('english')} />
	        		<i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
	        	</div>
	        	<UserCreate language={this.state.language} />
	      	</div>
	    );
	}
}

export default App;
