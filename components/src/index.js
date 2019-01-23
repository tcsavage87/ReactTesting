import React from 'react';
import ReactDOM from 'react-dom';
// to use code from another file/dependency/project must use import
import faker from 'faker';

const App = () => {
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					<img src={faker.image.avatar()} alt="avatar" />
				</a>
				<div className="content">
					<a href="/" className="author">
						Sam
					</a>
					<div className="metadata">
						<span className="date">Today at 6:00pm</span>
					</div>
					<div className="text">Nice blog post
					</div>
				</div>
			</div>
			<div className="comment">
				<a href="/" className="avatar">
					<img src={faker.image.avatar()} alt="avatar" />
				</a>
				<div className="content">
					<a href="/" className="author">
						Jill
					</a>
					<div className="metadata">
						<span className="date">Today at 6:02pm</span>
					</div>
					<div className="text">Great information!
					</div>
				</div>
			</div>
			<div className="comment">
				<a href="/" className="avatar">
					<img src={faker.image.avatar()} alt="avatar" />
				</a>
				<div className="content">
					<a href="/" className="author">
						Greg
					</a>
					<div className="metadata">
						<span className="date">Today at 6:05pm</span>
					</div>
					<div className="text">Thanks for posting
					</div>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

