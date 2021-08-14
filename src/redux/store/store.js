import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from '../contacts/contacts-reducer';

// const reducer = (state = {}, action) => state;
// const store = createStore(reducer);
// export default store;

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
