import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context';
import * as serviceWorker from './serviceWorker';

// At highest level of component tree, wrap Provider around all

ReactDOM.render(
	<ProductProvider>
		<Router>
			<App />
		</Router>
	</ProductProvider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
