import { useGetProduct } from '@/api/product.api';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Product from '@/components/Product/Product';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useGetProduct(id!);

  return (
    <>
      <Navbar />
      <section className='container  md:my-24 pb-16'>
        {data !== undefined ? (
          <Product product={data} />
        ) : (
          <div>Something went wrong</div>
        )}
      </section>
      <div className='hidden md:block'>
        <Footer />
      </div>
    </>
  );
};

export default SingleProduct;
