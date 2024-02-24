import React, { useMemo } from "react";
import Loader from "../../../components/loader/Loader";
import { useAppSelector } from "../../../store/store";
import eye from "../../../assets/Eye.svg";
import DiscoverCard from "../../../components/discoverCard/DiscoverCard";

export default function DiscoverData() {
  const { data: collections, isLoading } = useAppSelector(
    (state) => state.collections
  );

  const randomNumber = useMemo(
    () => Math.random() * (collections?.length - 3),
    [collections?.length]
  );

  if (isLoading || !collections) {
    return <Loader />;
  }
  return (
    <div className="w-full h-[1557px] md:h-[700px] lg:h-[780px] flex flex-col justify-center items-center px-[30px] py-[80px] md:pt-[40px] md:pb-[80px] md:px-[40px] lg:px-[0px] fs:px-[110px] xl:px-[10px] lg:py-[80px] 2xl:px-[670px] gap-[40px] lg:gap-[60px] bg-[#2B2B2B]">
      <div className="w-full h-[71px] lg:h-[91px] flex justify-between content-between md:flex-row gap-[100px] fs:px-0">
        <div className="gap-[10px]">
          <div className="text-white text-[28px] lg:text-[38px] leading-[39.2px] lg:leading-[45.6px] font-work-sans font-semibold">
            Discover More NFT's
          </div>
          <div className="text-white text-[16px] lg:text-[22px] leading-[22.4px] lg:leading-[35.2px] font-work-sans font-normal">
            Explore new trending NFT's
          </div>
        </div>
        <div className="w-[187px] h-[60px] hidden md:block rounded-[20px] ">
          <button
            type="button"
            className="w-[187px] h-[60px] rounded-[20px] border-2 border-[#A259FF] flex flex-row justify-center items-center gap-[12px]"
          >
            <img src={eye} alt="" />
            <div className="text-white text-[16px] font-work-sans font-normal">
              See All
            </div>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:flex-row gap-[30px]">
        {collections.slice(randomNumber, randomNumber + 3).map((data, i) => (
          <DiscoverCard
            key={i}
            item={data}
            display={i === 0 ? "" : i === 1 ? "md:hidden fs:block" : ""}
          />
        ))}
      </div>
      <div className="w-[315px] h-[60px] md:hidden rounded-[20px]">
        <button
          type="button"
          className="w-[315px] h-[60px] rounded-[20px] border-2 border-[#A259FF] flex flex-row justify-center items-center gap-[12px]"
        >
          <img src={eye} alt="" />
          <div className="text-white text-[16px] font-work-sans font-normal">
            See All
          </div>
        </button>
      </div>
    </div>
  );
}
