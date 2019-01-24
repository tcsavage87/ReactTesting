import React from 'react';

const ApprovalCard = (props) => {
	return (
		<div className="ui card">
			<div className="content">
				{props.children}
			</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Reject</div>
				</div>
			</div>
		</div>
	);
};

// Props object includes children passed within tags of parent component
// Use {props.children} to display children passed in parent component

export default ApprovalCard;