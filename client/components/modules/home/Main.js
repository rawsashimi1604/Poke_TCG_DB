import React, { useContext } from "react";

import { HomeContextData } from "@/contexts/HomeContext";
import LoadingScreen from "@/components/utils/LoadingScreen";
import Header from "@/components/modules/home/Header";
import Body from "@/components/modules/home/Body";

function Main() {
  const { pokeCards, pokeCardCount, pokeSetCount } =
    useContext(HomeContextData);

  return (
    <>
      {pokeCards && pokeCardCount && pokeSetCount ? (
        <main className="flex-col">
          <Header />
          <Body />
        </main>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Main;
