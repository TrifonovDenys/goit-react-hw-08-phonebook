import React from 'react';

import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  getFilterAlphabet,
} from 'redux/contacts/selectors';
import Contact from 'components/Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterA = useSelector(getFilterAlphabet);

  let filteredContacts = [];
  if (!filterA) {
    filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    filteredContacts = contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => {
        // Сравниваем значения поля 'name' для двух объектов
        const nameA = a.name.toUpperCase(); // Приводим к верхнему регистру для учета регистра
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1; // a должно быть перед b
        }
        if (nameA > nameB) {
          return 1; // b должно быть перед a
        }
        return 0; // имена равны
      });
  }

  return (
    <ul className="flex flex-wrap basis-[50%] gap-y-3.5  justify-between">
      {filteredContacts &&
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
