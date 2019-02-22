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

	toggleSignIn = () => {
		if (this.state.isSignedIn) {
			this.auth.signOut();
		} else {
			this.auth.signIn();
		}
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
			return (
				<button onClick={this.toggleSignIn} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={this.toggleSignIn} className="ui red google button">
					<i className="google icon" />
					Sign In with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}


export default GoogleAuth;