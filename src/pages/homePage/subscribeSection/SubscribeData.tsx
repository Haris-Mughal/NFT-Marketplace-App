import React from "react";
import { useAppSelector } from "../../../store/store";
import { Link } from "react-router-dom";
import envelop from "../../../assets/EnvelopeSimple.svg";
import Loader from "../../../components/loader/Loader";

export default function SubscribeData() {
  const { data: collections, isLoading } = useAppSelector(
    (state) => state.collections
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {collections.slice(2, 3)?.map((item, i) => {
        return (
          <div
            key={i}
            className="w-full h-[645px] md:h-[480px] fs:h-[550px] fs:px-[195px] py-[40px] gap-[10px] flex justify-center items-center bg-[#2B2B2B]"
          >
            <div className="flex flex-col md:flex-row fs:flex-row w-[315px] h-[565px] md:w-[690px] md:h-[360px] fs:w-full fs:h-[390px] rounded-[20px] md:py-[40px] md:px-[30px] fs:p-[40px] gap-[30px] fs:gap-[50px] bg-[#2B2B2B] md:bg-[#3B3B3B] ">
              <div className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] fs:w-[425px] fs:h-[310px] rounded-[20px] ">
                <Link to={`/collection/${item.collection}`}>
                  <img
                    src={item.image_url}
                    alt={item.collection}
                    className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] fs:w-[425px] fs:h-[310px] rounded-[20px] object-cover"
                  />
                </Link>
              </div>
              <div className="w-[315px] h-[280px] md:w-[300px] md:h-[280px] fs:w-[425px] fs:h-[272px] gap-[10px] ">
                <div className="w-[315px] h-[132px] md:w-[300px] md:h-[132px] fs:w-[425px] fs:h-[172px] gap-[10px] fs:gap-[20px] ">
                  <div className="text-white text-[28px] md:text-[34px] fs:text-[42px] font-semibold font-work-sans msc:leading-[39.2px] fs:leading-[45.6px] ">
                    Join Our Weekly Digest
                  </div>
                  <div className="text-white text-[16px] fs:text-[22px] font-normal font-work-sans fs:leading-[35.2px] md:my-[15px]">
                    Get exclusive promotions & updates straight to your inbox.
                  </div>
                </div>
                <div className="flex flex-col md:flex-col fs:flex-row text-white w-[315px] fs:flex-nowrap h-[108px] md:w-[300px] md:h-[108px] fs:w-[425px] fs:h-[60px] mt-[20px] md:mt-[30px] fs:py-[16px] gap-[16px] fs:gap-0 ">
                  <div className="flex justify-center bg-white rounded-[20px] w-[315px] h-[46px] md:w-[300px] md:h-[46px] fs:w-[425px] fs:h-[60px] md:px-[20px] md:py-[16px] fs:ps-[1px] gap-[12px]">
                    <input
                      className="font-normal outline-none text-[16px] placeholder-[#2B2B2B]"
                      type="email"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <button
                    className="flex justify-center items-center bg-[#A259FF] w-[315px] h-[46px] fs:ms-[-45px] md:w-[300px] md:h-[46px] fs:w-[211px] fs:h-[60px] rounded-[20px] msc:py-0 px-[50px] fs:px-[50px] gap-[12px] "
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
        );
      })}
    </div>
  );
}
