import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// Connect Component defined inside SongList to provide access to Provider

class SongList extends Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button 
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
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
	// anytime state is changed or reducers are run, mapStateToProps will re-run with new state object

const mapStateToProps = state => {
	// props to be passed into component via connect
	return { songs: state.songs };
};

// pass mapStateToProps as first argument in connect()
	// Takes the state information from first argument and passes it as props into component in second function argument
	// first fxn, second arg is selectSong action fxn
	// connect function wraps functions passed into store.dispatch, thereby linking it to reducers
	// second set of parens invokes a nested function with connect()

export default connect(mapStateToProps, {
	selectSong: selectSong
}) (SongList);