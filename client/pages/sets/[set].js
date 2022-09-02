import React from "react";
import { useRouter } from "next/router";

import { SetContext } from "@/contexts/SetContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/set/Main";

function SetPage() {
  const router = useRouter();
  const { set } = router.query;

  return (
    <div className="font-inter">
      <SetContext setId={set}>
        <Layout>
          <Main />
        </Layout>
      </SetContext>
    </div>
  );
}

export default SetPage;
