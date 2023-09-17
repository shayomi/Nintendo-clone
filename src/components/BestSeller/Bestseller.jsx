import React from "react";
import { BestsellerData } from "../../Data";
import { FaRegHeart } from "react-icons/fa";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Bestseller = () => {
  return (
    <section className="w-[full] max-w-[1800px] mt-12 border-t-2">
      <div className="flex flex-col gap-y-4 w-[95%] mx-auto mt-7">
        <div className="flex flex-row gap-x-4 mb-6">
          <h1 className="text-[36px] text-dark ">Best Sellers</h1>
          <h3 className="text-red border-b-[2px] border-red pb-1 w-[100px] cursor-pointer  ">
            See full list
          </h3>
        </div>
        <div className="">
          <Swiper
            className="mt-5 pb-5"
            // install Swiper modules
            //   modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              640: { width: 640, slidesPerView: 1 },
              768: { width: 640, slidesPerView: 2 },
            }}
            spaceBetween={40}
            // slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {BestsellerData.map((data) => {
              return (
                <SwiperSlide
                  key={data.id}
                  className="border-dark border-[1px] w-[full] max-w-[300px] flex flex-col gap-y-4 rounded-lg "
                >
                  <img src={data.image} className="w-[100%]" alt="Loading" />

                  <div className="w-[95%] mx-auto">
                    <h3 className="font-bold text-[16px] leading-5">
                      {data.title}
                    </h3>
                    <h3 className="font-[300] text-[15px]">{data.date}</h3>
                    <div className="mt-8">
                      <h3 className="font-bold text-[16px] ">${data.price}</h3>
                      <div className="flex flex-row justify-between mb-4 mt-2 items-center ">
                        <p className=" border-l-4 border-red px-2  ">
                          {data.type}
                        </p>
                        <FaRegHeart className="fill-red" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Bestseller;
