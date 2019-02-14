// Action creator (return JS Object)
// use named export statement to export multiple functions

export const selectSong = (song) => {
	// Return an action (req type property, opt payload)
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};


 