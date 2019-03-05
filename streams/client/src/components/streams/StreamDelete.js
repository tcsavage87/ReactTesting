import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
	// React.Fragment is container that has no impact on spacing in the DOM
	const actions = (
		<React.Fragment>
			<button className="ui button negative">Delete</button>	
			<button className="ui button">Cancel</button>
		</React.Fragment>
	);

	return (
		<div>
			StreamDelete
			<Modal 
				title="Delete Stream"
				content="Are you sure you want to delete this stream?"
				actions={actions}
			/>
		</div>
	);
};

export default StreamDelete;