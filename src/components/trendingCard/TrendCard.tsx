import React from "react";
import { Link } from "react-router-dom";
import { TrendCardProps } from "../../types/Types";

const TrendCard: React.FC<TrendCardProps> = ({ item, display }) => {
  return (
    <div className={`${display}`}>
      <div className="w-[325px] h-[505px] msc:w-[362px] msc:h-[525px] fs:w-[330px] rounded-[20px] flex flex-col justify-start items-start gap-[15px] bg-[#2B2B2B]">
        <div className="w-[325px] h-[425px] msc:w-[362px] msc:h-[445px] fs:w-[330px] flex flex-col gap-[15px]">
          <div className="w-[315px] h-[315px] msc:w-[362px] msc:h-[330px] fs:w-[330px] rounded-[20px]">
            <Link to={`/collection/${item.collection}`}>
              <img
                src={item.image_url}
                alt={item.collection.slice(0, 10)}
                className="w-[315px] h-[315px] msc:w-[362px] msc:h-[330px] fs:w-[330px] rounded-[20px] object-cover"
              />
            </Link>
          </div>
          <div className="w-[315px] h-[95px] msc:w-[362px] msc:h-[100px] fs:w-[330px] items-center justify-center gap-[15px] inline-flex">
            <div className="w-[95px] h-[95px] msc:w-[110px] msc:h-[110px] fs:w-[100px] fs:h-[100px] rounded-[20px]">
              <Link to={`/collection/${item.collection}`}>
                <img
                  className="w-[95px] h-[95px] msc:w-[110px] msc:h-[110px] fs:w-[100px] fs:h-[100px] rounded-[20px]"
                  src={item.image_url}
                  alt=""
                />
              </Link>
            </div>
            <div className="w-[95px] h-[95px] msc:w-[110px] msc:h-[110px] fs:w-[100px] fs:h-[100px] rounded-[20px]">
              <Link to={`/collection/${item.collection}`}>
                <img
                  className="w-[95px] h-[95px] msc:w-[110px] msc:h-[110px] fs:w-[100px] fs:h-[100px] rounded-[20px]"
                  src={item.image_url}
                  alt=""
                />
              </Link>
            </div>
            <div className="w-[95px] h-[95px] msc:w-[110px] msc:h-[110px] fs:w-[100px] fs:h-[100px] px-[14px] py-8 bg-purple-500 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
              <Link to={`/collection/${item.collection}`}>
                <div className="text-center text-white text-[22px] font-bold font-space-mono">
                  1025+
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[315px] h-[65px] msc:w-[362px] fs:w-[330px]  msc:h-[65px] flex flex-col justify-start items-start gap-2.5">
          <div className="text-white text-[22px] font-semibold font-work-sans leading-[30.8px]">
            {item.name.slice(0, 15)}
          </div>
          <div className="h-[24px] rounded-[20px] gap-3 inline-flex flex-row">
            <div className="w-6 h-6 gap-2.5">
              <img
                className="w-6 h-6 rounded-[100px]"
                src={item.image_url}
                alt=""
              />
            </div>
            <div className="text-white text-[16px] font-normal font-work-sans leading-[22.4px]">
              {item.collection.slice(0, 15)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
