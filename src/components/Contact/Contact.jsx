import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { RxCross2, RxUpdate } from 'react-icons/rx';
import { BsFillPhoneFill, BsFillPersonFill } from 'react-icons/bs';
import { openModal } from 'redux/contacts/modalSlice';
import { getUpdatetContactId } from 'redux/contacts/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const hendleOpenModal = () => {
    dispatch(openModal());
    dispatch(getUpdatetContactId(contact));
  };

  return (
    <li
      className="w-[100%] lg:w-[49.5%] transition-all flex items-center justify-between border-solid border-2 border-indigo-600 p-2 rounded-md bg-white hover:shadow-md"
      key={contact.id}
    >
      <div>
        <div className="flex items-center">
          <BsFillPersonFill className="fill-indigo-600" />
          <span className="ml-2 "> Name: {contact.name}</span>
        </div>

        <div className="flex items-center">
          <BsFillPhoneFill className="fill-indigo-600" />
          <span className="ml-2 ">Number: {contact.number}</span>
        </div>
      </div>
      <div>
        <button
          className="mr-2 transition-all rounded-md border-solid border-2 border-indigo-600 bg-indigo-600 py-1 px-1 hover:bg-indigo-100 text-white hover:text-black"
          onClick={hendleOpenModal}
        >
          <RxUpdate />
        </button>
        <button
          className="transition-all rounded-md border-solid border-2 border-indigo-600 bg-indigo-600 py-1 px-1 hover:bg-indigo-100 text-white hover:text-black"
          onClick={handleDelete}
        >
          <RxCross2 />
        </button>
      </div>
    </li>
  );
};
export default Contact;
