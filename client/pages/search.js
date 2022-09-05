import React from "react";

import { SearchContext } from "@/contexts/SearchContext";
import Layout from "@/components/layouts/Layout";
import Main from "@/components/modules/search/Main";

function Search() {
  return (
    <div className="font-inter">
      <SearchContext>
        <Layout>
          <Main />
        </Layout>
      </SearchContext>
    </div>
  );
}

export default Search;
