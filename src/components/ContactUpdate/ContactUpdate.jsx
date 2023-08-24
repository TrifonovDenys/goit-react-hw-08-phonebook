import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import MaskedInput from 'react-text-mask';
import { updateContact } from 'redux/contacts/operations';
import { getupdatedContact } from 'redux/contacts/selectors';
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

const ContactUpdate = () => {
  const dispatch = useDispatch()
  const updateId = useSelector(getupdatedContact)
  console.log(updateId);
  const handleSubmit = (value, { resetForm }) => {
    // if (contacts.some(({ name }) => name === value.name)) {
    // }
    dispatch(updateContact(updateId))
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className="flex flex-wrap items-center justify-between gap-x-3">
        <div className="w-[48%]">
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

        <div className="w-[48%]">
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

        <div className="w-full mt-2">
          <button
            type="submit"
            className="transition-all flex w-full justify-center rounded-md bg-indigo-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            // onClick={}
          >
            Update contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactUpdate;
