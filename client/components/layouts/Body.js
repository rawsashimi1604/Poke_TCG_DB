import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

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
    <section className="grid grid-cols-4 gap-4">
      {pokeCards &&
        pokeCards.map((card, i) => {
          return (
            <>
              <motion.div whileHover={{ scale: 1.03 }}>
                <img src={card.large_img} />
              </motion.div>
            </>
          );
        })}
    </section>
  );
}

export default Body;
