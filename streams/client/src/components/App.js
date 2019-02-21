import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Avoid using anchor tags to navigate with React Router
	// With anchor tag, browser sends new request, receives new index.html file, dumps old React state data

// Use Link Component in place of anchor tags

const PageOne = () => {
	return (
		<div>PageOne
			<Link to="/pagetwo">Navigate to Page Two</Link>
		</div>
	);
};

const PageTwo = () => {
	return (
		<div>
			PageTwo
			<button>Click Me!</button>
			<Link to="/">Navigate to Page Two</Link>
		</div>
	);
};

// Exact keyword is used to ensure Route is only displayed with exact URL matching path

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path="/" exact component={PageOne} />
					<Route path="/pagetwo" component={PageTwo} />
				</div>
			</BrowserRouter>
		</div>
	);
};


export default App;