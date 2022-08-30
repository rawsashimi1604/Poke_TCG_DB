import React from "react";

import { Audio } from "react-loader-spinner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoadingScreen() {
  return (
    <div className="fixed w-screen h-screen bg-gray-900 flex flex-col items-center justify-center gap-4 text-green-400 font-inter opacity-90 overflow-hidden top-0 right-0">
      <Audio
        height="100"
        width="100"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
      <div className="flex gap-3 items-center">
        <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
        <h1>Loading data...</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
