import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="flex">
        <section className="flex flex-col"></section>
        <img src={cardInfo?.large_img} className="w-96" />
      </div>
    </>
  );
}

export default CardPageMain;
