import React from "react";

function LandingCard() {
  return (
    <div className="flex relative h-60 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg px-6 py-4 shadow-xl shadow-cyan-20">
      <img
        src="/assets/svg/25.svg"
        className="relative -top-4 -left-[50px] w-64 h-64 rotate-7"
      />
      <div className="relative -left-[50px]">
        <h1 className="text-3xl font-bold text-white">
          Welcome to Poké TCG DB!
        </h1>

        <div className="flex justify-between mt-5 text-white">
          <div className="flex flex-col font-quicksand">
            <span className="text-lg text-gray-300 font-light">
              Total Cards:{" "}
            </span>
            <span className="text-8xl -ml-1">100</span>
          </div>

          <div className="flex flex-col font-quicksand">
            <span className="text-lg text-gray-300 font-light">
              Total Card Sets:{" "}
            </span>
            <span className="text-8xl -ml-1">100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCard;
