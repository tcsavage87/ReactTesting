import React from 'react';

const CommentDetail = props => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img src={props.avatar} alt="avatar" />
			</a>
			<div className="content">
				<a href="/" className="author">{props.author}</a>
				<div className="metadata">
					<span className="date">{props.time}</span>
				</div>
				<div className="text">{props.textComment}</div>
			</div>
		</div>
	);
};

// Props - system for passing data from parent to child/nested component
	// Goal to communicate data to customize child component
	// Pass props argument into function, refer to props.key to pass information


// Use export to make component available to rest of project
export default CommentDetail;