import React from "react";

function Card({ content }) {
  return (
    <div className="shadow-lg p-4 w-full shadow-gray-300 flex  items-center justify-center">
      <h1 className="font-semibold text-2xl text-center">{content}</h1>
    </div>
  );
}

export default Card;
