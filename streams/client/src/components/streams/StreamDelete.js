import React from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
		console.log(this.props.stream.id);
	}

	// React.Fragment is container that has no impact on spacing in the DOM
		// Can be shortened to <> </>
	renderActions() {
		return (
			<React.Fragment>
				<button 
					onClick={() => this.props.deleteStream(this.props.stream.id)} 
					className="ui button negative"
				>
					Delete
				</button>	
				<Link 
					to="/"
					className="ui button"
				>
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderContent() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream?';
		}
		return `Are you you want to delete the stream with title: ${this.props.stream.title}?`;
	}

	render() {
		
		return (
				<Modal 
					title={`Delete Stream`}
					content={this.renderContent()}
					actions={this.renderActions()}
					onDismiss={() => history.push('/')}
				/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
};

export default connect (
	mapStateToProps, 
	{ fetchStream, deleteStream }
)(StreamDelete);