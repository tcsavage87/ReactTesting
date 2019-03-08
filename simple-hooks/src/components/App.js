import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
	// array destructuring - pulls first/second elements out of right side
	// Calling useState returns array with 2 elements inside
		// Take first element and assign to resource - currentValue
		// Second element assigned to setResource - setCurrentValue
			// Equivalent to calling setState
		// Pass argument of initialValue into useState fxn
	// Can call useState as unlimited times in a component, once for each individual state value to set

	const [resource, setResource] = useState('posts');

	const handleResource = (name) => {
		setResource(name);
	}
	
	return (
		<div>
			<UserList />
			<div>
				<button onClick={() => handleResource('posts')}>
					Posts
				</button>
				<button onClick={() => handleResource('todos')}>
					Todos
				</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	);	
};

export default App;