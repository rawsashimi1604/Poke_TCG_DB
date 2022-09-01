import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { convertTimestampToDate } from "../../lib/timestamp";

import { motion } from "framer-motion";

import LoadingScreen from "../utils/LoadingScreen";
import InfoWidget from "../components/InfoWidget";
import PokeCard from "../components/PokeCard";

function SetPageMain({ setId }) {
  const [cards, setCards] = useState(null);
  const [set, setSet] = useState(null);

  async function fetchSetCards() {
    if (setId) {
      const res = await axios.get(
        `http://localhost:3000/api/cards/set/${setId}`
      );
      const pokeCardsData = await res.data;
      setCards(pokeCardsData);
    }
  }

  async function fetchSetInformation() {
    if (setId) {
      const res = await axios.get(`http://localhost:3000/api/sets/id/${setId}`);
      const pokeCardSetData = await res.data;
      setSet(pokeCardSetData);
    }
  }

  useEffect(() => {
    fetchSetCards();
    fetchSetInformation();
  }, [setId]);

  return (
    <div>
      {cards && set ? (
        <>
          <header className="mb-6 flex flex-col">
            <div className="flex justify-between">
              <h1 className="flex gap-3 items-end">
                <img src={set?.images.symbol_img} className="h-12 w-12" />
                <span className="font-bold text-gray-700 text-3xl">
                  {set?.set_name}
                </span>
                <span className="font-quicksand">({set?.set_id})</span>
              </h1>

              <div className="">
                <h2 className="text-gray-500 italic">
                  Released: {convertTimestampToDate(set?.release_date)}
                </h2>
                <h2 className="text-gray-500 italic">
                  Last Updated: {convertTimestampToDate(set?.updated_at)}
                </h2>
              </div>
            </div>

            <hr className="border-t-2 border-gray-300 mt-4 mb-3" />

            {/* Statistics */}
            <div className="flex gap-4 items-center py-1 px-4 rounded-lg bg-blue-900/80 text-white mb-2">
              <h1 className="w-32 tracking-tight font-bold text-lg my-2 pr-3 border-r-2 border-cyan-100">
                STATISTICS
              </h1>

              <InfoWidget
                left={{
                  content: "Series",
                  textColor: "text-gray-100",
                  bgColor: "bg-gray-900",
                }}
                right={{
                  content: set?.series,
                  textColor: "text-black",
                  bgColor: "bg-gray-100",
                }}
              />

              <InfoWidget
                left={{
                  content: "Printed Total",
                  textColor: "text-gray-100",
                  bgColor: "bg-green-900",
                }}
                right={{
                  content: set?.printed_total,
                  textColor: "text-white",
                  bgColor: "bg-lime-600",
                }}
              />

              <InfoWidget
                left={{
                  content: "Total",
                  textColor: "text-gray-100",
                  bgColor: "bg-green-900",
                }}
                right={{
                  content: set?.total,
                  textColor: "text-white",
                  bgColor: "bg-lime-600",
                }}
              />

              <InfoWidget
                left={{
                  content: "PTCGO Code",
                  textColor: "text-gray-100",
                  bgColor: "bg-indigo-900",
                }}
                right={{
                  content: set?.ptcgo_code,
                  textColor: "text-black",
                  bgColor: "bg-indigo-100",
                }}
              />
            </div>

            {/* Legalities */}
            <div className="flex gap-4 items-center py-1 px-4 rounded-lg bg-gray-700/80 text-white">
              <h1 className="w-32 tracking-tight font-bold text-lg my-2 pr-3 border-r-2 border-cyan-100">
                LEGALITIES
              </h1>

              {Object.keys(set?.legality).map((legality, i) => {
                const isLegal = set?.legality[legality];

                return (
                  <InfoWidget
                    left={{
                      content: legality,
                      textColor: "text-gray-100",
                      bgColor: "bg-gray-900",
                    }}
                    right={{
                      content: String(isLegal),
                      textColor: isLegal ? "text-white" : "text-black",
                      bgColor: isLegal ? "bg-lime-600" : "bg-white",
                    }}
                  />
                );
              })}
            </div>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
            {cards &&
              cards.map((card, i) => {
                return (
                  <div>
                    <PokeCard data={card} key={i} />
                  </div>
                );
              })}
          </section>
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default SetPageMain;
