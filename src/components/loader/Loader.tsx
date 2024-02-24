import React from "react";

export default function Loader() {
  return (
    <div role="status" className="flex justify-center items-center my-56">
      <div className="justify-center items-center m-0 p-0">
        <div className="animate-spin shadow-inne rounded-full h-32 w-32 border-4 border-violet-800 border-solid">
          <div className="animate-spin shadow-inner rounded-full h-24 w-24 border-4 border-violet-600 border-solid">
            <div className="animate-spin shadow-inner rounded-full h-16 w-16 border-4 border-violet-400 border-solid">
              <div className="animate-spin shadow-inner rounded-full  h-8 w-8 border-4 border-violet-300 border-solid" />
            </div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
