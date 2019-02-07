import React from 'react';

const Loader = props => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{props.message}</div>
		</div>
	);	
}

// Can define default props with Component.defaultProps objects

Loader.defaultProps = {
	message: 'Loading...'
};

export default Loader;