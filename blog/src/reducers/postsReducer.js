export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}
};

// If action.type is fetch_posts, return payload, otherwise return state

	// Frequently use switch statement rather than if