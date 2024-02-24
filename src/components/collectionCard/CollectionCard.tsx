import React from "react";
import { Link } from "react-router-dom";
import { CardProps } from "../../types/Types";

const CollectionCard: React.FC<CardProps> = ({ item, contract }) => {
  if (!contract || !contract.address || !contract.chain) {
    return (
      <div className="font-bold flex flex-col items-center text-xl">
        <h1 className="text-neutral-400">
          Oops! This Collection didn't have any Nfts.
        </h1>
        <h1 className="text-violet-500 hover:text-violet-600 hover:underline cursor-pointer">
          <Link to={"/"}>See Other Collections</Link>
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 w-[315px] h-[390px] md:w-[335px] md:h-[445px] lg:w-[330px] rounded-[20px] flex-col justify-center items-center">
      <div className="rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
        <Link
          to={`/nft?id=${item.identifier}&address=${contract.address}&chain=${contract.chain}`}
        >
          <img
            className="w-[315px] md:w-[335px] lg:w-[330px] h-[238px] md:h-[295px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
            src={item.image_url}
            alt={item.collection.slice(0, 15)}
          />
        </Link>
      </div>
      <div className="h-[150px] px-5 bg-zinc-800 pt-5 pb-[25px] rounded-bl-[20px] rounded-br-[20px] flex-col justify-start items-start flex">
        <div className="pb-2">
          <div className="text-white font-semibold work-sans capitalize pb-1">
            {item.name.slice(0, 20)}
          </div>
          <div className="flex gap-2 py-[5px]">
            <img
              className="w-6 h-6 rounded-[120px]"
              src={item.image_url}
              alt=""
            />
            <div className="text-white font-normal font-space-mono">
              {item.collection.slice(0, 10)}
            </div>
          </div>
        </div>
        <div className="inline-flex justify-between items-center font-space-mono mx-auto gap-[130px]">
          <div className="flex-col flex justify-between">
            <div className="text-[12px] text-zinc-500">Price</div>
            <div className="text-[12px] text-white">1.63 ETH</div>
          </div>
          <div className="flex-col">
            <div className="text-[12px] text-zinc-500">Highest Bid</div>
            <div className="text-[12px] text-white">0.33 wETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
