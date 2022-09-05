import React, { useEffect, useState, useContext } from "react";

import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Body from "./Body";

function Main() {
  return (
    <>
      <HeaderText text="Search" />
      <DividerLine />
      <Body />
    </>
  );
}

export default Main;
