import React, { useMemo } from "react";
import BrowseCard from "../../../components/browseCard/BrowseCard";
import { useAppSelector } from "../../../store/store";
import Loader from "../../../components/loader/Loader";

export default function BrowseData() {
  const { data: collections, isLoading } = useAppSelector(
    (state) => state.collections
  );

  const randomNumber = useMemo(
    () => Math.random() * (collections?.length - 8),
    [collections?.length]
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-[1084px] md:h-[629px] msc:h-[629px] fs:h-[928px] flex flex-col items-center px-0 py-[40px] msc:px-[40px] fs:px-[100px] fs:py-[80px] gap-[40px] fs:gap-[60px] bg-[#2B2B2B]">
      <div className="w-full h-[46px] msc:h-[39px] fs:h-[46px] flex px-7 md:px-[60px] msc:px-0 lg:px-0 fs:px-0 justify-start">
        <div className="text-white  text-[28px] fs:text-[38px] font-work-sans font-semibold">
          Browse Categories
        </div>
      </div>
      <div className="w-full h-[918px] md:h-[470px] msc:h-[470px] lg:h-[662px] flex flex-wrap items-center justify-center gap-[20px] msc:gap-[30px]">
        {collections.slice(randomNumber, randomNumber + 8).map((data, i) => (
          <BrowseCard key={i} item={data} />
        ))}
      </div>
    </div>
  );
}
