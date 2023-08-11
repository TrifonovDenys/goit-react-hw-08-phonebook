import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

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
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchContacts.pending]: hendlePending,
    [addContact.pending]: hendlePending,
    [deleteContact.pending]: hendlePending,
    [fetchContacts.rejected]: hendleReject,
    [addContact.rejected]: hendleReject,
    [deleteContact.rejected]: hendleReject,
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
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
  },
});

export const contactReducer = contactSlice.reducer;
