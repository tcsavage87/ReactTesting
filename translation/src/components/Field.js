import React from 'react';

class Field extends React.Component {
	render() {
		return (
			<div className="ui field">
				<label>Name</label>
				<input placeholder={this.props.language} />
			</div>
		);
	}
};

export default Field;