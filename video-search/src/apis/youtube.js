import axios from 'axios';

const KEY = 'AIzaSyAzx1Wrz_NcYjNh0plC9LblNyiZ6B3r25o';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
