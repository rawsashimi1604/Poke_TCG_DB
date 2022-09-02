import React from "react";
import types from "@/lib/constants/types";
import { motion } from "framer-motion";

const typeColorMapping = {
  Colorless: types.COLORLESS,
  Darkness: types.DARKNESS,
  Dragon: types.DRAGON,
  Fairy: types.FAIRY,
  Fighting: types.FIGHTING,
  Fire: types.FIRE,
  Grass: types.GRASS,
  Lightning: types.LIGHTNING,
  Metal: types.METAL,
  Psychic: types.PSYCHIC,
  Water: types.WATER,
};

function TypeIcon({ type = "", size = 8 }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div
        className={`flex items-center justify-center rounded-[100px]`}
        style={{
          backgroundColor: [typeColorMapping[type]],
          boxShadow: `0px 0px 10px ${typeColorMapping[type]}`,
          padding: `${size}px`,
          height: `${size * 4}px`,
          width: `${size * 4}px`,
        }}
      >
        <img
          src={`/assets/types/${type}.svg`}
          style={{
            height: `${size * 4}px`,
            width: `${size * 4}px`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default TypeIcon;
