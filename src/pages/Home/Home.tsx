import { useGetProductList } from '@/api/product.api';
// import InfiniteScroll from '@/components/Dump/InfiniteScroll';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data } = useGetProductList();

  const handlePrev = () => {
    // if (currentPage > 1) {
    //   setCurrentPage(currentPage - 1);
    // }
  };

  const handleNext = () => {
    // if (currentPage < pages.length) {
    //   setCurrentPage(currentPage + 1);
    // }
  };

  return (
    <>
      {/* <InfiniteScroll /> */}
      <section className='container'>
        <div>
          {/* <Form /> */}
          {/* {visibleContent?.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })} */}
          <div className='grid grid-cols-2 gap-4 place-items-center mt-4'>
            {data?.content.map((productList, index) => {
              const { id, name, image, tag, price } = productList;
              return (
                <Link
                  key={index}
                  className=' w-full p-4 rounded-xl shadow-light-shadow'
                  to={`/products/${id}`}>
                  <article className='grid place-items-center text-[#3f3f3f]'>
                    <img
                      src={image}
                      alt={name}
                      className='w-[100.89px] h-[100.43px]'
                    />
                    <p data-testid='name' className='text-lg'>
                      {name}
                    </p>
                    <p className='tag'>{tag}</p>
                    <div>
                      <h4>${price}</h4>
                    </div>
                  </article>
                </Link>
              );
            })}{' '}
          </div>
        </div>
        <div className='flex justify-center gap-8'>
          <div className='w-8 h-8 p-1 text-center'>
            <button onClick={handlePrev}>Prev</button>
          </div>
          testing
          <div className='w-8 h-8 p-1 text-center'>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

// const Home = () => {
//   const { data } = useQuery({
//     queryKey: ['postsData'],
//     queryFn: () =>
//       axios.get<IProduct[]>(
//         // 'https://jsonplaceholder.typicode.com/posts'
//         'http://localhost:8081/api/v1/products/getAllProduct'
//       ),
//   });
//   console.log(data?.data);
//   const [content, setContent] = useState<IProduct[]>([]);
//   const [contentPerPage, setContentPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   const numOfTotalPages = Math.ceil(data!.data.length / contentPerPage);
//   const pages = Array.from({ length: numOfTotalPages + 1 }, (_, i) => i).slice(
//     1
//   );

//   const lastIndexOfContent = currentPage * numOfTotalPages;
//   const firstIndexOfContent = lastIndexOfContent - contentPerPage;

//   const visibleContent = data?.data.slice(
//     firstIndexOfContent,
//     lastIndexOfContent
//   );

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < pages.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <>
//       <section className='container'>
//         <div className='flex items-center justify-center mt-12'>
//           {/* <Form /> */}
//           testing
//           {/* {visibleContent?.map((item, index) => {
//             return <div key={index}>{item.name}</div>;
//           })} */}
//         </div>
//         <div className='flex justify-center gap-8'>
//           <div className='w-8 h-8 p-1 text-center'>
//             <button onClick={handlePrev}>Prev</button>
//           </div>
//           <p className='flex gap-3'>
//             {pages.map((page) => {
//               return (
//                 <span
//                   key={page}
//                   className={`${
//                     currentPage === page && 'text-lg font-bold'
//                   } cursor-pointer w-8 h-8  p-1 rounded-lg bg-clr-blue text-white text-center`}
//                   onClick={() => setCurrentPage(page)}>
//                   {page}
//                 </span>
//               );
//             })}
//           </p>
//           <div className='w-8 h-8 p-1 text-center'>
//             <button onClick={handleNext}>Next</button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };
