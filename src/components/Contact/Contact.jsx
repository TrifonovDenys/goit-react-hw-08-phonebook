import { deleteContact } from 'redux/contacts/operations';
import css from '../ContactList/ContactList.module.css'
import { useDispatch } from 'react-redux';
import {RxCross2} from 'react-icons/rx'

const Contact = ({ contact }) => {
const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(contact.id))
  return (
    <li className={css.item} key={contact.id}>
      <p className={css.text}> {contact.name}:
        <span>{contact.number}</span>
      </p>
      <button onClick={handleDelete}><RxCross2/></button>
    </li>
  )
}
export default Contact