import React from 'react';
import Field from './Field';
import Button from './Button';

const UserCreate = (props) => {
	return (
		<div>
			<Field language={props.language} />
			<Button language={props.language} />
		</div>
	);
};

export default UserCreate;