import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Must pull applyMiddleware to wire up thunk
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

/* Code to hookup thunk to redux store */

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.querySelector('#root')
);

// Loading Data with Redux

// Components are responsible for fetching needed data by calling an action creator
// Action creators make API requests (Redux-Thunk works here)
// We get fetched data into component by generating new state in store, and retrieving with mapStateToProps

// - Component gets rendered to screen
// - componentDidMount() gets called
// - Call action creator from componentDidMount()
// - Action creator runs code to make API request, API responds w/ data
// - Action creator returns 'action' with data on the payload property
// - Reducer sees action, returns the data off the payload
// - app is re-rendered because of new state objects
