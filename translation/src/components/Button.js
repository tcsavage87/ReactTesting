import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button className="ui primary">
				{`Submit in ${this.props.language}`}
			</button>
		);	
	}
	
};

export default Button;