import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import contactsReducer from '../reducers/contacts-reducer';

const contactsPersistConfig = {
  key: 'savedContacts',
  storage,
  // blacklist: ['filter'],
};

const middleware = [...getDefaultMiddleware(), logger];

const persistedReducer = persistReducer(
  contactsPersistConfig,
  combineReducers({
    contacts: contactsReducer,
  }),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devtools: process.env.NODE_ENV === 'development',
});

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// export default store;

const persistor = persistStore(store);
export { store, persistor };
