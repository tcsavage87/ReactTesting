import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Field is React Component, reduxForm is a fxn that connects actioncreator to component
	// Field doesn't have restrictions on what can be shown, use props to govern 

// Field comes with built-in props that contain onChange and value to connect to 
	// {...} takes all input object and saves them as props to input element
class StreamCreate extends React.Component {
	renderInput(formProps) {
		return (
			<div className="field">
				<label>{formProps.label}</label>
				<input {...formProps.input} />
			</div>
		);
	}

	render() {
		return (
			<form className="ui form">
				<Field name="title" label="Enter Title:" component={this.renderInput}/>
				<Field name="description" label="Enter Description:" component={this.renderInput}/>
			</form>
		);
	}
}

// reduxForm takes single object, form: 'nameOfForm'
export default reduxForm({
	form: 'streamCreate'
})(StreamCreate);