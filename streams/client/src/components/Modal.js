import React from 'react';
import ReactDOM from 'react-dom';

// use portals to display components as direct descendants of HTML elements other than div#root
	// Primarily used for modals or 3rd party libraries
	// Typically create sibling div to div#root, use as target for Portal placement

// ReactDOM.createPortal(JSX, locationToRender)

const Modal = props => {
	return ReactDOM.createPortal(
		// include onClick to redirect when user clicks outside of modal
		<div onClick={props.onDismiss} className="ui dimmer modals visible active">
			<div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
				<div className="header">{props.title}</div>
				<div className="content">{props.content}</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;