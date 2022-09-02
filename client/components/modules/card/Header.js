import React, { useContext } from "react";
import Link from "next/link";
import { CardContextData } from "@/contexts/CardContext";

function Header() {
  const cardInfo = useContext(CardContextData);

  return (
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
            <img src={cardInfo?.set?.images.symbol_img} className="h-12 w-12" />
            <span className="font-bold text-gray-700 text-3xl">
              {cardInfo?.set?.set_name}
            </span>
            <span className="font-quicksand">({cardInfo?.set?.set_id})</span>
          </h1>
        </div>
      </Link>
    </header>
  );
}

export default Header;
