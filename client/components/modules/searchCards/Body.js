import React, { useContext } from "react";

import { SearchCardContextData } from "@/contexts/SearchCardContext";
import HeaderText from "@/components/common/HeaderText";
import PokeCard from "@/components/common/PokeCard";

function Body() {
  const { pokeCards, query } = useContext(SearchCardContextData);

  return (
    <section>
      <HeaderText text={`Total Cards Matched: ${pokeCards?.length}`} />
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
