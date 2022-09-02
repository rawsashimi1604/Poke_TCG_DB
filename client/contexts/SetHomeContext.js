import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SetHomeContextData = createContext(null);

export function SetHomeContext({ children, setId }) {
  const [sets, setSets] = useState(null);

  async function fetchPokeCardSetsData() {
    const res = await axios.get(`http://localhost:3000/api/sets/all`);
    const pokeSetsData = await res.data;
    setSets(pokeSetsData);
  }

  useEffect(() => {
    fetchPokeCardSetsData();
  }, []);

  return (
    <SetHomeContextData.Provider
      value={{
        sets,
      }} // value of your context
    >
      {children}
    </SetHomeContextData.Provider>
  );
}
