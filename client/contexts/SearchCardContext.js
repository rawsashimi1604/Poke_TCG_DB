import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { serverBuildSearchURL } from "@/lib/buildSearch";

export const SearchCardContextData = createContext(null);

export function SearchCardContext({ children, query }) {
  const [pokeCards, setPokeCards] = useState(null);

  async function fetchPokeCardsBySearch() {
    const res = await axios.get(serverBuildSearchURL(query));
    const pokeCardsData = await res.data;
    setPokeCards(pokeCardsData);
  }

  useEffect(() => {
    fetchPokeCardsBySearch();
  }, [query]);

  return (
    <SearchCardContextData.Provider
      value={{
        pokeCards,
        query,
      }} // value of your context
    >
      {children}
    </SearchCardContextData.Provider>
  );
}
