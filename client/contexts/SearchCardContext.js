import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SearchCardContextData = createContext(null);

export function SearchCardContext({ children, query }) {
  const [pokeCards, setPokeCards] = useState(null);

  async function fetchPokeCardsBySearch() {
    const res = await axios.get(
      `http://localhost:3000/api/cards/search?card_name=${query.card_name}&set_id=${query.set_id}&type_id=${query.type_id}&supertype_id=${query.supertype_id}&rarity_id=${query.rarity_id}`
    );
    const pokeCardsData = await res.data;
    setPokeCards(pokeCardsData);
  }

  useEffect(() => {
    fetchPokeCardsBySearch();
  }, []);

  return (
    <SearchCardContextData.Provider
      value={{
        pokeCards,
      }} // value of your context
    >
      {children}
    </SearchCardContextData.Provider>
  );
}
