import React from "react";
import types from "@/lib/constants/types";

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

function TypeIcon({ type = "" }) {
  return (
    <div
      className="p-2 h-8 w-8 flex items-center justify-center rounded-[100px]"
      style={{
        backgroundColor: [typeColorMapping[type]],
        boxShadow: `0px 0px 10px ${typeColorMapping[type]}`,
      }}
    >
      <img src={`/assets/types/${type}.svg`} className="h-8 w-8" />
    </div>
  );
}

export default TypeIcon;
