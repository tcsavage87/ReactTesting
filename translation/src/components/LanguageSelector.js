import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
	static contextType = LanguageContext;

	render() {
		return (
			<div>
				Select a language:
        		<i 
	       			className="flag us" 
	       			onClick={() => this.context.onLanguageChange('english')} 
	       			style={{cursor: 'pointer'}}
	       		/>
	       		<i 
	       			className="flag nl" 
	       			onClick={() => this.context.onLanguageChange('dutch')}
	       			style={{cursor: 'pointer'}}
	        	/>
			</div>
		);
	}
}

export default LanguageSelector;