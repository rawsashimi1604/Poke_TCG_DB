import React from "react";
import Link from "next/link";

import { HomeIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import { TbPokeball } from "react-icons/tb";

function Sidebar() {
  const menuLinkMapping = [
    { icon: <HomeIcon />, label: "Home", href: "#" },
    { icon: <CircleStackIcon />, label: "Browse By Set", href: "#" },
  ];

  return (
    <aside className="grow-0 flex-shrink-0 p-5 text-xs lg:text-sm border-r h-screen sm:w-52 lg:w-72 hidden sm:inline-flex pb-52 bg-gray-800 text-white">
      <div className="space-y-1 w-full">
        <div className="flex items-center">
          <h2 className="text-lg font-bold flex items-center gap-1.5">
            <TbPokeball className="text-red-200 w-6 h-6" />
            Poké TCG Database
          </h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {menuLinkMapping.map((menuItem, i) => {
              return (
                <li className="rounded-sm cursor-pointer hover:bg-gray-700 hover">
                  <Link href={menuItem.href} key={i}>
                    <div className="flex items-center p-2 space-x-2 rounded-md">
                      <div className="w-4 h-4">{menuItem.icon}</div>
                      <span>{menuItem.label}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
