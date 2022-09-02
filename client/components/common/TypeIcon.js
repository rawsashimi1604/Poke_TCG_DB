import React from "react";

function TypeIcon({ type }) {
  const typeColorMapping = {
    Colorless: "#A0A29F",
    Darkness: "#595761",
    Dragon: "#0C69C8",
    Fairy: "#EE90E6",
    Fighting: "#D3425F",
    Fire: "#FBA54C",
    Grass: "#5FBD58",
    Lightning: "#F2D94E",
    Metal: "#5695A3",
    Psychic: "#FA8581",
    Water: "#539DDF",
  };

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
