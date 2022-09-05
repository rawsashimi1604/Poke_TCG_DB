import React from "react";

import SearchBar from "../common/SearchBar";

function Header() {
  return (
    <header className="flex-grow justify-between flex w-full items-center">
      <h1 className="font-quicksand text-3xl mb-5">
        Your one stop location for Pokémon TCG Cards!
      </h1>
      <SearchBar />
    </header>
  );
}

export default Header;
