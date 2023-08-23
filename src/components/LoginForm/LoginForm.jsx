import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(20).required(), 
})

const LoginForm = () => {

  const dispatch = useDispatch();
  
  const handleSubmit = (v,a) => {
    dispatch(
      logIn(v)
    );
    // a.resetForm()
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      
      <Form
        className="space-y-6"
      >
        <div>
          <ErrorMessage name="email">
            {errorMsg => <div className="text-red-600">{errorMsg}</div>}
          </ErrorMessage>
          <div className="mt-2">
            <Field
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
            <ErrorMessage name="password">
            {errorMsg => <div className="text-red-600">{errorMsg}</div>}
            </ErrorMessage>
          <div className="mt-2">
            <Field
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="transition-all flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
