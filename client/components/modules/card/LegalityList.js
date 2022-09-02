import React from "react";

import InfoWidget from "@/components/common/InfoWidget";

function LegalityList({ legalities }) {
  return (
    <section className="flex space-x-3 items-center mb-6">
      {legalities &&
        Object.keys(legalities).map((legality, i) => {
          const isLegal = legalities[legality];

          return (
            <InfoWidget
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
