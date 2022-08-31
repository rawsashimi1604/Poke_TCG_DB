import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function PokeCard({ data }) {
  return (
    <>
      <motion.div whileHover={{ scale: 1.03 }}>
        <Link href={`/cards/${data.card_id}`}>
          <div className="cursor-pointer">
            <img src={data.large_img} />
          </div>
        </Link>
      </motion.div>
    </>
  );
}

export default PokeCard;
