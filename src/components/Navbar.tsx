import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoBagOutline } from 'react-icons/io5';
import Logo from './Logo';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <section className='relative my-8'>
      <div className='container'>
        <div className='hidden md:flex md:justify-between md:items-center'>
          <div className='flex gap-4'>
            <Link to='/' className=' md:text-primary-1 md:cursor-pointer'>
              Home
            </Link>
            <Link
              to='/products'
              className=' md:text-primary-1 md:cursor-pointer'>
              Products
            </Link>
          </div>
          <div>
            {/* {user ? (
              <>
                <UserProfile user={user} />
              </>
            ) : (
              <Link className='user-btn' to='/login'>
                Login
              </Link>
            )} */}
            {pathname !== '/login' && (
              <Link
                className='p-2 bg-primary-1 text-white rounded-md'
                to='/login'>
                Login
              </Link>
            )}
          </div>
        </div>
        <div className='md:flex md:justify-between md:items-center md:mt-8'>
          <div className='flex justify-center'>
            <Logo />
          </div>

          <form className='w-full flex  justify-between h-11  shadow-shadow text-primary-1 md:w-7/12 rounded-lg md:rounded-none '>
            <input
              type='text'
              name='search'
              className='outline-none pl-4 w-full rounded-lg md:rounded-none '
              //   value={search}
              placeholder='Search Store'
              //   onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type='submit'
              //   onClick={handleSearchProducts}
              className='hidden md:w-24 md:flex md: items-center md:justify-center border-none text-white bg-clr-blue'>
              Search
            </button>
          </form>

          <Link to='/cart' className='hidden md:flex'>
            <div className='relative'>
              <IoBagOutline className='w-8 h-12 text-primary-1' />

              {/* {user && (
                <span className='absolute w-6 h-6  flex items-center justify-center top-[2px] -right-3 bg-primary-1 rounded-full text-white p-2'>
                  {Object.keys(cartItems).length}
                </span>
              )} */}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
