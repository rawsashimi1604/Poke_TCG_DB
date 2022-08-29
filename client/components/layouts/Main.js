import React from "react";

import Card from "../components/Card";

function Main({}) {
  return (
    <div className="flex p-6 flex-grow">
      {/* Section with about info */}
      <section className="h-48 grid grid-cols-4 gap-4 w-full">
        <Card content="The most comprehensive dataset you can find." />
        <Card content="Get all information you need." />
        <Card content="Built using Pokemon TCG API." />
        <Card content="Built using Pokemon TCG API." />
      </section>
    </div>
  );
}

export default Main;
