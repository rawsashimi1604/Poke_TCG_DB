import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { HomeContextData } from "@/contexts/HomeContext";
import PokeCard from "@/components/common/PokeCard";
import HeaderText from "@/components/common/HeaderText";

function Body() {
  const { pokeCards } = useContext(HomeContextData);

  return (
    <section className="">
      <HeaderText text="Latest Cards" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
        {pokeCards &&
          pokeCards.map((card, i) => {
            return (
              <>
                <PokeCard data={card} key={i} />
              </>
            );
          })}
      </div>
    </section>
  );
}

export default Body;
