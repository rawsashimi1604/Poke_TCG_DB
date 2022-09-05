import React, { useContext } from "react";

import { TypeContextData } from "@/contexts/TypeContext";
import LoadingScreen from "@/components/utils/LoadingScreen";
import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Body from "@/components/modules/type/Body";

function Main({ type }) {
  const { pokeCards } = useContext(TypeContextData);

  return (
    <div>
      {pokeCards ? (
        <>
          <HeaderText text={`Browse by Type: ${type}`} />
          <DividerLine />
          <Body />
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Main;
