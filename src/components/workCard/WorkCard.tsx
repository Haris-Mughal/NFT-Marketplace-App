import React from "react";
import { WorkCardProps } from "../../types/Types";

const WorkCard: React.FC<WorkCardProps> = ({ image, name, description }) => {
  return (
    <div className="w-[315px] md:w-[220px] msc:w-[243px] lg:w-[235px] xl:w-[330px] h-[157px] md:h-[337px] lg:h-[439px] fs:w-[400px] flex-row md:flex-col justify-between md:justify-center items-center inline-flex rounded-[20px] p-[20px] md:px-[20px] md:pt-[10px] lg:p-[10px] xl:px-[10px] md:pb-[30px] bg-[#3B3B3B]">
      <div className="w-[130px] md:w-[160px] lg:w-[235px] h-[120px] xl:w-[330px] md:h-[160px] lg:h-[250px] fs:h-[260px] xl:h-[280px]">
        <img
          className="w-[130px] md:w-[160px] lg:w-[250px] h-[120px] xl:w-[330px] md:h-[160px] fs:h-[260px] lg:h-[250px]"
          src={image}
          alt="Setup Your wallet"
        />
      </div>
      <div className="w-[155px] md:w-full h-[117px] md:h-[100px] lg:h-[129px] flex-col items-center gap-[10px] flex">
        <div className="text-center text-white text-[16px] lg:text-[22px] font-semibold font-work-sans capitalize leading-[30.80px]">
          {name}
        </div>
        <div className="text-center text-[12px] md:text-[12px] lg:text-[16px] text-white font-normal font-work-sans leading-[16.8px] lg:leading-[22.4px]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
