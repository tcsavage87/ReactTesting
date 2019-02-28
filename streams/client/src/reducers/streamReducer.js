import { 
	CREATE_STREAM, 
	FETCH_STREAMS, 
	FETCH_STREAM, 
	EDIT_STREAM, 
	DELETE_STREAM 
} from '../actions/types';



export default (state={}, action) {
	switch (action.type) {
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			return { ...state}
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			// return state with key interpolation
			// look at action.payload.id, create new key using it and assign value of action.payload 
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return {...state, [action.payload]: undefined };
		default:
			return state;
	}
}