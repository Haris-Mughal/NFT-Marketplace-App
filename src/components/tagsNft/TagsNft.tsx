import React from "react";

export default function TagsNft() {
  return (
    <>
      <div className="text-zinc-500 text-[18px] font-normal font-space-mono leading-loose">
        Tags
      </div>
      <div className="justify-start items-start inline-flex gap-5">
        <div className="w-[120px] lg:w-full text-white flex-wrap text-base work-sans uppercase gap-5">
          <button type="button" className="bg-zinc-700 rounded-full py-3 px-7">
            Animation
          </button>
          <button
            type="button"
            className="bg-zinc-700 rounded-full py-3 px-7 my-4 lg:my-0 lg:mx-4"
          >
            Illustration
          </button>
          <button
            type="button"
            className="bg-zinc-700 rounded-full py-3 px-7 mb-4 lg:mb-0 lg:me-4"
          >
            Moon
          </button>
          <button type="button" className="bg-zinc-700 rounded-full py-3 px-7">
            Moon
          </button>
        </div>
      </div>
    </>
  );
}
