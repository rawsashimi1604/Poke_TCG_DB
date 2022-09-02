import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CardContextData = createContext(null);

export function CardContext({ children, cardId }) {
  const [cardInfo, setCardInfo] = useState(null);

  async function fetchCardInformation() {
    const res = await axios.get(`http://localhost:3000/api/cards/${cardId}`);
    const pokeCardInfo = await res.data;
    setCardInfo(pokeCardInfo);
  }

  useEffect(() => {
    fetchCardInformation();
  }, []);

  return (
    <CardContextData.Provider
      value={cardInfo} // value of your context
    >
      {children}
    </CardContextData.Provider>
  );
}
