import React from 'react';

const Context = React.createContext();

export class ColorStore extends React.Component {
	state = { color: 'red' };

	onColorChange = (color) => {
		this.setState({ color });
	};

	render() {
		return (
			<Context.Provider value={{...this.state, onColorChange: this.onColorChange}}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Context;