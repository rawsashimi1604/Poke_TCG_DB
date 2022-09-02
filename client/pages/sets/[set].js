import React from "react";
import { useRouter } from "next/router";

import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/set/Main";

function SetPage() {
  const router = useRouter();
  const { set } = router.query;

  return (
    <div className="font-inter">
      <Layout>
        <Main setId={set} />
      </Layout>
    </div>
  );
}

export default SetPage;
