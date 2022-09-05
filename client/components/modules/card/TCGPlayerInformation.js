import React, { useContext } from "react";
import { convertTimestampToDate } from "@/lib/timestamp";

import { CardContextData } from "@/contexts/CardContext";
import HeaderText from "@/components/common/HeaderText";

function TCGPlayerInformation() {
  const { cardInfo } = useContext(CardContextData);

  return (
    <section>
      {cardInfo?.prices.map((price, i) => {
        return (
          <div className="mb-4" key={i}>
            <div className="flex items-center space-x-3">
              <HeaderText text={price.card_type.toUpperCase()} />
              <h2 className="text-gray-700 italic font-quicksand mb-1.5">
                Last updated at {convertTimestampToDate(price.updated_at)}
              </h2>
              <a
                href={price.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-2 py-1 bg-green-700 mb-1.5 rounded-lg transition-all duration-100 hover:bg-green-600 text-green-100 font-bold hover:underline"
              >
                Buy now
              </a>
            </div>

            <div className="grid grid-cols-4 mt-1">
              <div className="flex flex-col">
                <HeaderText text="LOW" />
                <span className="font-bold text-purple-800 text-xl">
                  {price.low_price
                    ? "$" + parseFloat(price.low_price).toFixed(2)
                    : "Unavailable"}
                </span>
              </div>
              <div className="flex flex-col">
                <HeaderText text="MID" />
                <span className="font-bold text-lime-800 text-xl">
                  {price.mid_price
                    ? "$" + parseFloat(price.mid_price).toFixed(2)
                    : "Unavailable"}
                </span>
              </div>
              <div className="flex flex-col">
                <HeaderText text="HIGH" />
                <span className="font-bold text-blue-800 text-xl">
                  {price.high_price
                    ? "$" + parseFloat(price.high_price).toFixed(2)
                    : "Unavailable"}
                </span>
              </div>
              <div className="flex flex-col">
                <HeaderText text="MARKET" />
                <span className="font-bold text-orange-800 text-xl">
                  {price.market_price
                    ? "$" + parseFloat(price.market_price).toFixed(2)
                    : "Unavailable"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TCGPlayerInformation;
