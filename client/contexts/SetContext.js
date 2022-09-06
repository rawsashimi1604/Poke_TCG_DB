import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import envConfig from "../envConfig";

export const SetContextData = createContext(null);

export function SetContext({ children, setId }) {
  const [cards, setCards] = useState(null);
  const [set, setSet] = useState(null);

  async function fetchSetCards() {
    if (setId) {
      const res = await axios.get(
        `${envConfig.API_URL}/api/cards/set/${setId}`
      );
      const pokeCardsData = await res.data;
      setCards(pokeCardsData);
    }
  }

  async function fetchSetInformation() {
    if (setId) {
      const res = await axios.get(`${envConfig.API_URL}/api/sets/id/${setId}`);
      const pokeCardSetData = await res.data;
      setSet(pokeCardSetData);
    }
  }

  useEffect(() => {
    fetchSetCards();
    fetchSetInformation();
  }, []);

  return (
    <SetContextData.Provider
      value={{
        cards,
        set,
      }} // value of your context
    >
      {children}
    </SetContextData.Provider>
  );
}
