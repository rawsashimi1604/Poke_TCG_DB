import React, { useEffect, useState, useContext } from "react";

import { TypeHomeContextData } from "@/contexts/TypeHomeContext";
import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Body from "@/components/modules/typeHome/Body";
import LoadingScreen from "@/components/utils/LoadingScreen";

function Main() {
  const { types } = useContext(TypeHomeContextData);

  return (
    <>
      {types ? (
        <>
          <HeaderText text="Browse By Type" />
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
