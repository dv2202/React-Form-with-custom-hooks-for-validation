import React from 'react';
import useForm from '../hooks/useform';
import validateForm from '../hooks/validateForm';

const EventRegistrationForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: false,
    guestName: ''
  }, validateForm);

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.name ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.age ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.age && <p className="text-red-500 text-xs italic">{errors.age}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Are you attending with a guest?
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="attendingWithGuest"
              checked={values.attendingWithGuest}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">Yes</span>
          </label>
        </div>

        {values.attendingWithGuest && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guestName">
              Guest Name
            </label>
            <input
              type="text"
              name="guestName"
              value={values.guestName}
              onChange={handleChange}
              className={`shadow appearance-none border ${errors.guestName ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.guestName && <p className="text-red-500 text-xs italic">{errors.guestName}</p>}
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
      {Object.keys(errors).length === 0 && values.name && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h2 className="text-lg font-bold">Form Data:</h2>
          <p><strong>Name:</strong> {values.name}</p>
          <p><strong>Email:</strong> {values.email}</p>
          <p><strong>Age:</strong> {values.age}</p>
          {values.attendingWithGuest && (
            <>
              <p><strong>Attending with Guest:</strong> Yes</p>
              <p><strong>Guest Name:</strong> {values.guestName}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
