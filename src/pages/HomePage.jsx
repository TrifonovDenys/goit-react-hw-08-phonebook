import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Link
        to="/contacts"
        className="transition-all text-center flex w-[50%] mx-auto my-[20%] text-lg justify-center rounded-md bg-indigo-600 px-5 py-5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add your contacts
      </Link>
    </>
  );
};

export default HomePage;
