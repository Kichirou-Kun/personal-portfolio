import Footer from "@common/Footer";
import Navbar from "@common/Navbar";
import Sidebar from "@components/Sidebar";
import { useUI } from "@context/UIContext/UIContext";
import Drawer from "@ui/Drawer";
import React, { PropsWithChildren } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
interface NavbarProps {
  transparent?: boolean;
}
interface Props {
  NavbarProps?: NavbarProps;
}
const SidebarUI = () => {
  const { openSidebar, setCloseSidebar } = useUI();
  const { width } = useWindowSize();

  React.useEffect(() => {
    if (width) {
      if (width > 768) {
        setCloseSidebar();
      }
    }
  }, [width]);

  return openSidebar ? (
    <Drawer onClose={setCloseSidebar} position="left">
      <Sidebar onClose={setCloseSidebar} />
    </Drawer>
  ) : null;
};

const FrontLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  NavbarProps,
}) => {
  return (
    <div className="relative flex h-screen flex-col justify-between bg-BODY_BG">
      <header className="fixed top-0 left-0 z-20 w-full">
        <Navbar {...NavbarProps} />
      </header>

      <main className="bg-BODY_BG">{children}</main>
      <Footer />
      <SidebarUI />
    </div>
  );
};

export default FrontLayout;
