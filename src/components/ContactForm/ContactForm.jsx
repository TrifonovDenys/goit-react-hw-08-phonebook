import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { option } from 'aditionJs/toastOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, Form } from 'formik';
import MaskedInput from 'react-text-mask';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const phoneNumberMask = [
  '+',
  /\d/,
  /\d/,
  ' ',
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (value, { resetForm }) => {
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
        <Form className="lg:flex flex-wrap items-end max-w-lg gap-x-3 py-6 mx-auto my-0 lg:mx-0 lg:my-0">
          <div>
            <div className="mb-3 lg:mb-0">
              <Field
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Name"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="mb-3 lg:mb-0">
              <Field name="number" autoComplete="number" required>
                {({ field }) => (
                  <MaskedInput
                    {...field}
                    type="text"
                    name="number"
                    mask={phoneNumberMask}
                    placeholder="Number: +38 ( )"
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                )}
              </Field>
            </div>
          </div>

          <div>
            <button
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
