import { deleteContact } from 'redux/contacts/operations';
import css from '../ContactList/ContactList.module.css';
import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li
      className="min-w-[24.2%] transition-all flex items-center justify-between border-solid border-2 border-indigo-600 p-2 rounded-md bg-white hover:shadow-md"
      key={contact.id}
    >
      <div>
        <p className={css.text}>Name: {contact.name}</p>
        <span>Number: {contact.number}</span>
      </div>
      <button
        className="transition-all rounded-md border-solid border-2 border-indigo-600 bg-indigo-600 py-1 px-1 hover:bg-indigo-100 text-white hover:text-black"
        onClick={handleDelete}
      >
        <RxCross2 />
      </button>
    </li>
  );
};
export default Contact;
