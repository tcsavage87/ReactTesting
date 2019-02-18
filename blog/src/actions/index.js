import jsonPlaceholder from '../apis/jsonPlaceholder';

/* 

In redux, action creators must return plain Objects with a type property
	When transpiled, code with async/await doesn't return plain object, rather .get request
By time action gets to reducer, we won't have fetched data from API
	Action to reducer occurs instantly, API takes time

Synchronous action creators - instantly returns an action with data available

Asynchronous action creators - requires time to return data for action (API requests)
	Must install middleware to make asynchronous requests within action creators

Redux-Thunk - middleware that aids with asynchronous action creators
	Dispatch sends actions to Middleware
	Middleware holds onto actions until data is returned, then sends to reducers to process

-Middleware
	Fxn that gets called with every action we dispatch
	Can stop, modify or affect actions
	Most popular use is to deal with async actions

-Redux-Thunk
	Allows different rules for action creators
		Action Creators can return objects
					OR
		Action Creators can return functions
	If returns function, will automatically call fxn with dispatch and getState as args
		dispatch - unlimited power to change to data on redux side
		getState - return all data within redux store
	Wait for request to finish --> Then dispatch action manually

-When using thunk, don't return any objects from inner functions inside Action Creators
	Call dispatch manually with action, using async/await
	Action will get dispatched once a response is received

*/

// Defining function that will return function that gets data from API, and passes it to dispatch

export const fetchPosts = () => async dispatch => {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response })
};
