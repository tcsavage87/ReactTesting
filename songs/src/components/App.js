import React from 'react';
import SongList from './SongList';
// use curly braces to import named export

// Use functional component because use state-based components less with Redux
	// State is stored on Redux side

// React-redux will create Provider and Connect components
	// Redux Store will be passed as prop into Provider which is rendered at top of hierarchy
	// Provider has perpetual access to the Store
	// Connect component created before instance of SongList
		// Can communicate with provider through context system
		// Allows parent to communicate with child even if not directly descendant
		// Connect passes provider data to children
	// Action creators get called with Connect and sent down as prop

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
			</div>
		</div>
	);
};

export default App;