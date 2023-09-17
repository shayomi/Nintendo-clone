import React from "react";
import storebanner from "../../assets/nin-banner3.png";

const Onlinestore = () => {
  return (
    <section className="w-full max-w-[1800px] border-t-2 mt-12">
      <div className="w-[95%] mx-auto flex flex-col gap-y-4  mt-8">
        <h1 className="text-[36px] text-dark mb-6">Online Store</h1>
        <img src={storebanner} alt="loading" />
        <div className="flex  flex-col gap-y-4 justify-center xl:flex-row xl:justify-between xl:items-start ">
          <h1 className="text-dark w-auto  xl:max-w-[800px]">
            Shop games, exclusive Nintendo merchandise, and more! Plus, get free
            shipping on orders $50 and over.
          </h1>
          <div>
            <button className="btn w-full xl:w-auto ">Start Shopping</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onlinestore;
