import React, { useContext } from "react";

import HeaderText from "@/components/common/HeaderText";

function Main({ type }) {
  return (
    <div>
      <HeaderText text={`Browse by Type: ${type}`} />
    </div>
  );
}

export default Main;
