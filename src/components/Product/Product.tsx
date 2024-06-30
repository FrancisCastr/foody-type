import React from 'react';
import { IProductContent } from 'src/lib/types/product.type';
import { MdArrowBackIos } from 'react-icons/md';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';

import { formatter } from '@/lib/utils/format';
import AddtoCart from '../Cart/AddtoCart';
import StarRating from '../Stars';

const Product = ({ product }: { product: IProductContent }) => {
  const [amount, setAmount] = React.useState(1);
  const [wishlist, setWishlist] = React.useState<boolean>(false);

  const { id, name, image, price, desc, brand, inventory, averageRating } =
    product;

  const handleclick = () => {
    return window.history.back();
  };

  const addToWishlist = (id: string) => {
    const productId = {
      product: id,
    };
    setWishlist(!wishlist);

    // if (wishlist) {
    //   removeToFavorite({
    //     resource: 'favorite/removeFavorite',
    //     id: id,
    //     invalidates: ['all'],
    //   });
    // } else {
    //   addToFavorite({
    //     resource: 'favorite/addToFavorite',
    //     values: productId,
    //     invalidates: ['all'],
    //   });
    //   // dispatch(addtofavorite(product));
    // }
  };

  return (
    <>
      <div className='grid grid-cols-1 gap-4 mt-6 md:grid-cols-[600px_1fr] md:gap-14'>
        <div className='main shadow-light-shadow md:h-96'>
          <button
            className='p-2 bg-[#71dbad] text-white rounded-full absolute top-4 left-5 md:hidden'
            onClick={handleclick}>
            <MdArrowBackIos className='text-xl' />
          </button>
          <div className='bg-image'>
            <img src={product?.image} className='image1' alt={product?.name} />
          </div>
          <div className='bg-text'>
            <img src={product?.image} className='image2' alt={product?.name} />
          </div>
        </div>

        {/* description */}
        <div className='mb-32'>
          <p className='text-3xl font-bold'>{product?.name}</p>
          <div className='flex justify-between md:grid md:grid-cols-[200px_1fr] md:items-center'>
            {product?.averageRating ? (
              <>
                <div className='flex items-center space-x-3'>
                  <StarRating value={product?.averageRating.toString()} />
                  <div className='text-xl text-price-clr font-semibold'>
                    <span>{product?.averageRating}</span>
                  </div>
                </div>
              </>
            ) : (
              <StarRating value={product?.averageRating.toString()} />
            )}

            {/* {user && (
                <div
                  className='text-red text-3xl cursor-pointer'
                  onClick={() => addToWishlist(product?._id)}>
                  {wishlist ? (
                    <>
                      {productId !== product?._id && setWishlist(false)}
                      <AiFillHeart />
                    </>
                  ) : (
                    <>
                      {productId === product?._id && setWishlist(true)}
                      <AiOutlineHeart />
                    </>
                  )}
                </div>
              )} */}
          </div>
          <p className='text-xl font-bold text-price-clr my-8 md:text-3xl'>
            {formatter(product?.price)}
          </p>
          <p className='mb-8'>{product?.desc}</p>

          <p className='my-8 grid grid-cols-[130px_1fr]'>
            <span className='font-semibold'>Availability:</span>
            {product?.inventory > 0 ? 'In Stock' : 'Out Of Stock'}
          </p>
          <p className='my-8 grid grid-cols-[130px_1fr]'>
            <span className='font-semibold'>Stock:</span>
            {product?.inventory}
          </p>
          <p className='my-8 grid grid-cols-[130px_1fr]'>
            <span className='font-semibold'>Brand:</span>
            {product?.brand}
          </p>
          <hr
            style={{
              backgroundColor: '#000',
              height: '0.1rem',
              marginBottom: '2rem',
              opacity: 0.1,
            }}
          />
          {product?.inventory > 0 && (
            <div className='grid grid-cols-[125px_1fr] '>
              <span className='font-semibold text-lg'>Quantity:</span>
              <div className='flex gap-8 items-center'>
                <button
                  className='items-start p-3 shadow-7xl bg-mobile-bg rounded-full md:bg-white'
                  onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}>
                  <FiMinus />
                </button>
                <div className='font-bold text-xl'>{amount}</div>
                <button
                  className='items-start p-3 shadow-7xl bg-mobile-bg rounded-full text-primary-1 md:bg-white'
                  onClick={() =>
                    setAmount(
                      amount < product?.inventory
                        ? amount + 1
                        : product?.inventory
                    )
                  }>
                  <GoPlus />
                </button>
              </div>
            </div>
          )}

          {/* <div className='hidden mt-8 md:block'>
              {product?.inventory > 0 && (
                <WebAddtoCartBtn products={product} amount={amount} />
              )}
            </div> */}
          {inventory > 0 && <AddtoCart products={product} amount={amount} />}
        </div>
        {/* end description */}
      </div>
    </>
  );
};

export default Product;
