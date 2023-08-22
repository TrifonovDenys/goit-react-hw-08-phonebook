import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
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

  const clearFilter = e => {
    e.currentTarget.parentNode.children[1].value = '';
    dispatch(filterContact(e.currentTarget.parentNode.children[1].value));
    e.currentTarget.classList.add('hidden');
  };

  return (
    <Formik>
      <Form className="w-1/2">
        <div className="relative">
          <label className="" htmlFor="filter">
          </label>
          <Field
            id="name"
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="filter"
            type="text"
            placeholder='Search contact'
            onChange={handleFilter}
          />
          <div
            className="hidden absolute right-1 top-1/2 cursor-pointer"
            onClick={clearFilter}
          >
            <RxCross2 />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Filter;
