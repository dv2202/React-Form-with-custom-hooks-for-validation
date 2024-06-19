import React from 'react';
import EventRegistrationForm from './components/EventRegistrationForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1 className="text-xl">Event Registration</h1>
      </header>
      <main className="p-4">
        <EventRegistrationForm />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
