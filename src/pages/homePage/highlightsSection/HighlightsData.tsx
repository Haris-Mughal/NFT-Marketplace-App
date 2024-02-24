import React from "react";
import { useAppSelector } from "../../../store/store";
import eye from "../../../assets/Eye.svg";
import Loader from "../../../components/loader/Loader";

export default function HighlightsData() {
  const { data: collections, isLoading } = useAppSelector(
    (state) => state.collections
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {collections.slice(20, 21).map((item, i) => {
        return (
          <div
            key={i}
            style={{
              backgroundImage: `url(${item.image_url})`,
            }}
            className="bg-cover bg-no-repeat z-0 w-full mt-6"
          >
            <div className="w-full h-[640px] flex-col justify-start items-center inline-flex">
              <div className="w-full pt-[360px] pb-[60px] bg-gradient-to-b z-10 from-purple-200/60 to-purple-700/60 justify-center items-end inline-flex mix-blend-multiplier">
                <div className="h-[220px] w-full p-8 md:p-10 justify-start items-end flex">
                  <div className="z-50 md:ps-[80px] lg:ps-[115px] flex-col justify-start items-start gap-[30px] inline-flex">
                    <div className="px-5 py-2.5 bg-neutral-700 rounded-[20px] justify-start items-center gap-3 inline-flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <div className=" w-6 h-6 justify-center items-center flex">
                          <img
                            className="w-6 h-6 rounded-[120px]"
                            src={item.image_url}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="z-50 text-white text-base font-normal work-sans leading-snug">
                        Shroomie
                      </div>
                    </div>
                    <div className="z-50 text-white text-[38px] lg:text-[51px] font-semibold work-sans capitalize leading-[56.10px]">
                      {item.name}
                    </div>
                    <button
                      type="button"
                      className="w-[315px] md:w-[198px] z-50 h-[60px] px-[50px] py-[22px] bg-white rounded-[20px] justify-center items-center gap-3 inline-flex"
                    >
                      <div className="w-5 h-5 relative">
                        <img src={eye} alt="" />
                      </div>
                      <div className="text-center text-zinc-800 text-base font-semibold work-sans leading-snug">
                        See NFT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//
