import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

// React-router-dom automatically passes props down to Routes
class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	render() {
		console.log(this.props);
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}
		return <div>{this.props.stream.title}</div>;
	}
};

// use ownProps argument to pass stream id from URL and access state object of stream with that key
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps, 
	{ fetchStream }
)(StreamEdit);