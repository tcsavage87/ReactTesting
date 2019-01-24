// to use code from another file/dependency/project must use import
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// to make resuable configurable component
	// identify jsx to be duplicated
	// create new file to house component named after component
	// create new component in file, paste jsx inside
	// make configurable by using 'props'

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail 
				avatar={faker.image.avatar()} 
				author="Sam" 
				time="Yesterday at 6:00pm" 
				textComment="Nice blog post!" 
			/>
			<CommentDetail 
				avatar={faker.image.avatar()} 
				author="Becky" 
				time="Today at 6:15pm" 
				textComment="Very helpful" 
			/>
			<CommentDetail 
				avatar={faker.image.avatar()} 
				author="Tina" 
				time="Today at 7:03pm" 
				textComment="Thanks for posting" 
			/>
		</div>
	);
};

// Define props within parent component by passing attribute into JSX tag

// To show component within another, use JSX tag

ReactDOM.render(<App />, document.querySelector('#root'));

