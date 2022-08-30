import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

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

  useEffect(() => {
    console.log(sets);
  }, [sets]);

  return (
    <div className="flex-col space-y-4 p-6 flex-grow overflow-y-scroll">
      <section className="grid grid-cols-4 gap-4">
        {sets.map((set, i) => {
          return (
            <motion.div>
              <div className="flex justify-center items-center p-5 border-gray-900 shadow-lg">
                <img src={set.logo_img} />
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}

export default SetMain;
