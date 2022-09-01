import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { convertTimestampToDate } from "../../lib/timestamp";

import { motion } from "framer-motion";

import HeaderText from "../components/HeaderText";

function SetMain() {
  const [sets, setSets] = useState(null);

  async function fetchPokeCardSetsData() {
    const res = await axios.get(`http://localhost:3000/api/sets/all`);
    const pokeSetsData = await res.data;
    setSets(pokeSetsData);
  }

  useEffect(() => {
    fetchPokeCardSetsData();
  }, []);

  return (
    <div className="flex-col space-y-4">
      <HeaderText text="Browse By Set" />
      <hr className="border-t-2 border-gray-300" />
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
  );
}

export default SetMain;
