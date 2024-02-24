import React from "react";
import { Link } from "react-router-dom";
import { DiscoverCardProps } from "../../types/Types";

const DiscoverCard: React.FC<DiscoverCardProps> = ({ item, display }) => {
  return (
    <>
      <div
        className={`${display} w-[315px] md:w-[330px] msc:w-[360px] fs:w-[330px] xl:w-[385px] h-[402px] md:h-[469px] bg-neutral-700 rounded-[20px] flex-col justify-center items-center mb-3`}
      >
        <div className="w-[315px] md:w-[330px] msc:w-[360px] fs:w-[330px] xl:w-[385px] h-[238px] md:h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
          <Link to={`/collection/${item.collection}`}>
            <img
              className="w-[315px] md:w-[330px] msc:w-[360px] fs:w-[330px] xl:w-[385px] h-[238px] md:h-[296px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
              src={item.image_url}
              alt={item.collection.slice(0, 15)}
            />
          </Link>
        </div>
        <div className="w-[315px] md:w-[330px] msc:w-[360px] fs:w-[330px] xl:w-[385px] h-[164px] md:h-[173px] px-[30px] bg-neutral-700 pt-5 pb-[25px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-start gap-[25px]">
          <div className="h-[60px] flex flex-col justify-start items-start gap-[5px]">
            <div className="text-white text-[22px] font-semibold work-sans capitalize leading-[30.80px]">
              {item.name.slice(0, 15)}
            </div>
            <div className="justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-start gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <img
                    className="w-6 h-6 rounded-[120px]"
                    src={item.image_url}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-white text-[16px] font-normal font-space-mono leading-snug">
                MoonDancer
              </div>
            </div>
          </div>
          <div className="justify-between items-center inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-zinc-500 text-[12px] font-normal font-space-mono leading-[13.20px]">
                Price
              </div>
              <div className="text-white text-[16px] font-normal font-space-mono leading-snug">
                1.63 ETH
              </div>
            </div>
            <div className="flex-col justify-center items-end gap-2 inline-flex pl-[88px]">
              <div className="text-right text-zinc-500 text-[12px] font-normal font-space-mono leading-[13.20px]">
                Highest Bid
              </div>
              <div className="text-right text-white text-[16px] font-normal font-space-mono leading-snug">
                0.33 wETH
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
