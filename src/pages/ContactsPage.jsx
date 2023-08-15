import ContactForm from "../components/ContactForm/ContactForm"
import ContactList from "../components/ContactList/ContactList"
import Filter from "../components/Filter/Filter"
import { useEffect } from "react";
import { getError, getIsLoading } from "redux/contacts/selectors";
import { useDispatch, useSelector  } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import css from '../components/App.module.css'

const ContactsPage = () => {

    const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <br/>
      {isLoading && !error ? <b>Request in progress...</b>: <ContactList />} 
    </>
  )
}
export default ContactsPage