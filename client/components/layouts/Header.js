import React from "react";

import Card from "../components/Card";
import InfoCard from "../components/InfoCard";
import LandingCard from "../components/LandingCard";
import HeaderText from "../components/HeaderText";

function Header() {
  return (
    <section className="xl:h-72 w-full border-b-2 border-gray-300 mb-4">
      <div className="grid grid-cols-6 xl:grid-cols-10 gap-4">
        <div className="col-span-6 xl:col-span-6">
          <div>
            <HeaderText text="Statistics" />
            <LandingCard />
          </div>
        </div>

        <div className="col-span-6 xl:col-span-4 mb-2">
          <HeaderText text="Info" />
          <InfoCard />
        </div>
      </div>
    </section>
  );
}

export default Header;
