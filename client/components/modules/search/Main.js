import React, { useEffect, useState, useContext } from "react";

import { SearchContextData } from "@/contexts/SearchContext";
import LoadingScreen from "@/components/utils/LoadingScreen";
import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Form from "@/components/modules/search/Form";

function Main() {
  const { sets, types, supertypes, rarities } = useContext(SearchContextData);

  return (
    <>
      {sets && types && supertypes && rarities ? (
        <>
          <HeaderText text="Search" />
          <DividerLine />
          <Form />
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Main;
