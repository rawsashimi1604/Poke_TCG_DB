import React, { useContext } from "react";

import { CardContextData } from "@/contexts/CardContext";
import HeaderText from "@/components/common/HeaderText";
import TypeIcon from "@/components/common/TypeIcon";
import LegalityList from "@/components/modules/card/LegalityList";

function CardInformation() {
  const { cardInfo } = useContext(CardContextData);

  return (
    <section className="flex-col space-y-6 mb-4">
      <LegalityList />

      {cardInfo?.supertype === "Pokémon" && (
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <HeaderText text="TYPE" />
            <div className="flex space-x-4">
              {cardInfo?.types.map((type, i) => {
                console.log(`Type : ${type}`);
                return (
                  <div className="flex items-center space-x-2" key={i}>
                    <TypeIcon type={type} />
                    <span className="text-lg">{type}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <HeaderText text="POKEDEX NUMBER" />
            <div className="flex space-x-4">
              {cardInfo?.pokedexNumbers.map((num, i) => {
                return (
                  <span key={i} className="text-lg mt-1">
                    {num}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <HeaderText text="HP" />
            <span className="text-lg mt-1">{cardInfo?.hp}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3">
        <div className="flex flex-col">
          <HeaderText text="ARTIST" />
          <span>{cardInfo?.artist}</span>
        </div>
        <div className="flex flex-col">
          <HeaderText text="RARITY" />
          <span>{cardInfo?.rarity}</span>
        </div>
        <div className="flex flex-col">
          <HeaderText text="NUMBER" />
          <span>
            {cardInfo?.number} / {cardInfo?.set?.total}
          </span>
        </div>
      </div>

      {cardInfo?.flavor_text && (
        <div className="flex w-full space-x-[150px]">
          <div className="flex flex-col">
            <HeaderText text="FLAVOR TEXT" />
            <span>{cardInfo?.flavor_text}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default CardInformation;
