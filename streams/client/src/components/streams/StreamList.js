import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}
	// only render edit/delete buttons if streams are created by current User
	renderAdmin(stream) {
		if(stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui button negative">
						Delete
					</Link>
				</div>
			);
		}
	}

	// render list of streams from state
	renderList() {
		return this.props.streams.map(stream => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						{stream.title}
						<div className="description">
							{stream.description}
						</div>
					</div>
				</div>
			);
		});
	}

	// Only render createStream Link if user is signed in

	renderCreate() {
		if (this.props.isSignedIn) {
			return(
				<div style={{ textAlign: 'right' }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">
					{this.renderList()}
				</div>
				{this.renderCreate()}
			</div>
		);
	}
};

// iterate over object list of streams within mapStateToProps by using Object.values
	// Places all the values into an array
const mapStateToProps = state => {
	return { 
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	 };
};

export default connect(mapStateToProps, { 
	fetchStreams 
})(StreamList);