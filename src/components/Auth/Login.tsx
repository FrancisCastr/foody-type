import { Form } from '../Form';
import Navbar from '../Navbar';

import Footer from '../Footer';
import FoodSVG from '@/assets/svg/FoodSVG';

const Login = () => {
  return (
    <>
      <Navbar />
      <section className='container my-8 md:my-24 pb-16'>
        <div className='md:grid md:grid-cols-[1.4fr_1fr] md:gap-1 xl:grid-cols-[2fr_1fr] gap-8'>
          <div className='hidden md:flex md:flex-col-reverse'>
            <div className='grid place-content-center md:flex md:justify-start'>
              <FoodSVG className='w-80 h-72 xl:w-[400px] xl:h-[300px]' />
            </div>
            <div className='text-center md:text-left'>
              <h1 className='text-4xl md:text-5xl  font-semibold '>
                Hungry? You're
                <br />
                in the right place
              </h1>
              <p>
                Signin to get started and order
                <br />
                your delicious food.
              </p>
            </div>
          </div>
          <Form />
        </div>
      </section>
      <div className='hidden md:block'>
        <Footer />
      </div>
    </>
  );
};

export default Login;
