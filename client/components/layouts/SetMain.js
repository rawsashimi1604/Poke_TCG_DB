import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertTimestampToDate } from "../../lib/timestamp";

import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

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
      <section className="grid grid-cols-3 xl:grid-cols-4 gap-4">
        {sets &&
          sets.map((set, i) => {
            return (
              <Tippy
                content={
                  <div className="bg-gray-800 text-white p-5 flex flex-col gap-3">
                    {/* Set Name */}
                    <div className="flex gap-2 items-center ">
                      <span className="px-2 py-1 bg-yellow-600 rounded-md font-bold text-center">
                        SET
                      </span>
                      <span className="text-lg">{set.set_name}</span>
                    </div>

                    {/* Printed Total */}
                    <div className="flex gap-2 items-center ">
                      <span className="px-2 py-1 bg-amber-600 rounded-md font-bold text-center">
                        COUNT
                      </span>
                      <span className="text-lg">{set.printed_total}</span>
                    </div>

                    {/* Release Date */}
                    <div className="flex gap-2 items-center ">
                      <span className="px-2 py-1 bg-orange-600 rounded-md font-bold text-center">
                        RELEASED
                      </span>
                      <span className="text-lg ">
                        {convertTimestampToDate(set.release_date)}
                      </span>
                    </div>
                  </div>
                }
                arrow={true}
                placement="right"
                animation="scale-subtle"
                theme="material"
                duration={200}
                delay={[75, 0]}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="flex gap-2 justify-center items-center p-5 border-gray-900 shadow-lg h-64 cursor-pointer">
                    <img src={set.logo_img} />
                  </div>
                </motion.div>
              </Tippy>
            );
          })}
      </section>
    </div>
  );
}

export default SetMain;
