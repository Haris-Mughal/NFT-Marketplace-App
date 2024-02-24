import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/NFT Marketplace.svg";
import toggler from "../../assets/Burger Menu.svg";
import user from "../../assets/User.svg";
import store from "../../assets/Storefront.svg";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="py-5 px-5 md:px-10 bg-[#2B2B2B]">
      <div className=" flex flex-wrap items-center justify-between mx-auto">
        <div className="flex flex-wrap items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="flex justify-center items-end">
              <img
                src={store}
                className="ps-1 md:ms-2 h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] "
                alt="NFT Logo"
              />
              <img
                src={logo}
                className="ps-1 mb-[2px] md:ms-2 h-[18px] w-[180px] sm:h-[22px] sm:w-[200px]"
                alt="NFT Logo"
              />
            </div>
          </Link>
        </div>
        <div className="inline-flex lg:hidden flex-end pe-1">
          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center w-[22px] h-9 text-sm text-gray-500 lg:hidden "
            aria-controls="navbar-sticky"
            aria-expanded={isNavOpen ? "true" : "false"}
          >
            <img
              src={toggler}
              className={`${
                isNavOpen ? "rotate-180" : "rotate-0"
              } ease-in-out duration-50 inline-flex w-[22px] h-[70px]`}
              alt="Toggler"
            />
          </button>
        </div>
        <div
          className={`${
            isNavOpen ? "block ease-in-out duration-100 p-2" : "hidden"
          } w-full lg:flex sm:flex-col justify-end items-center md:w-auto lg:w-auto`}
          id="navbar-sticky"
        >
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-[15px] md:gap-[40px] items-center text-white text-[18px] font-semibold">
            <div className="text-md">Marketplace</div>
            <div className="text-md">Rankings</div>
            <div className="text-md">Connect a wallet</div>
            <button
              type="button"
              className="px-6 py-3 lg:py-4 bg-purple-500 rounded-[20px] justify-center items-center gap-3 inline-flex"
            >
              <div className="w-5 h-5 relative">
                <img src={user} alt="" />
              </div>
              <div className="text-center text-white text-base font-semibold">
                Sign Up
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
