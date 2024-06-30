import React from 'react';
import { IProductContent } from 'src/lib/types/product.type';

const AddtoCart = ({
  products,
  amount,
}: {
  products: IProductContent;
  amount: number;
}) => {
  const handleAdd = () => {
    // const cartItems = {
    //   product: products?._id,
    //   quantity: amount,
    // };
    // user
    //   ? mutate(
    //       {
    //         resource: 'cart',
    //         values: {
    //           cartItems,
    //         },
    //       },
    //       { onSuccess: () => navigate('/cart') }
    //     )
    //   : navigate('/login');
  };

  return (
    <div className='fixed left-0 w-full bottom-0 bg-mobile-bg py-4 border border-t-slate-300 md:relative md:w-fit md:bg-white md:border-none'>
      <div className='container md:p-0'>
        <button
          className='flex justify-center text-white rounded-full p-4 bg-primary-1 w-full md:rounded-lg'
          onClick={handleAdd}>
          {/* {isLoading ? <span>Adding...</span> : <span>Add to Cart</span>} */}
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default AddtoCart;
