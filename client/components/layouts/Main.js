import React from "react";

import Header from "./Header";
import Body from "./Body";

function Main({}) {
  return (
    <div className="flex-col">
      {/* Section with about info */}
      <Header />
      <Body />
    </div>
  );
}

export default Main;
