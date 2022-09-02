import React from "react";

import Header from "@/components/modules/home/Header";
import Body from "@/components/modules/home/Body";

function Main({}) {
  return (
    <main className="flex-col">
      {/* Section with about info */}
      <Header />
      <Body />
    </main>
  );
}

export default Main;
