import { createReducer } from '@reduxjs/toolkit';
import { addContact, setFilter } from './actions';
import { deleteContact } from './actions';

const initialState = [
  {
    id: 0,
    name: 'Barbara',
    number: '555444333',
  },
  {
    id: 1,
    name: 'Tomasz',
    number: '555222333',
  },
  {
    id: 2,
    name: 'Halina',
    number: '555111333',
  },
];
const initialFilter = '';

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export const filterReducer = createReducer(initialFilter, {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
