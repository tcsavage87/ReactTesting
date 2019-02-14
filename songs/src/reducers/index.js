import { combineReducers } from 'redux';

// Reducers file

	// Song list reducer - containing static list of songs
const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Macarena', duration: '2:30' },
		{ title: 'All Star', duration: '3:15' },
		{ title: 'I Want it That Way', duration: '1:45' }
	];
};

	// Selected song reducer - takes selected song and action
const selectedSongReducer = (selectedSong=null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

// combineReducers is built into redux library, and exports both reducer functions

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});