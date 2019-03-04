import streams from '../apis/streams';
import history from '../history';
import { 
	SIGN_IN, 
	SIGN_OUT, 
	CREATE_STREAM, 
	FETCH_STREAMS, 
	FETCH_STREAM, 
	EDIT_STREAM, 
	DELETE_STREAM 
} from './types';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createStream = formValues => async (dispatch, getState) => {
	const { userId } = getState().auth;
	// Post values from form as well as userId
	const response = await streams.post('/streams', {...formValues, userId});
	// Manually dispatch results from nested action creator
	dispatch({ type: CREATE_STREAM, payload: response.data });
	// Implement Programmatic navigaton back to root route
		// use .push to direct to path
	history.push('/');
};

export const fetchStreams = () => async dispatch => {
	const response = await streams.get('/streams');

	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
	const response = await streams.get(`/streams/${id}`);
	
	dispatch({ type: FETCH_STREAM, payload: response.data });
}

export const editStream = (id, formValues) => async dispatch => {
	// Should use PATCH rather than PUT to only update some properties of record
		// PUT request updates all properties
	const response = await streams.patch(`/streams/${id}`, formValues);
	dispatch({ type: EDIT_STREAM, payload: response.data });
	history.push('/');
}

export const deleteStream = id => async dispatch => {
	await streams.delete(`/streams/${id}`);
	dispatch({ type: DELETE_STREAM, payload: id });
}