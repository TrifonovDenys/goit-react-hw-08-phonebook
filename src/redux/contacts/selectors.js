export const getContacts = state => state.contacts.contacts.items;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
export const getFilter = state => state.filter.filter;
export const getFilterAlphabet = state => state.filter.filterAlphabet;
export const getModal = state => state.modal.isOpen;
export const getState = state => state;
