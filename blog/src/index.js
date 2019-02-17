import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
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
