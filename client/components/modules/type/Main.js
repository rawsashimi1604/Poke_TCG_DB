import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Body from "@/components/modules/type/Body";

function Main() {
  const [types, setTypes] = useState(null);

  async function fetchTypes() {
    const res = await axios.get(`http://localhost:3000/api/types/all`);
    const typesData = await res.data;
    setTypes(typesData);
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <>
      <HeaderText text="Browse By Type" />
      <DividerLine />
      <Body types={types} />
    </>
  );
}

export default Main;
