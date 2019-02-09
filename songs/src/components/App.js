import React from 'react';

// Use functional component because use state-based components less with Redux
	// State is stored on Redux side

// React-redux will create Provider and Connect components
	// Redux Store will be passed as prop into Provider which is rendered at top of hierarchy
	// Provider has perpetual access to the Store
	// Connect component created before instance of SongList
		// Can communicate with provider through context system
	

const App = () => {
	return <div>App</div>;
};

export default App;