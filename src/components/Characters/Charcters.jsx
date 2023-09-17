import React from "react";
import { CharacterData } from "../../Data";

const Charcters = () => {
  return (
    <section className="w-[full] max-w-[1800px] border-t-2 mt-12 mx-auto ">
      <div className="w-full max-w-[95%] flex flex-col gap-y-4 mt-7 mx-auto">
        <h1 className="text-[36px] text-dark mb-6">Characters</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4  gap-x-10 justify-evenly mt-4 ">
          {CharacterData.map((data) => {
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
                <div className="">
                  <h1 className="font-bold text-[18px] leading-5 ">
                    {data.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Charcters;
