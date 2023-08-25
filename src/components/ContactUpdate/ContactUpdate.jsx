import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import MaskedInput from 'react-text-mask';
import { closeModal } from 'redux/contacts/modalSlice';
import { updateContact } from 'redux/contacts/operations';
import { getupdatedContact } from 'redux/contacts/selectors';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(3).max(30).required(),
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

const ContactUpdate = () => {
  const dispatch = useDispatch();
  const { id, name, number } = useSelector(getupdatedContact);
  const handleSubmit = (value, { resetForm }) => {
    dispatch(updateContact({ id, value }));
    resetForm();
    dispatch(closeModal());
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className="flex flex-wrap items-end justify-between gap-x-3">
        <div className="w-[100%] lg:w-[48%] relative mb-2 lg:mb-0">
          <ErrorMessage name="name">
            {errorMsg => <div className="text-red-600 text-xs">{errorMsg}</div>}
          </ErrorMessage>
          <Field
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={name}
            required
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="w-[100%] lg:w-[48%] relative">
          <ErrorMessage name="number">
            {errorMsg => <div className="text-red-600 text-xs">{errorMsg}</div>}
          </ErrorMessage>
          <Field name="number" autoComplete="number" required>
            {({ field }) => (
              <MaskedInput
                {...field}
                id="number"
                type="text"
                name="number"
                mask={phoneNumberMask}
                placeholder={number}
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            )}
          </Field>
        </div>

        <div className="w-full mt-2">
          <button
            type="submit"
            className="transition-all flex w-full justify-center rounded-md bg-indigo-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactUpdate;
