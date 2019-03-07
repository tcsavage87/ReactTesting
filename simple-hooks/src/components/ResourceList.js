import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
	state = { resources: [] };

	async componentDidMount() {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
		this.setState({ resources: response.data });
	}

	// use prevProps to check on previous props and only run if different from currnent value
	async componentDidUpdate(prevProps) {
		if (prevProps.resource !== this.props.resource) {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
			this.setState({ resources: response.data });
		}
	}

	render() {
		return <div>{this.state.resources.length}</div>;
	}
}

export default ResourceList;
