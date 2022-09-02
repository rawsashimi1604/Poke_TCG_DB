import React, { useEffect, useState, createContext } from "react";
import Link from "next/link";
import axios from "axios";

import { CardContext } from "@/contexts/CardContext";
import Header from "@/components/modules/card/Header";
import Body from "@/components/modules/card/Body";

function CardPageMain() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default CardPageMain;
