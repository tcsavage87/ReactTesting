import React, { Component } from 'react';
import { connect } from 'react-redux';

// Connect Component defined inside SongList to provide access to Provider

class SongList extends Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary">
						Select
						</button>
					</div>
					<div className="content">
						{song.title}
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

// called with state inside redux store (reducers)
	// Return object that will show up as props inside component

const mapStateToProps = (state) => {
	// props to be passed into component via connect
	return { songs: state.songs };
};

// pass mapStateToProps as first argument in connect()
	// Takes the state information from first argument and passes it as props into component in second argument
	// second set of parens invokes a nested function with connect()

export default connect(mapStateToProps) (SongList);