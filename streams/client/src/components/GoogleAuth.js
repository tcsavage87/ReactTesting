import React from 'react';
import key from '../gapi';

// use .then() to invooke function once library has initialized

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: key,
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange();
				// Listen for change on isSignedIn (event listener)
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	// Add listen method to isSignedIn to listen for changes, when changes occur call onAuthChange to setState
	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>Unknown signed in value</div>;
		} else if (this.state.isSignedIn) {
			return <div>Signed In!</div>;
		} else {
			return <div>Not signed in...</div>;
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}


export default GoogleAuth;