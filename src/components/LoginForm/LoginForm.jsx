import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';

const LoginForm = () => {

  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    dispatch(
      logIn(e)
    );
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}>
      
      <Form
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <Field
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a> */}
            </div>
          </div>
          <div className="mt-2">
            <Field
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
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
            Sign in
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
