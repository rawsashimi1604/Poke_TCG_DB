import React from "react";

import Sidebar from "@/components/layouts/Sidebar";
import SearchBar from "@/components/common/SearchBar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="p-6 flex-grow overflow-y-scroll">
        <Header />
        {children}
      </main>
    </div>
  );
}

export default Layout;
