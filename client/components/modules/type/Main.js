import React, { useContext } from "react";

import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Body from "@/components/modules/type/Body";

function Main({ type }) {
  return (
    <div>
      <HeaderText text={`Browse by Type: ${type}`} />
      <DividerLine />
      <Body />
    </div>
  );
}

export default Main;
