import React from "react";
import globe from "../../assets/Globe.svg";

export default function DetailNft() {
  return (
    <>
      <div className="text-zinc-500 text-[18px] font-normal font-space-mono capitalize leading-9">
        Details
      </div>
      <div className="justify-start items-start gap-2.5 inline-flex">
        <div className="w-8 h-8 relative">
          <img src={globe} alt="" />
        </div>
        <div className="grow shrink basis-0 text-white text-xl font-normal work-sans leading-9">
          View on Etherscan
        </div>
      </div>
      <div className="justify-start items-start gap-2.5 inline-flex">
        <div className="w-8 h-8 relative">
          <img src={globe} alt="" />
        </div>
        <div className="grow shrink basis-0 text-white text-xl font-normal work-sans leading-9">
          View Original
        </div>
      </div>
    </>
  );
}
