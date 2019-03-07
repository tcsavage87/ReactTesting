import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Can extract logic into separate function, allows for reusable code
const useResources = (resource) => {
	// Initialization of state
	const [resources, setResources] = useState([]);

	// useEffect - called with a function, function is called anytime component is rendered to screen and updated
		// Replicates componentDidMount and componentDidUpdate
		// First arg is callback function
		// Second arg is array contain data to track, and run callback function when it is changed/updated
	// useEffect is called every time component is re-rendered, and checks for changes to  within array to see if it should run internal callback fxn - only runs when value has changed

	useEffect(
		() => {
			(async resource => {
				const response = await axios.get(
					`https://jsonplaceholder.typicode.com/${resource}`
				);

				setResources(response.data);
			})(resource);
		}, 
		[resource]
	);

	return resources;
};


const ResourceList = ({ resource }) => {
	const resources = useResources(resource);
	
	return <ul>{resources.map(record => (
			<li key={record.id}>{record.title}</li>
	))}</ul>;
};

export default ResourceList;
