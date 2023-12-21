import React from "react";

function Loading() {
  return (
    <div className="w-100 h-100 flex justify-center items-center mt-24 ">
      <div
        className=" text-fuchsia-800 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}

export default Loading;
