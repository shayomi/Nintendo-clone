import React from "react";
import { NewsData1, NewsData2 } from "../../Data";
import { FaComment } from "react-icons/fa";

const News = () => {
  return (
    <section className="w-[full] max-w-[1800px] border-t-2 mt-12 mx-auto ">
      <div className="w-full max-w-[95%] flex flex-col gap-y-4 mt-7 mx-auto">
        <h1 className="text-[36px] text-dark mb-6">News</h1>
        <div className="flex flex-col gap-y-4 lg:flex-row gap-x-10 justify-evenly ">
          {NewsData1.map((data) => {
            return (
              <div
                key={data.id}
                className=" flex flex-col gap-y-4 sm:w-full lg:w-[600px]  "
              >
                <img
                  src={data.image}
                  className="w-[100%] rounded-lg "
                  alt="Loading"
                />
                <h1 className="font-[400] text-[15px] leading-5">
                  {data.date}
                </h1>
                <h1 className="font-bold text-[15px] leading-5">
                  {data.title}
                </h1>
                <h1 className="font-[400] text-[15px] leading-5">
                  {data.subtitle.substring(0, 150) + "..."}
                </h1>
                <h3 className="text-red border-b-[2px] border-red pb-1 w-[100px] cursor-pointer">
                  Read More
                </h3>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4  gap-x-10 justify-evenly mt-8 ">
          {NewsData2.map((data) => {
            return (
              <div
                key={data.id}
                className=" flex flex-col gap-y-4 lg:[200px]  xl:max-w-[280px]  "
              >
                <img
                  src={data.image}
                  className="w-[100%] rounded-lg "
                  alt="Loading"
                />
                <h1 className="font-[400] text-[15px] leading-5">
                  {data.date}
                </h1>
                <div className="">
                  <h1 className="font-bold text-[15px] leading-5 ">
                    {data.title}
                  </h1>
                </div>
                <h3 className="text-red border-b-[2px] border-red pb-1 w-[100px] cursor-pointer  mt-4">
                  Read More
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <button className="btn  w-full xl:w-auto max-w-[95%] ml-0 sm:mx-auto xl:ml-6 mt-4  ">
        <span className="flex flex-row items-center gap-x-4">
          <FaComment /> See all new articles
        </span>
      </button>
    </section>
  );
};

export default News;
