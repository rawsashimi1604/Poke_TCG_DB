import React, { useEffect } from "react";
import axios from "axios";

import Layout from "../components/layouts/Layout";
import Sidebar from "../components/layouts/Sidebar";
import Main from "../components/layouts/Main";

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
