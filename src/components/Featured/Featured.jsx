import React from "react";
import featuredImage from "../../assets/nin-banner2.jpg";
import featureImg from "../../assets/feature-img.png";
import { FeaturedData } from "../../Data";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Featured = () => {
  return (
    <section className="w-[full] max-w-[1800px] relative border-t-2">
      <div className="flex flex-col gap-y-4 w-[95%] mx-auto mt-7">
        <h1 className="text-[36px] text-dark mb-6">Featured</h1>
        <img
          className="-[auto] max-h-[500px] rounded-xl"
          src={featuredImage}
          alt="featuredimage"
        />
        <div className="flex  flex-col gap-y-4  xl:flex-row xl:justify-between xl:items-start ">
          <h1 className="text-dark w-auto xl:max-w-[500px]">
            Continue your Pokémon adventure beyond Paldea in the Hidden Treasure
            of Area Zero Part 1: The Teal Mask
          </h1>
          <div>
            <button className="btn w-full xl:w-auto ">Learn More</button>
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={featureImg} alt="featuredimage" />
          </div>
        </div>
        <div className="mt-5">
          <Swiper
            className="mt-8 pb-5"
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
            {FeaturedData.map((data) => {
              return (
                <SwiperSlide
                  key={data.id}
                  className="border-dark border-[1px] w-[full] max-w-[300px] flex flex-col gap-y-4 rounded-lg "
                >
                  <img src={data.image} className="w-[100%] " alt="Loading " />
                  <div className="w-[95%] mx-auto">
                    <h3 className="font-bold text-[15px] leading-5">
                      {data.title}{" "}
                    </h3>
                    <p className="mt-8 border-l-4 border-red px-2 mb-4">
                      {data.type}
                    </p>
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

export default Featured;
