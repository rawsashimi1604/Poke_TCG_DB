import React from "react";

import Layout from "../components/layouts/Layout";
import Sidebar from "../components/layouts/Sidebar";
import SetMain from "../components/layouts/SetMain";

function Sets() {
  return (
    <div className="font-inter">
      <Layout>
        <Sidebar />
        <SetMain />
      </Layout>
    </div>
  );
}

export default Sets;
