import React from "react";
import { motion } from "framer-motion";

function PokeCard({ data }) {
  return (
    <>
      <motion.div whileHover={{ scale: 1.03 }}>
        <div className="cursor-pointer">
          <img src={data.large_img} />
        </div>
      </motion.div>
    </>
  );
}

export default PokeCard;
