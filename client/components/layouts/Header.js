import React from "react";

import Card from "../components/Card";
import InfoCard from "../components/InfoCard";
import LandingCard from "../components/LandingCard";

function Header() {
  return (
    <section className="h-72 w-full border-b-2 border-gray-300 mb-4">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-6">
          <div>
            <h1 className="font-semibold text-xl mb-2">Statistics</h1>
            <LandingCard />
          </div>
        </div>

        <div className="col-span-4 mb-2">
          <h1 className="font-semibold text-xl mb-2">Info</h1>
          <InfoCard />
        </div>
      </div>
    </section>
  );
}

export default Header;
