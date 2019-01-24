// to use code from another file/dependency/project must use import
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

// to make resuable configurable component
	// identify jsx to be duplicated
	// create new file to house component named after component
	// create new component in file, paste jsx inside
	// make configurable by using 'props'

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
				avatar={faker.image.avatar()} 
				author="Sam" 
				time="Yesterday at 6:00pm" 
				textComment="Nice blog post!" 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author="Becky" 
					time="Today at 6:15pm" 
					textComment="Very helpful" 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author="Tina" 
					time="Today at 7:03pm" 
					textComment="Thanks for posting" 
				/>
			</ApprovalCard>
		</div>
	);
};

// Define props within parent component by passing attribute into JSX tag
	// To show component within another, use JSX tag
	// To pass component as a prop within another component, remove self closing tag and use <Component> </Component> and pass between tags

ReactDOM.render(<App />, document.querySelector('#root'));

