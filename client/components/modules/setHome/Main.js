import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";

import { motion } from "framer-motion";

import { SetHomeContextData } from "@/contexts/SetHomeContext";
import LoadingScreen from "@/components/utils/LoadingScreen";
import HeaderText from "@/components/common/HeaderText";
import DividerLine from "@/components/common/DividerLine";

function Main() {
  const { sets } = useContext(SetHomeContextData);

  return (
    <>
      {sets ? (
        <div className="flex-col">
          <HeaderText text="Browse By Set" />
          <DividerLine />
          <section className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {sets &&
              sets.map((set, i) => {
                return (
                  <Link href={`/sets/${set.set_id}`}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <div className="flex gap-2 justify-center items-center p-5 border-[1px] border-gray-200 shadow-lg h-64 cursor-pointer">
                        <img src={set.images.logo_img} />
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
          </section>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Main;
