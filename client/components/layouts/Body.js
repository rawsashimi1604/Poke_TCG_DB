import React, { useState, useEffect } from "react";
import axios from "axios";

import { motion } from "framer-motion";

import PokeCard from "../components/PokeCard";

const NUMBER_OF_CARDS = 50;

function Body({}) {
  const [pokeCards, setPokeCards] = useState(null);

  async function fetchPokeCardsData() {
    const res = await axios.get(
      `http://localhost:3000/api/cards/quantity/${NUMBER_OF_CARDS}`
    );
    const pokeData = await res.data;
    setPokeCards(pokeData);
  }

  useEffect(() => {
    fetchPokeCardsData();
  }, []);

  useEffect(() => {
    console.log(pokeCards);
  }, [pokeCards]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {pokeCards &&
        pokeCards.map((card, i) => {
          return (
            <>
              <PokeCard data={card} key={i} />
            </>
          );
        })}
    </section>
  );
}

export default Body;
