import React from "react";
import { useRouter } from "next/router";

import { TypeContext } from "@/contexts/TypeContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/type/Main";

function TypePage() {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="font-inter">
      <TypeContext type={type}>
        <Layout>
          <Main type={type} />
        </Layout>
      </TypeContext>
    </div>
  );
}

export default TypePage;
