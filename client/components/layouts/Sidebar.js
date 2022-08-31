import React from "react";
import Link from "next/link";

import { HomeIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import { AiOutlineSearch, AiFillGithub } from "react-icons/ai";
import { CgShapeHexagon } from "react-icons/cg";
import Logo from "../components/Logo";

function Sidebar() {
  const menuLinkMapping = [
    { icon: <HomeIcon />, label: "Home", href: "/" },
    { icon: <CircleStackIcon />, label: "Browse By Set", href: "/sets" },
    { icon: <CgShapeHexagon />, label: "Browse By Type", href: "#" },
    { icon: <AiOutlineSearch />, label: "Search", href: "#" },
    {
      icon: <AiFillGithub />,
      label: "Github",
      href: "https://github.com/rawsashimi1604/Poke_TCG_DB",
    },
  ];

  return (
    <aside className="grow-0 flex-shrink-0 p-5 text-xs lg:text-sm border-r h-screen sm:w-52 lg:w-72 hidden sm:inline-flex pb-52 bg-gray-800 text-white">
      <div className="space-y-1 w-full">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {menuLinkMapping.map((menuItem, i) => {
              return (
                <li className="rounded-sm cursor-pointer hover:bg-gray-700 hover">
                  <Link href={menuItem.href} key={i}>
                    <div className="flex items-center p-2 space-x-2 rounded-md">
                      <div className="w-4 h-4">{menuItem.icon}</div>
                      <span className="text-lg">{menuItem.label}</span>
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
