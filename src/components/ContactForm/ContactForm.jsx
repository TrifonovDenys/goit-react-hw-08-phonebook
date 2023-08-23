import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { option } from 'aditionJs/toastOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(), 
})

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (value, {resetForm}) => {
    if (contacts.some(({ name }) => name === value.name)) {
      return toast('contact alredy added', option);
    }
    dispatch(addContact(value));
    resetForm();
    toast('contact added', option);
  };

  return (
    <>
      <ToastContainer
        toastStyle={{ fontSize: 20, backgroundColor: 'rgb(79, 70, 229)' }}
      />
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
    >
        <Form className="flex items-end max-w-lg gap-x-3 py-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            ></label>
            <div className="mt-2">
              <Field
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Name"
                // required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            ></label>
            <div className="mt-2">
              <Field
                id="number"
                name="number"
                type="number"
                autoComplete="number"
                placeholder="Number"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={e => Formik.resetForm()}
              type="submit"
              className="transition-all flex w-full justify-center rounded-md bg-indigo-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
