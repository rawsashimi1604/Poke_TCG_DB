import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import envConfig from "../envConfig";

export const SearchContextData = createContext(null);

export function SearchContext({ children }) {
  const [sets, setSets] = useState(null);
  const [types, setTypes] = useState(null);
  const [supertypes, setSupertypes] = useState(null);
  const [rarities, setRarities] = useState(null);

  async function fetchSetsData() {
    const res = await axios.get(`${envConfig.API_URL}/api/sets/all`);
    const setsData = await res.data;
    setSets(setsData);
  }

  async function fetchTypesData() {
    const res = await axios.get(`${envConfig.API_URL}/api/types/all`);
    const typesData = await res.data;
    setTypes(typesData);
  }

  async function fetchSupertypesData() {
    const res = await axios.get(`${envConfig.API_URL}/api/supertypes/all`);
    const supertypesData = await res.data;
    setSupertypes(supertypesData);
  }

  async function fetchRaritiesData() {
    const res = await axios.get(`${envConfig.API_URL}/api/rarities/all`);
    const raritiesData = await res.data;
    setRarities(raritiesData);
  }

  useEffect(() => {
    fetchSetsData();
    fetchTypesData();
    fetchSupertypesData();
    fetchRaritiesData();
  }, []);

  return (
    <SearchContextData.Provider
      value={{
        sets,
        types,
        supertypes,
        rarities,
      }} // value of your context
    >
      {children}
    </SearchContextData.Provider>
  );
}
