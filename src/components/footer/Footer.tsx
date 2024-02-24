import React from "react";
import logo from "../../assets/NFT Marketplace.svg";
import store from "../../assets/Storefront.svg";
import discord from "../../assets/DiscordLogo.svg";
import youtube from "../../assets/YoutubeLogo.svg";
import twitter from "../../assets/TwitterLogo.svg";
import instagram from "../../assets/InstagramLogo.svg";
import envelop from "../../assets/EnvelopeSimple.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="bg-neutral-700 py-5">
      <div className="w-full px-10 md:px-16 md:ms-0 py-10 flex-col justify-start sm:justify-center items-center gap-[30px] inline-flex">
        <div className="w-full lg:w-[1040px] md:justify-start lg:justify-between items-start lg:inline-flex md:inline-block">
          <div className="w-[327.41px] md:w-[400px] pr-[84px] md:pe-0 flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="w-100 h-8 relative">
              <div className="flex flex-wrap items-center">
                <Link
                  to="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <div className="flex justify-between items-center">
                    <img
                      src={store}
                      className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] "
                      alt="NFT "
                    />
                    <img
                      src={logo}
                      className="ps-1 mt-3 md:ms-2 h-[18px] w-[180px] sm:h-[22px] sm:w-[200px]"
                      alt=" Logo"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[280px] md:w-[360px] lg:w-[238px] text-stone-300 lg:text-[17px] font-normal work-sans leading-snug">
                NFT marketplace UI created with Anima for Figma.
              </div>
              <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="w-[238px] h-[17px] text-stone-300 font-normal work-sans leading-snug">
                  Join our community
                </div>
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className="w-8 h-8 relative text-stone-500">
                    <Link to="https://www.facebook.com/" target="_blank">
                      <img src={discord} alt="" />
                    </Link>
                  </div>
                  <div className="w-8 h-8 relative text-stone-500">
                    <Link to="https://www.instagram.com/" target="_blank">
                      <img src={youtube} alt="" />
                    </Link>
                  </div>
                  <div className="w-8 h-8 relative text-stone-500">
                    <Link to="https://www.twitter.com/" target="_blank">
                      <img src={twitter} alt="" />
                    </Link>
                  </div>
                  <div className="w-8 h-8 relative text-stone-500">
                    <Link to="https://www.instagram.com/" target="_blank">
                      <img src={instagram} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="w-60 lg:ms-[-120px] flex-col justify-start items-start gap-[15px] mt-12 md:mt-14 lg:mt-0 inline-flex">
            <div className="text-white text-[22px] font-bold font-space-mono capitalize leading-9">
              Explore
            </div>
            <div className="flex-col justify-center pt-[9px] items-start gap-5 flex">
              <div className="text-stone-300 font-normal text-[17px] work-sans leading-snug">
                Marketplace
              </div>
              <div className="text-stone-300 font-normal text-[17px] work-sans leading-snug">
                Rankings
              </div>
              <div className="text-stone-300 font-normal text-[17px] work-sans leading-snug">
                Connect a wallet
              </div>
            </div>
          </div>
          <br />
          <div className="lg:ms-[-80px] w-68 lg:ps-0 flex-col justify-start items-start gap-[15px] mt-12 md:mt-14 lg:mt-0 inline-flex">
            <div className="text-white text-[22px] font-bold font-space-mono capitalize leading-9">
              Join our weekly digest
            </div>
            <div className="w-68 flex-col justify-start items-start gap-5 flex">
              <div className="w-[300px] md:w-[450px] lg:w-[300px] text-stone-300 text-[17px] font-normal work-sans leading-snug">
                Get exclusive promotions & updates straight to your inbox.
              </div>
              <div className="flex flex-col md:flex-row text-white w-[315px] fs:flex-nowrap h-[108px] md:w-[300px] md:h-[80px] fs:w-[425px] fs:h-[60px] fs:pt-[6px] fs:pb-[16px] gap-[16px] fs:gap-0 ">
                <div className="flex justify-center bg-white rounded-[20px] w-[296px] h-[46px] md:w-[300px] md:h-[55px] fs:w-[425px] fs:h-[60px] md:px-[20px] md:py-[16px] fs:ps-[1px] gap-[12px]">
                  <input
                    className="font-normal md:w-[180px] outline-none text-[14px] placeholder-[#2B2B2B]"
                    type="email"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <button
                  className="flex justify-center items-center bg-[#A259FF] w-[296px] h-[46px] md:ms-[-45px] md:w-[300px] md:h-[55px] fs:w-[211px] fs:h-[60px] rounded-[20px] msc:py-0 px-[50px] fs:px-[50px] gap-[12px] "
                  type="button"
                  title="Subscribe"
                >
                  <div className="w-5 h-5">
                    <img src={envelop} alt="" className="w-5 h-5 relative" />
                  </div>
                  <div className="text-white font-semibold text-[16px] font-work-sans ">
                    Subscribe
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[296px] md:w-[700px] lg:w-[1040px] border border-zinc-500 md:px-7" />
        <div className="w-full lg:w-[1040px] items-start flex">
          <div className="text-[14px] sm:text-[17px] text-stone-300 text-start font-normal work-sans leading-[20px] w-full">
            <p>
              &copy; NFT Market. Made with 🖤 by{" "}
              <span className="font-bold">Muhammad Haris Ahsan</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
