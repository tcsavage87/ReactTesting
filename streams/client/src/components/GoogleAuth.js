import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import key from '../gapi';

// use .then() to invooke function once library has initialized

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: key,
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				// Listen for change on isSignedIn (event listener)
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	// Add listen method to isSignedIn to listen for changes, when changes occur call onAuthChange to setState
	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	toggleSignIn = () => {
		if (this.props.isSignedIn) {
			this.auth.signOut();
		} else {
			this.auth.signIn();
		}
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
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

const mapStateToProps = state => {
	console.log(state);
	return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {
	signIn: signIn,
	signOut: signOut
})(GoogleAuth);



