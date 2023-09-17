import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/nin-logo1.png";
import america from "../../assets/nin-america.png";
import ninfoot from "../../assets/nin-footer-logo.png";

const Footer = () => {
  return (
    <section className="max-w-[1800px] w-full mt-16 ">
      <div className="flex flex-col gap-x-4 ">
        <div className="flex flex-col gap-y-1 sm:pb-4 sm:justify-center sm:mx-auto lg:flex-row lg:justify-between w-full bg-red min-h-[100px] px-3">
          <img
            className="px-3 items-start sm:w-[200px] lg:w-[200px] sm:mx-auto lg:mx-0   "
            src={logo}
            alt="logo"
          />
          <div className="flex flex-row gap-x-8 items-center sm:mx-auto lg:mx-0 ">
            <FaFacebook size={20} className="fill-white" />
            <FaInstagram size={20} className="fill-white" />
            <FaTwitter size={20} className="fill-white" />
            <FaYoutube size={20} className="fill-white" />
          </div>
        </div>
        <div className="flex flex-row gap-x-32 w-[95%] mx-auto mt-8">
          <div className="flex flex-col gap-y-2">
            <h1 className="font-medium text-dark text-[16px]">
              About Nintendo
            </h1>
            <p className="text-red text-[14px] font-medium">Careers</p>
            <p className="text-red text-[14px] font-medium">
              Coperate Social Responsibility
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-medium text-dark text-[16px]">Shop</h1>
            <p className="text-red text-[14px] font-medium">Games</p>
            <p className="text-red text-[14px] font-medium">Hardware</p>
            <p className="text-red text-[14px] font-medium">Merchandise</p>
            <p className="text-red text-[14px] font-medium">Sales & deals</p>
            <p className="text-red text-[14px] font-medium">Exclusives</p>
            <p className="text-red text-[14px] font-medium">Online services</p>
            <p className="text-red text-[14px] font-medium">
              Nintendo NY Store
            </p>
          </div>

          <div className="hidden md:flex flex-col gap-y-2 ">
            <h1 className="font-medium text-dark text-[16px]">
              My Nintendo Store Orders
            </h1>
            <p className="text-red text-[14px] font-medium">Order detail</p>
            <p className="text-red text-[14px] font-medium">Shipping info</p>
            <p className="text-red text-[14px] font-medium">
              Returns & Exchanges
            </p>
            <p className="text-red text-[14px] font-medium">FAQ</p>
          </div>
          <div className="hidden lg:flex flex-col gap-y-2">
            <h1 className="font-medium text-dark text-[16px]">Support</h1>
            <p className="text-red text-[14px] font-medium">Nintendo Switch</p>
            <p className="text-red text-[14px] font-medium">Nintendo Account</p>
            <p className="text-red text-[14px] font-medium">Other System</p>
            <p className="text-red text-[14px] font-medium">Repairs</p>
            <p className="text-red text-[14px] font-medium">
              Nintendo Product Recycling
            </p>
            <p className="text-red text-[14px] font-medium">Online services</p>
            <p className="text-red text-[14px] font-medium">
              Nintendo NY Store
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-x-[13rem] w-[95%] mx-auto mt-8">
          <div className="flex flex-col gap-y-2">
            <h1 className="font-medium text-dark text-[16px]">Parents</h1>
            <p className="text-red text-[14px] font-medium">Info for parents</p>
            <p className="text-red text-[14px] font-medium">Parental Control</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-medium text-dark text-[16px]">Community</h1>
            <p className="text-red text-[14px] font-medium">
              Community guidelines
            </p>
            <p className="text-red text-[14px] font-medium">
              Online safety principles
            </p>
          </div>

          <div className="sm:hidden md:flex flex-col gap-y-2">
            <h1 className="font-medium text-dark text-[16px]">Privacy</h1>
            <p className="text-red text-[14px] font-medium">Privacy policy</p>
            <p className="text-red text-[14px] font-medium">
              Cookies and interested-based ads
            </p>
          </div>
        </div>
        <div className="flex mt-8 sm:justify-center sm:mx-auto lg:justify-end lg:mx-0">
          <img src={ninfoot} alt="loading" />
        </div>
        <div className="flex flex-col gap-y-8 xl:flex-row gap-x-4 bg-[#3a3a3a] items-center min-h-[100px] mt-8 justify-between px-5 ">
          <div>
            <p className="text-white font-[400] text-[12px] items-center max-w-[400px]">
              © Nintendo. Games are property of their respective owners.
              Nintendo of America Inc. Headquarters are in Redmond, Washington,
              USA
            </p>
          </div>
          <div className="flex flex-row gap-x-4 items-start">
            <p className="text-white font-[400] text-[12px] items-center">
              Contact us
            </p>
            <p className="text-white font-[400] text-[12px] items-center">
              Website feedback
            </p>
            <p className="text-white font-[400] text-[12px] items-center">
              Terms of use
            </p>
            <p className="text-white font-[400] text-[12px] items-center">
              Documents and policies
            </p>
          </div>
          <span className="flex flex-row gap-x-2">
            <img
              className="px-3 items-center h-full max-h-[50px] w-[60px]  "
              src={america}
              alt="logo"
            />
            <p className="text-white font-[400] text-[12px] items-center">
              English(United State)
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
