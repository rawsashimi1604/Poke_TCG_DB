import React from "react";
import { useRouter } from "next/router";

import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/card/Main";

function CardPage() {
  const router = useRouter();
  const { card } = router.query;

  return (
    <div className="font-inter">
      <Layout>
        <Main cardId={card} />
      </Layout>
    </div>
  );
}

export default CardPage;
