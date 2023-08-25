import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const hendlePending = state => {
  state.contacts.isLoading = true;
};
const hendleReject = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      updatedContact: '',
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    getUpdatetContactId: (state, action) => {
      state.contacts.updatedContact = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: hendlePending,
    [addContact.pending]: hendlePending,
    [deleteContact.pending]: hendlePending,
    [updateContact.pending]: hendlePending,

    [fetchContacts.rejected]: hendleReject,
    [addContact.rejected]: hendleReject,
    [deleteContact.rejected]: hendleReject,
    [updateContact.rejected]: hendleReject,

    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [updateContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1, action.payload);
    },
  },
});

export const { getUpdatetContactId } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
