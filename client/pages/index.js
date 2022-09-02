import React, { useEffect } from "react";
import axios from "axios";

import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/home/Main";

export default function Home() {
  return (
    <div className="font-inter">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}
