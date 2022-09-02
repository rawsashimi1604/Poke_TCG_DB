import React from "react";
import { useRouter } from "next/router";

import Layout from "@/components/layouts/Layout";
import CardPageMain from "@/components/layouts/CardPageMain";

function CardPage() {
  const router = useRouter();
  const { card } = router.query;

  return (
    <div className="font-inter">
      <Layout>
        <CardPageMain cardId={card} />
      </Layout>
    </div>
  );
}

export default CardPage;
