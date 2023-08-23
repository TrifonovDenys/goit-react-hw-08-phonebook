import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          to="/login"
          className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
        >
          Log in <span aria-hidden="true">&larr;</span>
        </Link>
      </div>
    </>
  );
};

export default AuthNav;
