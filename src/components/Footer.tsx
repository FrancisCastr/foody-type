import { AiOutlineHome } from 'react-icons/ai';

//product
import { BsListNested } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';

import { IoBagOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';

import QualitySVG from '@/assets/svg/QualitySVG';
import DiscountSVG from '@/assets/svg/DiscountSVG';
import DeliverySVG from '@/assets/svg/DeliverySVG';

const Footer = () => {
  const getYear = (): number => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <>
      <section className='fixed w-full bottom-0 z-20 bg-mobile-bg'>
        <div className='text-2xl flex justify-between shadow-dark-shadow rounded-t-lg py-1 px-8  md:hidden'>
          <NavLink
            to='/'
            className='text-[#3f3f3f] leading-4 flex justify-center items-center flex-col'>
            <AiOutlineHome />
            <span className='nav-name'>Home</span>
          </NavLink>

          <NavLink
            to='/products'
            className='text-[#3f3f3f] leading-4 flex justify-center items-center flex-col'>
            <BsListNested className='text-3xl' />
            <span className='nav-name'>Explore</span>
          </NavLink>
          <NavLink
            to='/cart'
            className='text-[#3f3f3f] leading-4 flex justify-center items-center flex-col'>
            <span className='relative'>
              <IoBagOutline />
              {/* {user && (
              <span className='absolute w-6 h-6  flex items-center justify-center top-[2px] -right-3 bg-primary-1 rounded-full text-white p-2'>
                {Object.keys(cartItems).length}
              </span>
            )} */}

              <span className='absolute w-4 h-4 text-xs flex items-center justify-center -top-1 -right-1 bg-primary-1 rounded-full text-white p-2'>
                10
              </span>
            </span>
            <span className='nav-name'>Cart</span>
          </NavLink>
          <NavLink
            to='/favorites'
            className='text-[#3f3f3f] leading-4 flex justify-center items-center flex-col'>
            <AiOutlineHeart />
            <span className='nav-name'>Favorite</span>
          </NavLink>
          <NavLink
            to='/profile'
            className='text-[#3f3f3f] leading-4 flex justify-center items-center flex-col'>
            <VscAccount />
            <span className='nav-name'>Account</span>
          </NavLink>
        </div>
      </section>
      {/* //web */}
      <div className='hidden md:block  container md:relative md:mt-8'>
        <div className='flex justify-between p-4 bg-[#f4fbff]'>
          <div className='flex gap-4'>
            <div>
              <DeliverySVG className='w-16 h-16 p-2 border border-primary-1 rounded-full bg-cover' />
            </div>
            <div className='desc'>
              <h4 className='font-semibold'>Next Day Delivery </h4>
              <p>Next day delivery on your door step.</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div>
              <QualitySVG className='w-16 h-16 p-2 border border-primary-1 rounded-full bg-cover' />
            </div>
            <div className='desc'>
              <h4 className='font-semibold'>100% Satisfaction </h4>
              <p>We value our customer with healthy and fresh products.</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div>
              <DiscountSVG className='w-16 h-16 p-2 border border-primary-1 rounded-full bg-cover' />
            </div>
            <div className='desc'>
              <h4 className='font-semibold'>Greate Discounts</h4>
              <p>We offer greate discounts for our costumer.</p>
            </div>
          </div>
        </div>

        {/* about */}
        <div className='py-20 text-dark-grey flex justify-between'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl text-primary-1 font-semibold'>
              About Foody
            </h1>
            <Link className='text-dark-grey text-lg' to='/about'>
              About Us
            </Link>
            <Link className='text-dark-grey text-lg' to='/policy'>
              Foody policy
            </Link>

            <Link className='text-dark-grey text-lg' to='/policy'>
              Terms and Conditions
            </Link>
          </div>

          {/*  payment*/}
          <div>
            <h1 className='text-2xl text-primary-1 font-semibold'>
              Payment Methods
            </h1>
            <div className='flex'>
              <img
                className='w-28 text-center'
                src='https://res.cloudinary.com/dyvisacbu/image/upload/v1644926132/food-denx/payment/visa_mwdph0.png'
                alt='visa'
              />
              <img
                className='w-28 text-center'
                src='https://res.cloudinary.com/dyvisacbu/image/upload/v1644926247/food-denx/payment/gcash_gz6t51.png'
                alt='gcash'
              />
            </div>
            <div className='flex'>
              <img
                className='w-28 text-center'
                src='https://res.cloudinary.com/dyvisacbu/image/upload/v1644926132/food-denx/payment/amex_amjdwb.png'
                alt='Amex'
              />
              <img
                className='w-28 text-center'
                src='https://res.cloudinary.com/dyvisacbu/image/upload/v1644926132/food-denx/payment/jcb_qvznfg.png'
                alt='JCB'
              />
            </div>
          </div>

          {/* follow us */}
          <div className='follow-us'>
            <h1 className='text-2xl text-primary-1 font-semibold'>Follow Us</h1>
            <div className='flex flex-col gap-4'>
              <Link to='https://google.com'>Facebook</Link>
              <Link to='https://google.com'>Instagram</Link>
              <Link to='https://google.com'>Twitter</Link>
              <Link to='https://google.com'>Linkedin</Link>
            </div>
          </div>
        </div>

        {/* copyright */}
        <p className='flex justify-center items-center gap-2'>
          Made And Craft With <BsFillHeartFill className='text-red-500' /> By :
          Francis Castro {getYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
