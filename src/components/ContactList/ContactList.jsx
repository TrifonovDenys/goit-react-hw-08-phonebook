import React from "react";
import css from './ContactList.module.css'
import { useSelector } from "react-redux";
import { getContacts, getFilter} from "redux/contacts/selectors";
import Contact from "components/Contact/Contact";

const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredContacts && filteredContacts.map((contact) => <Contact key={contact.id} contact={contact} />)}
    </ul>
  );
};

export default ContactList;
