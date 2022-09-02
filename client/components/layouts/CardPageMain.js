import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { convertTimestampToDate } from "@/lib/timestamp";

import HeaderText from "@/components/common/HeaderText";
import TypeIcon from "@/components/common/TypeIcon";

function CardPageMain({ cardId }) {
  const [cardInfo, setCardInfo] = useState(null);

  async function fetchCardInformation() {
    const res = await axios.get(`http://localhost:3000/api/cards/${cardId}`);
    const pokeCardInfo = await res.data;
    setCardInfo(pokeCardInfo);
  }

  useEffect(() => {
    fetchCardInformation();
  }, []);

  return (
    <>
      <div className="">
        <header className="flex justify-between items-center">
          <section className="flex flex-col h-full mb-2">
            <h1 className="flex gap-3 items-end">
              <span className="font-bold text-gray-700 text-3xl">
                {cardInfo?.card_name}
              </span>
            </h1>

            <h2 className="text-xl flex space-x-2">
              <span>{cardInfo?.supertype}</span>
              {cardInfo?.subtypes.map((subtype, i) => {
                return <span>{subtype}</span>;
              })}
            </h2>
          </section>

          <Link href={`http://localhost:5000/sets/${cardInfo?.set?.set_id}`}>
            <div className="flex justify-between pb-5 cursor-pointer">
              <h1 className="flex gap-3 items-end">
                <img
                  src={cardInfo?.set?.images.symbol_img}
                  className="h-12 w-12"
                />
                <span className="font-bold text-gray-700 text-3xl">
                  {cardInfo?.set?.set_name}
                </span>
                <span className="font-quicksand">
                  ({cardInfo?.set?.set_id})
                </span>
              </h1>
            </div>
          </Link>
        </header>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5">
          {/* Information... */}
          <div className="flex flex-col border-t-2 border-gray-300 flex-grow-1 w-full pt-4">
            <div className="mb-2">CARD INFORMATION</div>
            <section className="flex-col space-y-6 mb-4">
              {cardInfo?.supertype === "Pokémon" && (
                <div className="grid grid-cols-3">
                  <div className="flex flex-col">
                    <HeaderText text="TYPE" />
                    <div className="flex space-x-4">
                      {cardInfo?.types.map((type, i) => {
                        return (
                          <div className="flex items-center space-x-2">
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
                        return <span className="text-lg mt-1">{num}</span>;
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

              <div className="grid grid-cols-3">
                <div className="flex flex-col">
                  <HeaderText text="UNLIMITED LEGALITY" />
                  <span>
                    {String(cardInfo?.set?.legality?.unlimited).toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-col">
                  <HeaderText text="STANDARD LEGALITY" />
                  <span>
                    {String(cardInfo?.set?.legality?.standard).toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-col">
                  <HeaderText text="EXPANDED LEGALITY" />
                  <span>
                    {String(cardInfo?.set?.legality?.expanded).toUpperCase()}
                  </span>
                </div>
              </div>
            </section>

            <hr className="border-t-2 border-gray-300 mb-4" />

            <div className="mb-2">PRICING BY TCG PLAYER</div>
            <section>
              {cardInfo?.prices.map((price, i) => {
                return (
                  <div className="mb-4">
                    <div className="flex items-center space-x-3">
                      <HeaderText text={price.card_type.toUpperCase()} />
                      <h2 className="text-gray-700 italic font-quicksand mb-1.5">
                        Last updated at{" "}
                        {convertTimestampToDate(price.updated_at)}
                      </h2>
                      <a
                        href={price.url}
                        target="_blank"
                        className="cursor-pointer px-2 py-1 bg-green-700 mb-1.5 rounded-lg transition-all duration-100 hover:bg-green-600 text-green-100 font-bold hover:underline"
                      >
                        Buy now
                      </a>
                    </div>

                    <div className="grid grid-cols-4 mt-1">
                      <div className="flex flex-col">
                        <HeaderText text="LOW" />
                        <span className="font-bold text-purple-800 text-xl">
                          ${parseFloat(price.low_price).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <HeaderText text="MID" />
                        <span className="font-bold text-lime-800 text-xl">
                          ${parseFloat(price.mid_price).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <HeaderText text="HIGH" />
                        <span className="font-bold text-blue-800 text-xl">
                          ${parseFloat(price.high_price).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <HeaderText text="MARKET" />
                        <span className="font-bold text-orange-800 text-xl">
                          ${parseFloat(price.market_price).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>

          {/* Pokemon Card IMG */}
          <img
            src={cardInfo?.images.large_img}
            className={`w-64 xl:w-96 self-start`}
          />
        </div>
      </div>
    </>
  );
}

export default CardPageMain;
