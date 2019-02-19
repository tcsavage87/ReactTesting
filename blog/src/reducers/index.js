import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
	posts: postsReducer,
	users: usersReducer
});

/* Safe ways to update state in reducers (create new array/object rather than change original)

	-Remove element - state.filter(element => element !== 1)
	-Adding element - [...state, 1] or [1, ...state]
	-Replacing element - state.map(el => el === 1 ? 2: el)

	-Updating property(override) - {...state, name: 'Tom'}
	-Adding property - {...state, age: 30}
	-Removing property - {...state, age: undefined }
		OR w/ lodash - _.omit(state, property)

*/