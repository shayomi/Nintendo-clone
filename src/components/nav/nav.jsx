import React from "react";
import "./nav.css";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="sm:flex xl:hidden">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiMenu size={35} className="fill-[#161616]" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaHeart size={35} className="fill-[#161616]" />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaSearch
          size={35}
          className="fill-white bg-red rounded-full px-3 py-3"
        />
      </a>
      <a
        href="#service"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#service" ? "active" : ""}
      >
        <FaShoppingCart size={35} className="fill-[#161616]" />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsPersonFill size={35} className="fill-[#161616]" />
      </a>
    </nav>
  );
};

export default Nav;
