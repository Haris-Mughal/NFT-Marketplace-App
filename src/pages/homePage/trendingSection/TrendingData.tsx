import React, { useMemo } from "react";
import TrendCard from "../../../components/trendingCard/TrendCard";
import Loader from "../../../components/loader/Loader";
import { useAppSelector } from "../../../store/store";

export default function TrendingData() {
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
    <div className="w-full h-[718px] msc:h-[716px] fs:h-[836px] px-[30px] msc:pt-[40px] msc:pb-[80px] msc:px-[40px] fs:px-[110px] flex flex-col justify-center items-center py-[40px] fs:py-[80px] gap-[40px] fs:gap-[60px] bg-[#2B2B2B]">
      <div className="w-full h-[93px] msc:h-[71px] fs:h-[91px] flex flex-col gap-[10px] md:px-[15px] msc:px-0 fs:px-0 lg:px-0">
        <div className="text-white text-[28px] fs:text-[38px] font-semibold font-work-sans leading-[39.2px] fs:leading-[45.6px]">
          Trending Collection
        </div>
        <div className="text-white text-[16px] fs:text-[22px] font-normal font-work-sans leading-[22.4px] fs:leading-[35.2px]">
          Checkout our weekly updated trending collection.
        </div>
      </div>
      <div className="w-full h-[505px] msc:h-[525px] fs:h-[525px] flex items-center justify-center gap-[30px]">
        {collections.slice(randomNumber, randomNumber + 3).map((data, i) => (
          <TrendCard
            key={i}
            item={data}
            display={
              i === 0 ? "" : i === 1 ? "hidden md:block" : "hidden fs:block"
            }
          />
        ))}
      </div>
    </div>
  );
}
