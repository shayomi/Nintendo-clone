import React from "react";
import hero from "../../assets/nin-banner.png";
import herosmall from "../../assets/nin-banner-small.png";
import Header from "../Header/Header.jsx";

const Hero = () => {
  return (
    <section className="w-full max-w-[1800px] bg-hero bg-contain h-[auto] sm:h-[auto] sm:max-h-[800px] xl:max-h-[600px] xl:mb-[12rem] ">
      <Header />

      <img
        src={hero}
        className="rounded-[10px] shadow-2xl  max-h-[100%] sm:hidden xl:flex  w-full max-w-[95%] relative object-contain  xl:top-[9rem]  mx-auto"
        alt="hero"
      />

      <img
        src={herosmall}
        className="sm:flex   relative object-cover  xl:hidden  h-[auto] max-h-[700px] w-full"
        alt="hero"
      />
      <div className="max-w-[95%] mt-0 flex  flex-col gap-y-4  xl:flex-row xl:justify-between xl:items-start  relative xl:top-[10rem] mx-auto xl:ml-10">
        <h1 className="sm:text-white xl:text-black">
          The Next Evolution of Mario fun! Jump in 10/20
        </h1>
        <div>
          <button className="btn w-full xl:w-auto ">Pre-order now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
