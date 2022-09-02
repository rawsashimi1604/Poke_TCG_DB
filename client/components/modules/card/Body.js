import React, { useContext } from "react";

import { CardContextData } from "@/contexts/CardContext";
import CardInformation from "@/components/modules/card/CardInformation";
import TCGPlayerInformation from "./TCGPlayerInformation";
import DividerLine from "@/components/common/DividerLine";

function Body() {
  const cardInfo = useContext(CardContextData);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5">
      {/* Card Information + TCG Player Information */}
      <div className="flex flex-col border-t-2 border-gray-300 flex-grow-1 w-full pt-4">
        <h1 className="mb-2">CARD INFORMATION</h1>
        <CardInformation />

        <DividerLine />

        <h1 className="mb-2">PRICING BY TCG PLAYER</h1>
        <TCGPlayerInformation />
      </div>

      {/* Card Image */}
      <img
        src={cardInfo?.images.large_img}
        className={`w-64 xl:w-96 self-start`}
      />
    </div>
  );
}

export default Body;
