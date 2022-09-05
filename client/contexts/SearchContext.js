import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SearchContextData = createContext(null);

export function SearchContext({ children }) {
  const [types, setTypes] = useState(null);
  const [supertypes, setSupertypes] = useState(null);
  const [rarities, setRarities] = useState(null);

  async function fetchTypesData() {
    const res = await axios.get(`http://localhost:3000/api/types/all`);
    const typesData = await res.data;
    setTypes(typesData);
  }

  async function fetchSupertypesData() {
    const res = await axios.get(`http://localhost:3000/api/types/all`);
    const typesData = await res.data;
    setSupertypes(typesData);
  }

  async function fetchRaritiesData() {
    const res = await axios.get(`http://localhost:3000/api/types/all`);
    const typesData = await res.data;
    setRarities(typesData);
  }

  useEffect(() => {
    fetchTypesData();
    fetchSupertypesData();
    fetchRaritiesData();
  }, []);

  return (
    <SearchContextData.Provider
      value={{}} // value of your context
    >
      {children}
    </SearchContextData.Provider>
  );
}
