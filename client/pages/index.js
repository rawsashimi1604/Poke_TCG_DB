import React, { useEffect } from "react";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="font-inter">
      <Layout>
        <Sidebar />
        <Main />
      </Layout>
    </div>
  );
}
