import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  changeFilter,
} from '../actions/contacts-actions';

const initialContactState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactReducer = createReducer(initialContactState, {
  [addContact]: (state, { payload }) =>
    state.some(
      ({ name, number }) => name === payload.name && number === payload.number,
    )
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],

  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
