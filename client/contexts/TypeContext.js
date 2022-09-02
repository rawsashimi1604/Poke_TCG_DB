import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TypeContextData = createContext(null);

export function TypeContext({ children, type }) {
  return (
    <TypeContextData.Provider
      value={{}} // value of your context
    >
      {children}
    </TypeContextData.Provider>
  );
}
