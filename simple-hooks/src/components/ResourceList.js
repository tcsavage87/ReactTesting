import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
	// Initialization of state
	const [resources, setResources] = useState([]);

	// jsonPlaceholder request
	const fetchResource = async resource => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
		setResources(response.data);
	};

	// useEffect - called with a function, function is called anytime component is rendered to screen and updated
		// Replicates componentDidMount and componentDidUpdate
		// First arg is callback function
		// Second arg is array contain data to track, and run callback function when it is changed/updated
	// useEffect is called every time component is re-rendered, and checks for changes to  within array to see if it should run internal callback fxn - only runs when value has changed

	useEffect(
		() => {
			fetchResource(resource);
		}, 
		[resource]
	);

	return <div>{resources.length}</div>;
};

export default ResourceList;
