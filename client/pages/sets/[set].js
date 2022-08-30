import React from "react";
import { useRouter } from "next/router";

import Sidebar from "../../components/layouts/Sidebar";
import Layout from "../../components/layouts/Layout";
import SetPageMain from "../../components/layouts/SetPageMain";

function SetPage() {
  const router = useRouter();
  const { set } = router.query;

  return (
    <div className="font-inter">
      <Layout>
        <SetPageMain />
      </Layout>
    </div>
  );
}

export default SetPage;
