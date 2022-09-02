import React, { useEffect } from "react";
import axios from "axios";

import { HomeContext } from "@/contexts/HomeContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/home/Main";

// Number of cards to render...
const NUMBER_OF_CARDS = 20;

export default function Home() {
  return (
    <div className="font-inter">
      <HomeContext cardQty={NUMBER_OF_CARDS}>
        <Layout>
          <Main />
        </Layout>
      </HomeContext>
    </div>
  );
}
