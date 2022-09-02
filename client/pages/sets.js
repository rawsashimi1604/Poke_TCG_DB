import React from "react";

import { SetHomeContext } from "@/contexts/SetHomeContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/setHome/Main";

function Sets() {
  return (
    <div className="font-inter">
      <SetHomeContext>
        <Layout>
          <Main />
        </Layout>
      </SetHomeContext>
    </div>
  );
}

export default Sets;
