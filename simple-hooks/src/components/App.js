import React, { useState } from 'react';

const App = () => {
	// array destructuring - pulls first/second elements out of right side
		// Calling useState returns array with 2 elements inside
		// Take first element and assign to resource - currentValue
		// Second element assigned to setResource - setCurrentValue
			// Equivalent to calling setState
	// Pass argument of initialValue into useState fxn

	const [resource, setResource] = useState('posts');

	const handleResource = (name) => {
		setResource(name);
	}
	
	return (
		<div>
			<div>
				<button onClick={() => handleResource('posts')}>
					Posts
				</button>
				<button onClick={() => handleResource('todos')}>
					Todos
				</button>
			</div>
			{resource}
		</div>
	);	
};

export default App;