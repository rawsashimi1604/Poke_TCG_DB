import React, { useContext } from "react";

import { CardContextData } from "@/contexts/CardContext";
import InfoWidget from "@/components/common/InfoWidget";

function LegalityList() {
  const { cardInfo } = useContext(CardContextData);

  return (
    <section className="flex space-x-3 items-center mb-6">
      {cardInfo &&
        Object.keys(cardInfo.set.legality).map((legality, i) => {
          const isLegal = cardInfo.set.legality[legality];
          return (
            <InfoWidget
              key={i}
              left={{
                content: legality,
                textColor: "text-gray-100",
                bgColor: "bg-gray-900",
              }}
              right={{
                content: String(isLegal),
                textColor: isLegal ? "text-white" : "text-black",
                bgColor: isLegal ? "bg-lime-500" : "bg-gray-300",
              }}
            />
          );
        })}
    </section>
  );
}

export default LegalityList;
