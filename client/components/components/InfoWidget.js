import React from "react";

function InfoWidget({ left, right }) {
  return (
    <div className="flex font-quicksand text-xs">
      <div
        className={`py-1 px-4 ${left.textColor} ${left.bgColor} rounded-l-lg`}
      >
        {left.content}
      </div>
      <div
        className={`py-1 px-4 ${right.textColor} ${right.bgColor} rounded-r-lg`}
      >
        {right.content}
      </div>
    </div>
  );
}

export default InfoWidget;
