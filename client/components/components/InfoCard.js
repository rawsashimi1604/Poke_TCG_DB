import React from "react";

import Link from "next/link";

function InfoCard() {
  return (
    <div className="flex relative items-center h-60 bg-gradient-to-r from-cyan-700 to-gray-900 rounded-lg px-6 py-4 shadow-xl shadow-cyan-20">
      <div className="flex justify-between text-white font-quicksand text-2xl">
        <span>
          Get the latest info on Pokemon Trading Cards here! Built using{" "}
          <Link href="https://pokemontcg.io/">
            <span className="text-gray-300 hover:text-blue-200 transition-all duration-100 hover:underline cursor-pointer">
              Pokemon TCG API
            </span>
          </Link>
          .
        </span>
      </div>

      <img src="/assets/pokemon/1.svg" className="w-44 h-44 rotate-7" />
    </div>
  );
}

export default InfoCard;
