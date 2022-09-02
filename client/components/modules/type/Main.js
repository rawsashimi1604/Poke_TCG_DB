import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { motion } from "framer-motion";

import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";

function Main() {
  return (
    <>
      <HeaderText text="Browse By Type" />
      <DividerLine />
    </>
  );
}

export default Main;
