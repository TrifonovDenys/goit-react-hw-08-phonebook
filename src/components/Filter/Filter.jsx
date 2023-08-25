import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact, filterAlphabet } from 'redux/contacts/filterSlice';
import { Formik, Field, Form } from 'formik';
import { RxCross2 } from 'react-icons/rx';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    if (e.currentTarget.value) {
      e.currentTarget.parentNode.children[2].classList.remove('hidden');
    } else {
      e.currentTarget.parentNode.children[2].classList.add('hidden');
    }
    dispatch(filterContact(e.currentTarget.value));
  };

  const handleAlphabet = e => {
    dispatch(filterAlphabet(e.target.checked));
  };

  const clearFilter = e => {
    e.currentTarget.parentNode.children[1].value = '';
    dispatch(filterContact(e.currentTarget.parentNode.children[1].value));
    e.currentTarget.classList.add('hidden');
  };

  return (
    <div className="lg:flex items-center max-w-lg lg:max-w-[100%] justify-center justify-between mx-auto my-0">
      <Formik initialValues={{ email: '', password: '' }}>
        <Form className="w-[100%] lg:w-1/2 ">
          <div className="relative">
            <label className="" htmlFor="filter"></label>
            <Field
              id="name"
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="filter"
              type="text"
              placeholder="Search contact"
              onChange={handleFilter}
            />
            <div
              className="hidden absolute right-1 top-[10%] cursor-pointer"
              onClick={clearFilter}
            >
              <RxCross2 />
            </div>
          </div>
        </Form>
      </Formik>
      <div className="flex items-center mt-3 lg:mt-0">
        <input
          id="checkbox"
          type="checkbox"
          value=""
          onChange={handleAlphabet}
          className="rounded-md w-6 h-6 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Sort by Alphabet
        </label>
      </div>
    </div>
  );
};

export default Filter;
