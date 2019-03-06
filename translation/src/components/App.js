import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// Context API
	// Use context object to supply data to nested children
	// 2 ways to get information in
		// 1) Set Default Value
		// 2) Create Provider Object within Parent Component
	// 2 ways to get information out
		// 1) Reference this.context 
		// 2) create Consumer Component - created automatically upon context object creation

// Provider creates a unique Context pipe of data to share with nested components on each new instance within App

class App extends React.Component {
	state = { language: 'english', color: 'red' }

	onColorChange = (color) => {
		console.log(color);
		this.setState({ color });
	};

	onLanguageChange = (language) => {
		console.log(language);
		this.setState({ language });
	};

	render() {
	    return (
	      	<div className="ui container">
	        	<div>
	        		Select a language:
	        		<i 
	        			className="flag us" 
	        			onClick={() => this.onLanguageChange('english')} 
	        			style={{cursor: 'pointer'}}
	        		/>
	        		<i 
	        			className="flag nl" 
	        			onClick={() => this.onLanguageChange('dutch')}
	        			style={{cursor: 'pointer'}}
	        		/>
	        	</div>
	        	<div>
	        		Select a color:
	        		<i 
	        			className="circle icon red" 
	        			onClick={() => this.onColorChange('red')} 
	        			style={{cursor: 'pointer'}}
					/>
	        		<i 
	        			className="circle icon blue" 
	        			onClick={() => this.onColorChange('blue')}
	        			style={{cursor: 'pointer'}}
					 />
	        	</div>
	        	<ColorContext.Provider value={this.state.color}>
		        	<LanguageContext.Provider value={this.state.language}>
		        		<UserCreate />
		      		</LanguageContext.Provider>
		      	</ColorContext.Provider>
	      	</div>
	    );
	}
}

export default App;
