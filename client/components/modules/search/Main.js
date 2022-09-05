import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { motion } from "framer-motion";

import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";
import Form from "@/components/modules/search/Form";

function Main() {
  return (
    <>
      <HeaderText text="Search" />
      <DividerLine />
      <Form />
    </>
  );
}

export default Main;
