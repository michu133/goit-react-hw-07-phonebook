import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/ADD', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contacts/DELETE', id => {
  return {
    payload: id,
  };
});
export const setFilter = createAction('filter/SET', value => {
  return {
    payload: value,
  };
});
