import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TypeHomeContextData = createContext(null);

export function TypeHomeContext({ children, setId }) {
  const [types, setTypes] = useState(null);

  async function fetchTypes() {
    const res = await axios.get(`http://localhost:3000/api/types/all`);
    const typesData = await res.data;
    setTypes(typesData);
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <TypeHomeContextData.Provider
      value={{
        types,
      }} // value of your context
    >
      {children}
    </TypeHomeContextData.Provider>
  );
}
