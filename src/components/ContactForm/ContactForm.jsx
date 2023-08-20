import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { option } from 'aditionJs/toastOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (contacts.some(({ name }) => name === form.elements.name.value)) {
      form.reset();
      return toast('contact alredy added', option);
    }
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
    toast('contact added', option);
  };

  return (
    <>
      <ToastContainer toastStyle={{ fontSize: 20, backgroundColor: 'rgb(79, 70, 229)' }} />
      {/* <form className={css.form} onSubmit={handleSubmit}> */}
        <form className="space-y-6 " onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="number"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Number
          </label>
          <div className="mt-2">
            <input
              id="number"
              name="number"
              type='number'
              autoComplete="number"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
