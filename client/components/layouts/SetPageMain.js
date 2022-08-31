import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { convertTimestampToDate } from "../../lib/timestamp";

import { motion } from "framer-motion";

import LoadingScreen from "../utils/LoadingScreen";
import PokeCard from "../components/PokeCard";

function SetPageMain({ setId }) {
  const [cards, setCards] = useState(null);
  const [set, setSet] = useState(null);

  async function fetchSetCards() {
    const res = await axios.get(`http://localhost:3000/api/cards/set/${setId}`);
    const pokeCardsData = await res.data;
    setCards(pokeCardsData);
  }

  async function fetchSetInformation() {
    const res = await axios.get(`http://localhost:3000/api/sets/id/${setId}`);
    const pokeCardSetData = await res.data;
    setSet(pokeCardSetData?.[0]);
  }

  useEffect(() => {
    fetchSetCards();
    fetchSetInformation();
  }, []);

  return (
    <div>
      {cards && set ? (
        <>
          <header className="mb-6 flex flex-col">
            <div className="flex justify-between">
              <h1 className="flex gap-3 items-end">
                <img src={set?.symbol_img} className="h-12 w-12" />
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

            <div className="mt-2">
              <h2 className="flex items-center gap-3">
                <span className="px-2 py-1 bg-orange-600 rounded-md font-bold text-center text-white">
                  TOTAL
                </span>
                <span className="text-lg">{set?.printed_total}</span>
              </h2>
            </div>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {cards &&
              cards.map((card, i) => {
                return (
                  <>
                    <PokeCard data={card} key={i} />
                  </>
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
