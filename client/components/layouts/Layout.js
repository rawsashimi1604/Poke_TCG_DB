import React from "react";

import Sidebar from "@/components/layouts/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="p-6 flex-grow overflow-y-scroll">{children}</main>
    </div>
  );
}

export default Layout;
