import React from 'react';
import { LanguageStore } from '../contexts/LanguageContext';
import { ColorStore } from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import UserCreate from './UserCreate';
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
	render() {
	    return (
	      	<div className="ui container">
	      		<LanguageStore>
		        	<LanguageSelector />
		        	<ColorStore>
			        	<ColorSelector />
				        	<UserCreate />
				    </ColorStore>
			    </LanguageStore>
		    </div>
	    );
	}
}

export default App;
