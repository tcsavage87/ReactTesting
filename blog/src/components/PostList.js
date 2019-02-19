import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
							<UserHeader  id={post.userId} />
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="ui relaxed divided list">
				{this.renderList()}
			</div>
		);
	}
}

// pull in posts reducer from combineReducers and return it as posts for Component to see
const mapStateToProps = state => {
	return { posts: state.posts };
};

// Connect mapStateToProps and fetchPosts action to PostList component
export default connect(
	mapStateToProps, 
	{ fetchPostsAndUsers }
)(PostList);