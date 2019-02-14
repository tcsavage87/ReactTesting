import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

// wrap App with Provider and pass provider store prop containing createStore function, which is passed reducers

// store is passed into provider and makes it accessible throughout sub-components

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>, 
	document.querySelector('#root')
);