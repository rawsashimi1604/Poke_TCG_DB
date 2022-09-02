import React, { useContext } from "react";

import { TypeContextData } from "@/contexts/TypeContext";
import HeaderText from "@/components/common/HeaderText";
import PokeCard from "@/components/common/PokeCard";

function Body() {
  const { pokeCards } = useContext(TypeContextData);

  return (
    <section>
      <HeaderText
        text={`Total Cards: ${
          pokeCards?.length || 0
        }, sending in chunks of 50 first...`}
      />
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
        {pokeCards &&
          pokeCards.map((card, i) => {
            return (
              <div>
                <PokeCard data={card} key={i} />
              </div>
            );
          })}
      </section>
    </section>
  );
}

export default Body;
