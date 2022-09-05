import React, { useEffect, useState, useContext } from "react";

import { SearchCardContextData } from "@/contexts/SearchCardContext";
import LoadingScreen from "@/components/utils/LoadingScreen";
import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Body from "./Body";

function Main() {
  const { pokeCards } = useContext(SearchCardContextData);

  return (
    <>
      {pokeCards ? (
        <>
          <HeaderText text="Search" />
          <DividerLine />
          <Body />
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Main;
