import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

/* Redux form provides reducer to handle form data to store */
	/* must be labeled as key "form" */


export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer
});