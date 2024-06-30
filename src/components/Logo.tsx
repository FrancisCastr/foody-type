import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <section>
      <Link to='/' className='font-semibold text-primary-1'>
        <h3 className='text-4xl '>Foody</h3>
      </Link>
    </section>
  );
};

export default Logo;
