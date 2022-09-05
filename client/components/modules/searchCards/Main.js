import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";

import { SearchCardContextData } from "@/contexts/SearchCardContext";
import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";

function Main() {
  const { pokeCards } = useContext(SearchCardContextData);

  console.log(pokeCards);

  return (
    <>
      <HeaderText text="Search Card..." />
      <DividerLine />
    </>
  );
}

export default Main;
