import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { convertTimestampToDate } from "../../lib/timestamp";

import { motion } from "framer-motion";

function SetPageMain({ setId }) {
  const [cards, setCards] = useState(null);

  async function fetchSetCards() {
    const res = await axios.get(`http://localhost:3000/api/cards/set/${setId}`);
    const pokeCardsData = await res.data;
    setCards(pokeCardsData);
  }

  useEffect(() => {
    fetchSetCards();
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <div>
      <header></header>

      <section className="grid grid-cols-4 gap-4">
        {cards &&
          cards.map((card, i) => {
            return (
              <>
                <motion.div whileHover={{ scale: 1.03 }}>
                  <div className="cursor-pointer">
                    <img src={card.large_img} />
                  </div>
                </motion.div>
              </>
            );
          })}
      </section>
    </div>
  );
}

export default SetPageMain;
