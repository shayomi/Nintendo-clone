import React from "react";

import logo from "../../assets/nin-logo1.png";
import america from "../../assets/nin-america.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaStore, FaNewspaper, FaStar } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";

import {
  BsQuestionSquare,
  BsFillHeartFill,
  BsPersonFill,
} from "react-icons/bs";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className="w-full max-w-[1800px] h-full max-h-[50px]  fixed z-50 xl:bg-body sm:bg-[#E60012] ">
      <div className="flex flex-col gap-y-4  xl:bg-body sm:bg-[#E60012] relative pb-5">
        <div className="flex flex-row justify-between items-center w-full  ">
          <div className="flex flex-row  gap-x-5 ">
            <div className="bg-[#E60012] h-full max-h-[50px] w-[150px]">
              <img className="px-3 items-start  " src={logo} alt="logo" />
            </div>
            <div className="hidden xl:flex flex-row w-[350px] items-center justify-between border-b-[1px] border-dark ">
              <span className="flex flex-row gap-x-2 items-center">
                <FaSearch size={16} />
                <h4 className="text-dark font-medium text-[16px] ">Search</h4>
              </span>

              <span className="flex flex-row gap-x-2 items-center ">
                <RiArrowDropDownLine className="order-2 mt-1" size={30} />
                <h4 className="text-dark font-medium text-[16px] cursor-pointer hover:text-[#E60012] ">
                  Category
                </h4>
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className=" hidden xl:flex flex-row justify-around gap-x-8 px-3 ">
                <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012]">
                  <BsQuestionSquare size={16} />
                  <h4 className="text-dark font-medium text-[16px] hover:text-[#E60012]">
                    Support
                  </h4>
                </span>
                <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012] ">
                  <BsFillHeartFill size={16} />
                  <h4 className="text-dark font-medium text-[16px] hover:text-[#E60012] ">
                    WishList
                  </h4>
                </span>
                <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012]">
                  <FaShoppingCart size={16} />
                  <h4 className="text-dark font-medium text-[16px] hover:text-[#E60012] ">
                    Cart
                  </h4>
                </span>
                <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012]">
                  <BsPersonFill size={16} />
                  <h4 className="text-dark font-medium text-[16px] hover:text-[#E60012]">
                    Login/Signup
                  </h4>
                </span>
              </div>
              <div className=" h-full max-h-[50px] w-[60px]">
                <img className="px-3 items-start  " src={america} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex xl:w-[100%] max-w-[1800px] h-full max-h-[50px]  relative ">
          <div className="flex flex-row justify-evenly items-center gap-x-4 mx-auto w-[80%]">
            <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012]">
              <FaStore className=" mt-1" size={20} />
              <h4 className="text-dark font-medium text-[12px] hover:text-[#E60012] ">
                My Nintendo Store
              </h4>
              <RiArrowDropDownLine className=" mt-1" size={30} />
            </span>
            <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012]">
              <MdGamepad className=" mt-1" size={20} />
              <h4 className="text-dark font-medium text-[12px] hover:text-[#E60012] ">
                Games
              </h4>
              <RiArrowDropDownLine className=" mt-1" size={30} />
            </span>
            <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012]">
              <SiNintendoswitch className=" mt-1" size={20} />
              <h4 className="text-dark font-medium text-[12px] hover:text-[#E60012] ">
                Nintendo Switch
              </h4>
              <RiArrowDropDownLine className=" mt-1" size={30} />
            </span>
            <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012]">
              <FaNewspaper className=" mt-1" size={20} />
              <h4 className="text-dark font-medium text-[12px] hover:text-[#E60012] ">
                News & Events
              </h4>
              <RiArrowDropDownLine className="mt-1" size={30} />
            </span>
            <span className="flex flex-row gap-x-2 items-center cursor-pointer hover:text-[#E60012]">
              <FaStar className=" mt-1" size={20} />
              <h4 className="text-dark font-medium text-[12px] hover:text-[#E60012] ">
                Play Nintendo
              </h4>
              <RiArrowDropDownLine className="mt-1" size={30} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
