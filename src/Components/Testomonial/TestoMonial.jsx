// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// // import required modules
// import { Pagination } from "swiper/modules";

// import { Navigation } from "swiper/modules";
// import { reviews } from "./../../Utility/Review";
// import Rating from "../Rating/Rating";
// const TestoMonial = () => {
//   return (
//     <section className="">
//       <div className="container mx-auto px-4 py-6">
//         <div className="my-27">
//           <div className="text-center mb-12">
//             <h5 className="text-amber-600 capitalize tracking-wide font-semibold mb-3 text-base">
//               Materials
//             </h5>
//             <h2 className="sm:font-semibold md:font-bold text-[25px] mb-3 capitalize ">
//               Very serious materials for making furniture
//             </h2>
//           </div>
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={10}
//             pagination={{
//               clickable: true,
//             }}
//             breakpoints={{
//               "@0.00": {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//               },
//               "@0.75": {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               "@1.00": {
//                 slidesPerView: 3,
//                 spaceBetween: 40,
//               },
//               "@1.50": {
//                 slidesPerView: 4,
//                 spaceBetween: 50,
//               },
//             }}
//             modules={[Pagination, Navigation]}
//             className="mySwiper"
//           >
//             {reviews.map((review, index) => (
//               <SwiperSlide
//                 key={index}
//                 className="bg-center bg-cover"
//                 style={{ backgroundImage: `url(${review.coverImg})` }}
//               >
//                 <div className="md:h-[547px]  flex md:justify-center items-center mb-4">
//                   <div className="mt-16 mb-5 rounded-xl bg-white  w-full p-4 mx-4 relative">
//                     <img
//                       className="mx-auto absolute -top-8 -translate-x-1/2 ring-2 ring-amber-700 object-cover left-1/2 rounded-full "
//                       src={review.image}
//                       alt="image"
//                     />
//                     <div
//                       className="mt-16 text-center
//                 "
//                     >
//                       <h3 className="text-lg font-semibold darK:text-black">
//                         {review.name}
//                       </h3>
//                       <p className="mb-2">Verified Customer</p>
//                       <p className="text-gray-500 mb-3">{review.review}</p>
//                       <div className="flex justify-center items-center">
//                         <Rating rating={review.rating} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestoMonial;

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // <-- add this
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { reviews } from "./../../Utility/Review";
import Rating from "../Rating/Rating";

const TestoMonial = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-12">
          <h5 className="text-amber-600 capitalize tracking-wide font-semibold mb-3 text-base">
            Materials
          </h5>
          <h2 className="sm:font-semibold md:font-bold text-[25px] mb-3 capitalize">
            Very serious materials for making furniture
          </h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation={true} // <-- Navigation enable
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
            1280: { slidesPerView: 4, spaceBetween: 50 },
          }}
          modules={[Pagination, Navigation]} // <-- modules এ add করো
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="bg-center bg-cover"
              style={{ backgroundImage: `url(${review.coverImg})` }}
            >
              <div className="md:h-[547px] flex md:justify-center items-center mb-4">
                <div className="mt-16 mb-5 rounded-xl bg-white w-full p-4 mx-4 relative">
                  <img
                    className="mx-auto absolute -top-8 -translate-x-1/2 ring-2 ring-amber-700 object-cover left-1/2 rounded-full "
                    src={review.image}
                    alt="image"
                  />
                  <div className="mt-16 text-center">
                    <h3 className="text-lg font-semibold dark:text-black">
                      {review.name}
                    </h3>
                    <p className="mb-2">Verified Customer</p>
                    <p className="text-gray-500 mb-3">{review.review}</p>
                    <div className="flex justify-center items-center">
                      <Rating rating={review.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestoMonial;
