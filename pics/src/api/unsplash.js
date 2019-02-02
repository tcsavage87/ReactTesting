import axios from 'axios';

// Goal to put some amount of code relating to axios unsplash request

// Set up preconfigured instance of axios client with default properties

// .create() method creates instance of axios client with customizable properties object
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 
			'Client-ID 22bb2e24b1017b016bd1ad67c05b31ace10751af66cee5d27a9ee9f8f8a90eb1'
	}
});