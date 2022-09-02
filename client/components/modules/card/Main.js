import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import Header from "@/components/modules/card/Header";
import CardInformation from "@/components/modules/card/CardInformation";
import TCGPlayerInformation from "./TCGPlayerInformation";
import DividerLine from "@/components/common/DividerLine";

function CardPageMain({ cardId = "" }) {
  const [cardInfo, setCardInfo] = useState(null);

  async function fetchCardInformation() {
    const res = await axios.get(`http://localhost:3000/api/cards/${cardId}`);
    const pokeCardInfo = await res.data;
    setCardInfo(pokeCardInfo);
  }

  useEffect(() => {
    fetchCardInformation();
  }, []);

  return (
    <>
      <Header cardInfo={cardInfo} />

      <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5">
        {/* Card Information + TCG Player Information */}
        <div className="flex flex-col border-t-2 border-gray-300 flex-grow-1 w-full pt-4">
          <h1 className="mb-2">CARD INFORMATION</h1>
          <CardInformation cardInfo={cardInfo} />

          <DividerLine />

          <h1 className="mb-2">PRICING BY TCG PLAYER</h1>
          <TCGPlayerInformation cardInfo={cardInfo} />
        </div>

        {/* Card Image */}
        <img
          src={cardInfo?.images.large_img}
          className={`w-64 xl:w-96 self-start`}
        />
      </div>
    </>
  );
}

export default CardPageMain;
