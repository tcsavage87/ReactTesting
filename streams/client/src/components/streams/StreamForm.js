import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Field is React Component, reduxForm is a fxn that connects actioncreator to component
	// Field doesn't have restrictions on what can be shown, use props to govern 
	// name is required to match with validate error returns
// Field comes with built-in props that contain onChange and value to connect to 
	// {...} takes all input object and saves them as props to input element

// handleSubmit will take care of preventDefault() automatically

// formProps.meta contains error object from validate and can be rendered to page
	// meta.touched contains boolean indicating whether field has been touched by user

// Semantic UI by default hides error messages, so must include className of error in form 
class StreamForm extends React.Component {
	renderError(meta) {
		if (meta.touched && meta.error) {
			return (
				<div className="ui error message">
					<div className="header">{meta.error}</div>
				</div>
			);
		}
	}

	// renderInput must be arrow fxn to have value of this work
	renderInput = ({input, label, meta}) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}

	render() {
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" label="Enter Title:" component={this.renderInput}/>
				<Field name="description" label="Enter Description:" component={this.renderInput}/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

// validate fxn helps validate user input, must be connected to component via reduxForm helper
	// gets called on initial render and on every user interaction

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		// only run if user didn't enter title, must include key/value pair for error message
		errors.title = 'A title is required to create a stream';
	}

	if (!formValues.description) {
		// only run if user didn't enter description, must include key/value pair for error message
		errors.description = 'A description is required to create a stream';
	}
	// If valid, return empty object, indicating validity
	return errors;
};


// reduxForm takes single object, form: 'nameOfForm'
export default reduxForm({
	form: 'streamForm',
	validate: validate
})(StreamForm);
