import React from "react";
import { useRouter } from "next/router";

import { CardContext } from "@/contexts/CardContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/card/Main";

function CardPage() {
  const router = useRouter();
  const { card } = router.query;

  return (
    <div className="font-inter">
      <CardContext cardId={card}>
        <Layout>
          <Main cardId={card} />
        </Layout>
      </CardContext>
    </div>
  );
}

export default CardPage;
