import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import envConfig from "../envConfig";

export const SetHomeContextData = createContext(null);

export function SetHomeContext({ children, setId }) {
  const [sets, setSets] = useState(null);

  async function fetchPokeCardSetsData() {
    const res = await axios.get(`${envConfig.API_URL}/api/sets/all`);
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
