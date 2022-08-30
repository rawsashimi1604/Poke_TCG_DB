import React from "react";

import Card from "../components/Card";

function Header() {
  return (
    <section className="h-48 grid grid-cols-4 gap-4 w-full">
      <Card content="The most comprehensive dataset you can find." />
      <Card content="Get all information you need." />
      <Card content="Built using Pokemon TCG API." />
      <Card content="Built using Pokemon TCG API." />
    </section>
  );
}

export default Header;
