import Sidebar from "@admin/components/Sidebar";
import Footer from "@common/Footer";
import { useUI } from "@context/UIContext/UIContext";
import Drawer from "@ui/Drawer";
import React from "react";
import { PropsWithChildren } from "react";
import Navbar from "../Navbar";

const SidebarUi = () => {
  const { openAdminSidebar, setCloseAdmin } = useUI();
  return openAdminSidebar ? (
    <Drawer onClose={setCloseAdmin}>
      <Sidebar onClose={setCloseAdmin} />
    </Drawer>
  ) : null;
};
const BackLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex h-screen flex-col justify-between bg-BODY_BG">
      <header className="fixed top-0 left-0 z-50 w-full bg-BODY_BG shadow-sm">
        <Navbar />
      </header>
      <main className="bg-BODY_BG">{children}</main>
      <Footer />
      <SidebarUi />
    </div>
  );
};

export default BackLayout;
