import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useLocation } from "react-router-dom";
import { getNftImages } from "../../store/slice/getNftSlice";
import Loader from "../../components/loader/Loader";
import DetailNft from "../../components/detailNft/DetailNft";
import TagsNft from "../../components/tagsNft/TagsNft";

export default function NftDetail() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[new Date().getMonth()];
  const date = new Date().getDate();
  const year = new Date().getFullYear();

  const dispatch = useAppDispatch();

  const location = useLocation();

  const { data: getNft, isLoading } = useAppSelector((state) => state.getNft);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const identifier = searchParams.get("id") as string;
    const address = searchParams.get("address") as string;
    const chain = searchParams.get("chain") as string;

    dispatch(
      getNftImages({
        chain,
        address,
        identifier,
      })
    );
  }, [dispatch, location.search]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <img
        className="w-full h-[75vh] top-0 left-0 right-0 bottom-5 object-cover border-0"
        src={getNft?.image_url}
        alt={getNft?.collection}
      />
      <div className="w-full px-5 md:px-20 py-10 bg-zinc-800 flex-col justify-between inline-flex">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="py-4">
            <div className="text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-semibold work-sans capitalize mb-3">
              {getNft?.name.slice(0, 20)}
            </div>
            <div className="text-zinc-400 text-xl md:text-lg font-normal work-sans leading-9">
              Minted on{" "}
              <span className="text-zinc-300">
                {month} {date}, {year}
              </span>
            </div>
          </div>
          <div className="hidden sm:block w-60 h-60 pt-4 pb-6 md:py-0 relative object-cover">
            <img
              src={getNft?.image_url}
              alt={getNft?.collection}
              className="w-60 h-60 rounded-[20px]"
            />
          </div>
        </div>
        <div className="py-6 sm:mt-16 md:mt-[-120px] top-0 flex-col justify-start items-start gap-2.5 flex">
          <div className="text-zinc-500 text-[18px] font-normal font-space-mono capitalize leading-9">
            Created By
          </div>
          <div className="rounded-2xl justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <img
                className="w-6 h-6 rounded-[120px]"
                src={getNft?.image_url}
                alt=""
              />
            </div>
            <div className="text-white text-lg font-semibold work-sans capitalize leading-loose">
              {getNft?.collection}
            </div>
          </div>
        </div>
        <div className="flex-wrap md:w-[450px] lg:w-[700px] xl:w-[800px] py-5 flex-col justify-start items-start gap-2.5 flex">
          <div className="text-zinc-500 text-[18px] font-normal font-space-mono capitalize leading-9">
            Description
          </div>
          <div className="md:w-[450px] lg:w-[700px] xl:w-[800px] text-white text-lg font-normal work-sans leading-9">
            {getNft?.description && getNft?.description.length > 0 ? (
              getNft?.description
            ) : (
              <div>
                <h1 className="text-neutral-400 font-bold text-lg">
                  Oops! This Nft didn't have description.
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="py-5 flex-col justify-start items-start gap-2.5 flex">
          <DetailNft />
        </div>
        <div className="py-5 flex-col justify-start items-start gap-5 flex">
          <TagsNft />
        </div>
      </div>
    </>
  );
}
