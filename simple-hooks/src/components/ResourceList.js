import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = () => {
	// Initialization of state
	const [resources, setResources] = useState([]);

	const fetchResource = async () => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
		setResources(response.data);
	}

	return <div>{resources.length}</div>;
}

export default ResourceList;
