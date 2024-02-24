import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import search from "../../assets/MagnifyingGlass.svg";
import { Link, useParams } from "react-router-dom";
import CollectionCard from "../../components/collectionCard/CollectionCard";
import Loader from "../../components/loader/Loader";
import { getNftByCollectionImages } from "../../store/slice/getNftByCollectionSlice";
import { getCollectionImages } from "../../store/slice/getCollectionSlice";
import { Contract } from "../../types/Types";

export default function NftCollection() {
  const { collection_slug } = useParams<{ collection_slug: string }>();

  const dispatch = useAppDispatch();

  const { data: getCollection, isLoading: isLoadingCollections } =
    useAppSelector((state) => state.getCollection);

  const { data: getNftByCollection, isLoading: isLoadingGetNftByCollection } =
    useAppSelector((state) => state.getNftByCollection);

  useEffect(() => {
    dispatch(getCollectionImages(collection_slug!));
    dispatch(getNftByCollectionImages(collection_slug!));
  }, [collection_slug, dispatch]);

  if (isLoadingCollections && isLoadingGetNftByCollection) {
    return <Loader />;
  }

  return (
    <>
      <div className="py-7 md:px-16 lg:px-[110px]">
        <div className="w-full bg-[#2B2B2B] flex-col justify-start items-start inline-flex leading-9">
          <div className="py-4 text-white text-4xl sm:text-5xl font-semibold work-sans capitalize">
            {collection_slug}
          </div>
          <div className="py-3 text-white text-lg sm:text-xl font-normal work-sans">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </div>
          <div className="w-full py-5">
            <div className="border-1 rounded-2xl border border-neutral-700 py-3 px-5 flex flex-row justify-between items-center">
              <input
                title=""
                placeholder="Search your favorite NFTs"
                className="w-full text-zinc-500 bg-[#2B2B2B] outline-none"
              />
              <img src={search} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-neutral-400 h-[1px] bg-zinc-700 w-full" />
      <div className="text-white flex mx-auto flex-row justify-center font-bold text-[30px] items-center work-sans py-8">
        <h1 className="">
          NFTs{" "}
          <span className="w-[50px] h-[32px] bg-neutral-400 rounded-[20px] font-space-mono mx-2 px-5 py-2">
            {getNftByCollection.length}
          </span>
        </h1>
      </div>
      <div className="border-neutral-400 h-[3px] bg-neutral-400 mx-auto w-[315px] md:w-[706px] lg:w-[1054px]" />
      <div className=" bg-neutral-700 flex flex-col justify-center items-center px-7 md:px-16 lg:px-[110px] py-[60px]">
        <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center flex-wrap gap-8">
          {getNftByCollection.length > 0 ? (
            getNftByCollection.map((data, i) => (
              <CollectionCard
                key={i}
                item={data}
                contract={getCollection?.contracts[0] as Contract}
              />
            ))
          ) : (
            <div className="font-bold flex flex-col items-center text-xl">
              <h1 className="text-neutral-400">
                Oops! This Collection didn't have any Nfts.
              </h1>
              <h1 className="text-violet-500 hover:text-violet-600 hover:underline cursor-pointer">
                <Link to={"/"}>See Other Collections</Link>
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="h-[1px] bg-zinc-800 w-full" />
    </>
  );
}
