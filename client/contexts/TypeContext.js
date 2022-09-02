import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TypeContextData = createContext(null);

export function TypeContext({ children, type, qty }) {
  const [pokeCards, setPokeCards] = useState(null);

  async function fetchPokeCardsByType() {
    const res = await axios.get(
      `http://localhost:3000/api/cards/type/${type}?quantity=${qty}`
    );
    const cardsData = await res.data;
    setPokeCards(cardsData);
  }

  useEffect(() => {
    fetchPokeCardsByType();
  }, [type]);

  return (
    <TypeContextData.Provider
      value={{
        pokeCards,
      }} // value of your context
    >
      {children}
    </TypeContextData.Provider>
  );
}
