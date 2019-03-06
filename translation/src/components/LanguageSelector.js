import React from 'react';

class LanguageSelector extends React.Component {
	render() {
		return (
			<div>
				Select a language:
        		<i 
	       			className="flag us" 
	       			onClick={() => this.props.onLanguageChange('english')} 
	       			style={{cursor: 'pointer'}}
	       		/>
	       		<i 
	       			className="flag nl" 
	       			onClick={() => this.props.onLanguageChange('dutch')}
	       			style={{cursor: 'pointer'}}
	        	/>
			</div>
		);
	}
}

export default LanguageSelector;