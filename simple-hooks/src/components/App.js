import React from 'react';

class App extends React.Component {
	state = { resource: 'posts' };

	handleResource = (resource) => {
		this.setState({ resource });
	}

	render() {
		return (
			<div>
				<div>
					<button onClick={() => this.handleResource('posts')}>
						Posts
					</button>
					<button onClick={() => this.handleResource('todos')}>
						Todos
					</button>
				</div>
				{this.state.resource}
			</div>
		);
	}
};

export default App;