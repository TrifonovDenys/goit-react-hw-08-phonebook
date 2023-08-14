import { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getError, getIsLoading } from "redux/contacts/selectors";

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from './App.module.css'
import Login from "pages/Login";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      // <div
      //   style={{
      //     height: '100vh',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101',
      //     padding: '20px',
      //   }}
      // >
      //   <h1 className={css.title}>Phonebook</h1>
      //   <ContactForm/>
      //   <h2 className={css.title}>Contacts</h2>
      //   <Filter />
      //   <br/>
      //   {isLoading && !error ? <b>Request in progress...</b>: <ContactList />} 
        
      // </div>
      // <Routers>
      //   <Route></Route>
      // </Routers>
      <Login/>
    )
  }