import React from "react";

import { TypeContext } from "@/contexts/TypeContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/type/Main";

function Types() {
  return (
    <div className="font-inter">
      <TypeContext>
        <Layout>
          <Main />
        </Layout>
      </TypeContext>
    </div>
  );
}

export default Types;
