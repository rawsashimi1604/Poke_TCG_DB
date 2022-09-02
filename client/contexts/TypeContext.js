import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TypeContextData = createContext(null);

export function TypeContext({ children, setId }) {
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
    <TypeContextData.Provider
      value={{
        types,
      }} // value of your context
    >
      {children}
    </TypeContextData.Provider>
  );
}
