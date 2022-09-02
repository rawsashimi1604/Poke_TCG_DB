import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Body from "@/components/modules/typeHome/Body";

function Main() {
  return (
    <>
      <HeaderText text="Browse By Type" />
      <DividerLine />
      <Body />
    </>
  );
}

export default Main;
