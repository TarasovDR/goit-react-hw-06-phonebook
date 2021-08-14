// import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

// export const addContact = createAction('contacts/Add', (name, number) => {
//   type: types.ADD,
//   payload: {
//     id: `id-${uuidv4()}`,
//     name,
//     number,
//   },
// };
// export const deleteContact = createAction('contacts/Delete');

// export const changeFilter = createAction('filter/Change');

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: `id-${uuidv4()}`,
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});
