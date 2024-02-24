import React from "react";

export default function NoPage() {
  return (
    <div className="py-5 h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-center text-neutral-400 font-bold font-space-mono text-[36px]">
        Page Not Found
      </h1>
      <h2 className="text-center font-bold text-neutral-400 font-work-sans text-[30px]">
        ERROR 404
      </h2>
      <p className="text-center text-neutral-400 text-[24px]">
        Oops! You are on wrong path.
      </p>
    </div>
  );
}
