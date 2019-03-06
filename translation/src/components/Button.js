import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{({ language }) => language === 'english' ? 'Submit' : 'Voorleggen'}
				</LanguageContext.Consumer>
			</button>
		);
	}
	
	// no contextType required with Consumer
	// Place consumer where content should be rendered and include function as child of component 
	render() {
		return (
			<ColorContext.Consumer>	
				{({ color }) => this.renderButton(color)}
			</ColorContext.Consumer>
		);	
	}
};

export default Button;