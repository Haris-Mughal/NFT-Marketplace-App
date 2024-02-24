import React from "react";
import { useAppSelector } from "../../../store/store";
import rocket from "../../../assets/RocketLaunch.svg";
import { Link } from "react-router-dom";
import Loader from "../../../components/loader/Loader";

export default function HeroData() {
  const gaib = "hidden";

  const { data: collections, isLoading } = useAppSelector(
    (state) => state.collections
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {collections.slice(2, 3)?.map((item, i) => {
        return (
          <div
            key={i}
            className="w-full h-[766px] md:h-[470px] lg:h-[640px] pt-[40px] md:py-[30px] md:px-[50px] lg:px-[115px] gap-[50px] flex justify-center items-start bg-[#2B2B2B]"
          >
            <div className="md:hidden w-[315px] h-[706px] gap-[30px]">
              <div className="w-[315px] h-[154px] gap-10">
                <div className="text-white font-semibold text-[28px] font-work-sans leading-[39.2px]">
                  Discover Digital Art & Collect NFTs
                </div>
                <div className="text-white font-normal text-[16px] pt-3 font-work-sans leading-[22.4px]">
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </div>
              </div>
              <div className="w-[315px] h-[315px] rounded-[20px] pt-5">
                <div className="w-[315px] h-[206px] rounded-tr-[20px] rounded-tl-[20px] bg-[#3B3B3B]">
                  <Link to={`/collection/${item.collection}`}>
                    <img
                      src={item.image_url}
                      alt={item.collection}
                      className="w-full h-[206px] rounded-tr-[20px] rounded-tl-[20px] object-cover"
                    />
                  </Link>
                </div>
                <div className="w-[315px] h-[109px] rounded-bl-[20px] rounded-br-[20px] p-[20px] gap-[10px] bg-[#3B3B3B]">
                  <div className="text-white text-[22px] font-semibold font-work-sans leading-[30.8px]">
                    {item.name}
                  </div>
                  <div className="gap-[10px] flex flex-row">
                    <div className="w-6 h-6">
                      <img
                        src={item.image_url}
                        alt=""
                        className="w-6 h-6 rounded-[100px]"
                      />
                    </div>
                    <div className="text-white text-[16px] font-normal font-work-sans leading-[22.4px]">
                      {item.collection.slice(0, 10)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[315px] h-[60px] rounded-[20px] mt-[60px] flex justify-center items-center px-[50px] gap-[12px] bg-[#A259FF]">
                <button
                  type="button"
                  className="flex flex-row justify-center items-center"
                >
                  <div className="w-5 h-5">
                    <img src={rocket} alt="" className="w-5 h-5 relative" />
                  </div>
                  <div className="text-white text-[16px] font-semibold items-center font-work-sans leading-[22.4px]">
                    Get Started
                  </div>
                </button>
              </div>
              <div className="w-[315px] h-[57px] gap-[30px] pt-[40px] flex flex-row">
                <div className="w-[85px] h-[57px] gap-[8px]">
                  <div className="text-white font-semibold text-[22px] font-space-mono leading-[35.2px]">
                    240k+
                  </div>
                  <div className="text-white font-400 text-[16px] font-work-sans leading-[22.4px]">
                    Total Saleg
                  </div>
                </div>
                <div className="w-[85px] h-[57px] gap-[8px]">
                  <div className="text-white font-semibold text-[22px] font-space-mono leading-[35.2px]">
                    100k+
                  </div>
                  <div className="text-white font-400 text-[16px] font-work-sans leading-[22.4px]">
                    Auction
                  </div>
                </div>
                <div className="w-[85px] h-[57px] gap-[8px]">
                  <div className="text-white font-semibold text-[22px] font-space-mono leading-[35.2px]">
                    240k+
                  </div>
                  <div className="text-white font-400 text-[16px] font-work-sans leading-[22.4px]">
                    Artist
                  </div>
                </div>
              </div>
            </div>
            {/* hidden md:block */}
            <div
              className={`${gaib} md:block md:w-full md:h-[381px] lg:w-[1050px] lg:h-[544px]`}
            >
              <div className="flex md:flex-row md:justify-between lg:justify-center md:items-start gap-[30px]">
                <div className="md:w-[330px] md:h-[381px] lg:w-[510px] lg:h-[544px] md:gap-[20px] lg:gap-[30px] ">
                  <div className="md:w-[330px] md:h-[214px] lg:w-[510px] lg:h-[347px] md:gap-[20px]">
                    <div className="text-white font-semibold md:text-[38px] lg:text-[70px] font-work-sans leading-[39.2px] lg:leading-[73.7px]">
                      Discover Digital Art & Collect NFTs
                    </div>
                    <div className="text-white font-normal text-[16px] md:pt-4 lg:pt-5 lg:text-[22px] font-work-sans leading-[22.4px] lg:leading-[35.2px]">
                      NFT Marketplace UI Created With Anima For Figma. Collect,
                      Buy And Sell Art From More Than 20k NFT Artists.
                    </div>
                  </div>
                  <div className="md:w-[244px] md:h-[60px] lg:w-[224px] lg:h-[60px] rounded-[20px] flex justify-center items-center px-[50px] py-0 md:my-4 lg:my-6 gap-[12px] bg-[#A259FF]">
                    <button
                      type="button"
                      className="flex flex-row justify-center items-center"
                    >
                      <div className="w-5 h-5">
                        <img src={rocket} alt="" className="w-5 h-5 relative" />
                      </div>
                      <div className="text-white text-[16px] ps-[10px] font-semibold items-center font-work-sans leading-[22.4px]">
                        Get Started
                      </div>
                    </button>
                  </div>
                  <div className="md:w-[330px] pt-3 md:h-[57px] lg:w-[510px] lg:h-[77px] gap-[30px] flex flex-row">
                    <div className="w-[90px] h-[57px] lg:w-[150px] lg:h-[77px] gap-[8px] lg:gap-[10px]">
                      <div className="text-white font-semibold text-[22px] lg:text-[28px] font-space-mono leading-[35.2px] lg:leading-[39.2px]">
                        240k+
                      </div>
                      <div className="text-white font-400 text-[16px] lg:text-[24px] font-work-sans leading-[22.4px] mt-1 lg:leading-[38.38px]">
                        Total Saleg
                      </div>
                    </div>
                    <div className="w-[90px] h-[57px] lg:w-[150px] lg:h-[77px] gap-[8px] lg:gap-[10px]">
                      <div className="text-white font-semibold text-[22px] lg:text-[28px] font-space-mono leading-[35.2px] lg:leading-[39.2px]">
                        100k+
                      </div>
                      <div className="text-white font-400 text-[16px] lg:text-[24px] font-work-sans leading-[22.4px] mt-1 lg:leading-[38.38px]">
                        Auction
                      </div>
                    </div>
                    <div className="w-[90px] h-[57px] lg:w-[150px] lg:h-[77px] gap-[8px] lg:gap-[10px]">
                      <div className="text-white font-semibold text-[22px] lg:text-[28px] font-space-mono leading-[35.2px] lg:leading-[39.2px]">
                        240k+
                      </div>
                      <div className="text-white font-400 text-[16px] lg:text-[24px] font-work-sans leading-[22.4px] mt-1 lg:leading-[38.38px]">
                        Artist
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-[330px] md:h-[330px] lg:w-[510px] lg:h-[510px] rounded-[20px] bg-[#3B3B3B] ">
                  <div className="md:w-[330px] md:h-[221px] lg:w-[510px] lg:h-[401px] rounded-tr-[20px] rounded-tl-[20px]">
                    <Link to={`/collection/${item.collection}`}>
                      <img
                        src={item.image_url}
                        alt={item.collection}
                        className="md:w-[330px] md:h-[221px] lg:w-[510px] lg:h-[401px] rounded-tr-[20px] rounded-tl-[20px] object-cover"
                      />
                    </Link>
                  </div>
                  <div className="md:w-[330px] md:h-[109px] lg:w-[510px] lg:h-[109px] rounded-bl-[20px] rounded-br-[20px] p-[20px] gap-[10px] bg-[#3B3B3B]">
                    <div className="text-white text-[22px] font-semibold font-work-sans leading-[30.8px]">
                      {item.name}
                    </div>
                    <div className="gap-[10px] flex flex-row">
                      <div className="w-6 h-6">
                        <img
                          src={item.image_url}
                          alt=""
                          className="w-6 h-6 rounded-[100px]"
                        />
                      </div>
                      <div className="text-white text-[16px] font-normal font-work-sans leading-[22.4px]">
                        {item.collection.slice(0, 10)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
