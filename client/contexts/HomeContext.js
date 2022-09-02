import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const HomeContextData = createContext(null);

export function HomeContext({ children, cardQty }) {
  const [pokeCards, setPokeCards] = useState(null);
  const [pokeCardCount, setPokeCardCount] = useState(0);
  const [pokeSetCount, setPokeSetCount] = useState(0);

  async function fetchPokeCardsData() {
    const res = await axios.get(
      `http://localhost:3000/api/cards/all?quantity=${cardQty}`
    );
    const pokeData = await res.data;
    setPokeCards(pokeData);
  }

  async function fetchPokeCardCount() {
    const res = await axios.get(`http://localhost:3000/api/cards/count`);
    const resData = await res.data;
    setPokeCardCount(resData.count);
  }

  async function fetchPokeSetCount() {
    const res = await axios.get("http://localhost:3000/api/sets/count");
    const resData = await res.data;
    setPokeSetCount(resData.count);
  }

  useEffect(() => {
    fetchPokeCardsData();
    fetchPokeCardCount();
    fetchPokeSetCount();
  }, []);

  return (
    <HomeContextData.Provider
      value={{
        pokeCards,
        pokeCardCount,
        pokeSetCount,
      }} // value of your context
    >
      {children}
    </HomeContextData.Provider>
  );
}
