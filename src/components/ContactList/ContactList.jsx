import React from 'react';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import Contact from 'components/Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className="flex flex-wrap basis-[22%] gap-y-3.5 gap-x-2.5">
      {filteredContacts &&
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
