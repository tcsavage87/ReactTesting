import React from 'react';
// To use history object, must use plain Router
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

// Avoid using anchor tags to navigate with React Router
	// With anchor tag, browser sends new request, receives new index.html file, dumps old React state data

// Use Link Component in place of anchor tags

// Exact keyword is used to ensure Route is only displayed with exact URL matching path
	// Switch will only show one route for any given path, preventing multiple Routes being shown that match the path
// To show on all pages, define content outside of BrowserRouter
const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" exact render={() => <StreamCreate />} />
						<Route path="/streams/edit/:id" exact component={StreamEdit} />
						<Route path="/streams/delete/:id" exact component={StreamDelete} />
						<Route path="/streams/:id" exact component={StreamShow} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};


export default App;