export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_USER':
			return [...state, action.payload];
		default:
			return state;
	}
};

// If action.type is fetch_posts, return payload, otherwise return state

	// Frequently use switch statement rather than if