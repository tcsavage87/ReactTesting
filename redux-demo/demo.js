// People dropping off form (Action Creators)
// Must include type and payload

const createPolicy = (name, amount) => {
  return { // Action (object)
    type: 'CREATE_POLICY', // convention is caps and underscore
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const makeClaim = (name, amount) => {
  return {
    type: 'MAKE_CLAIM',
    payload: {
      name: name,
      moneyToCollect: amount
    }
  };
};

// Reducers (Departments)
// Every reducer is a fxn, with args (oldData, action)
// Default first arg is empty array

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'MAKE_CLAIM') {
    // Take array, add records to new array, then add new payload
    // Always avoid modifying existing data inside reducers
    return [...oldListOfClaims, action.payload];
  }
  // we don't care about the action
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'MAKE_CLAIM') {
    return bagOfMoney - action.payload.moneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPolicies;
};

// Store - collection of reducers and action creators

const { createStore, combineReducers } = Redux;

// combineReducers used to collate all reducers and create keys for these reducer function
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

// Now have Store object representing entire Redux app, including Reducers and data produced

// Store includes various built-in functions

// Dispatch passes action and runs it to reducers
// Each dispatch is a complete execution of redux cycle
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(makeClaim('Alex', 120));
store.dispatch(makeClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

// Can only modify state by using dispatch() and action creator
// getState() pulls repository of data at current time
console.log(store.getState());