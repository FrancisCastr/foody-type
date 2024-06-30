import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className='grid place-items-center'>
        <h1 className='my-6 text-primary-1 text-4xl md:text-5xl font-semibold'>
          We're Sorry!
        </h1>
        <p>The item you search is not found</p>

        <Link
          to='/'
          className='text-white p-4 bg-clr-blue rounded-lg font-semibold cursor-pointer'>
          Go Back
        </Link>
      </div>
    </>
  );
};

export default NotFound;
