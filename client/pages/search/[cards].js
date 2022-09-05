import React from "react";
import { useRouter } from "next/router";

import { SearchCardContext } from "@/contexts/SearchCardContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/searchCards/Main";

function CardSearchPage() {
  const router = useRouter();

  return (
    <div className="font-inter">
      <SearchCardContext query={router.query}>
        <Layout>
          <Main />
        </Layout>
      </SearchCardContext>
    </div>
  );
}

export default CardSearchPage;
