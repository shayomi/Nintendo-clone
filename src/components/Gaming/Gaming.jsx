import React from "react";
import gamingbanner from "../../assets/nin-banner4.png";

const Gaming = () => {
  return (
    <section className="w-full max-w-[1800px] border-t-2 mt-12">
      <div className="w-[95%] mx-auto flex flex-col gap-y-4  mt-8">
        <h1 className="text-[36px] text-dark mb-6">Gaming System</h1>
        <img src={gamingbanner} alt="loading" />
        <div className="flex  flex-col gap-y-4 justify-center xl:flex-row xl:justify-between xl:items-start ">
          <h1 className="text-dark w-auto  xl:max-w-[800px]">
            Find the perfect Nintendo Switch system for you.
          </h1>
          <div>
            <button className="btn w-full xl:w-auto ">Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gaming;
