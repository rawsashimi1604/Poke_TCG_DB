import React from "react";
import Link from "next/link";

import { HomeIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import { AiOutlineSearch, AiFillGithub } from "react-icons/ai";
import { CgShapeHexagon } from "react-icons/cg";
import Logo from "@/components/common/Logo";

const menuLinkMapping = [
  { icon: <HomeIcon className="w-10 h-10" />, label: "Home", href: "/" },
  {
    icon: <CircleStackIcon className="w-10 h-10" />,
    label: "Browse By Set",
    href: "/sets",
  },
  {
    icon: <CgShapeHexagon className="w-10 h-10" />,
    label: "Browse By Type",
    href: "/types",
  },
  {
    icon: <AiOutlineSearch className="w-10 h-10" />,
    label: "Search",
    href: "/search",
  },
  {
    icon: <AiFillGithub className="w-10 h-10" />,
    label: "Github",
    href: "https://github.com/rawsashimi1604/Poke_TCG_DB",
  },
];

function Sidebar() {
  return (
    <aside className="grow-0 flex-shrink-0 p-5 text-xs lg:text-sm border-r h-screen w-24 sm:w-52 lg:w-72 sm:inline-flex pb-52 bg-gray-800 text-white">
      <div className="space-y-1 w-full">
        <div className="flex items-center">
          <Link href="/">
            <div className="cursor-pointer pl-1 flex items-center gap-x-4 font-quicksand">
              <Logo />
              <span className="hidden sm:flex text-[16px] lg:text-xl xl:text-2xl">
                Poké TCG DB
              </span>
            </div>
          </Link>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {menuLinkMapping.map((menuItem, i) => {
              return (
                <li
                  className="rounded-sm cursor-pointer hover:bg-gray-700 hover"
                  key={i}
                >
                  <Link href={menuItem.href}>
                    <div className="flex items-center p-2 space-x-5 rounded-md">
                      <div className="">{menuItem.icon}</div>
                      <span className="hidden sm:flex lg:text-md xl:text-lg">
                        {menuItem.label}
                      </span>
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
