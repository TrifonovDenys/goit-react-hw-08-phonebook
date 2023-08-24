import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
    filterAlphabet: false,
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
    filterAlphabet(state, action) {
      state.filterAlphabet = action.payload;
    },
  },
});
export const { filterContact, filterAlphabet } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
