import React from "react";

import { TypeHomeContext } from "@/contexts/TypeHomeContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/typeHome/Main";

function Types() {
  return (
    <div className="font-inter">
      <TypeHomeContext>
        <Layout>
          <Main />
        </Layout>
      </TypeHomeContext>
    </div>
  );
}

export default Types;
