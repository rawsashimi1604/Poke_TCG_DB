import React, { useContext } from "react";
import breakpoints from "@/lib/constants/breakpoints";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import useWindowDimensions from "hooks/useWindowDimensions";
import { TypeHomeContextData } from "@/contexts/TypeHomeContext";
import TypeIcon from "@/components/common/TypeIcon";

function getTypeIconSize(width) {
  if (width <= breakpoints.SMALL) return 30;
  else if (width <= breakpoints.MEDIUM) return 25;
  else if (width <= breakpoints.LARGE) return 27.5;
  else if (width <= breakpoints.EXTRA_LARGE) return 38;
  else if (width <= breakpoints.DOUBLE_EXTRA_LARGE) return 44;
  else return 48;
}

function TypeList() {
  const { width, height } = useWindowDimensions();
  const { types } = useContext(TypeHomeContextData);

  return (
    <div className="flex flex-row flex-wrap gap-10 items-center justify-center md:w-[80%]">
      {types &&
        types.map((type, i) => {
          return (
            <a href={`/types/${type.type.toLowerCase()}`}>
              <Tippy content={<span className="text-2xl">{type.type}</span>}>
                <div className="cursor-pointer ">
                  <TypeIcon type={type.type} size={getTypeIconSize(width)} />
                </div>
              </Tippy>
            </a>
          );
        })}
    </div>
  );
}

export default TypeList;
