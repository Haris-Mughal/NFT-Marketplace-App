import React from "react";
import { Link } from "react-router-dom";
import { BrowseCardProps } from "../../types/Types";

const BrowseCard: React.FC<BrowseCardProps> = ({ item }) => {
  return (
    <Link to={`/collection/${item.collection}`}>
      <div className="flex flex-col w-[147.5px] h-[209px] md:w-[150px] msc:w-[165px] msc:h-[209px] fs:w-[243px] xl:w-80 fs:h-[316px] rounded-[20px] bg-[#3B3B3B]">
        <div className="w-[147.5px] h-[142px] md:w-[150px] msc:w-[165px] msc:h-[142px] fs:w-[243px] fs:h-[240px] xl:w-80 rounded-tl-[20px] rounded-tr-[20px]">
          <img
            className="relative w-[147.5px] h-[142px] md:w-[150px] msc:w-[165px] msc:h-[142px] fs:w-[243px] fs:h-[240px] xl:w-80 rounded-tl-[20px] rounded-tr-[20px] object-cover"
            src={item.image_url}
            alt={item.collection.slice(0, 10)}
          />
        </div>
        <div className="w-[147.5px] h-[67px] md:w-[150px] msc:w-[165px] msc:h-[67px] fs:w-[243px] fs:h-[76px] xl:w-80 bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] pt-[20px] pb-[25px] px-[20px] msc:pt-[20px] msc:pb-[25px] msc:px-[20px] fs:pt-[20px] fs:pb-[25px] fs:px-[30px] gap-[25px]">
          <div className="text-white msc:text-[16px] fs:text-[22px] font-semibold font-work-sans msc:leading-[22.4px] lg:leading-[30.80px] justify-start">
            {item.name.slice(0, 8)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrowseCard;
