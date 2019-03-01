import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

// React-router-dom automatically passes props down to Routes
class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.editStream(formValues);
	}

// initialValues prop works with redux-form including title & description
	// will set those values to initial values 
	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit a Stream</h3>
				<StreamForm
					initialValues={this.props.stream}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
};

// use ownProps argument to pass stream id from URL and access state object of stream with that key
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps, 
	{ fetchStream, editStream }
)(StreamEdit);