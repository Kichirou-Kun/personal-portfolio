import Sidebar from "@admin/components/Sidebar";
import Footer from "@common/Footer";
import BaseSeo from "@components/BaseSeo";
import { useAuth } from "@context/AuthContext/AuthContext";
import { useUI } from "@context/UIContext/UIContext";
import Button from "@ui/Button";
import Drawer from "@ui/Drawer";
import { useRouter } from "next/router";
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
  const { user, signout } = useAuth();
  const router = useRouter();
  const logoutHandler = () => {
    signout();
    router.push("/");
  };
  if (user && user.email === "aungnyeinhtet21@gmail.com") {
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
  }
  return (
    <>
      <BaseSeo title="Unthorized" description="Unthorized Page : SEO Title" />
      <section className="flex h-screen flex-col items-center justify-center bg-BODY_BG">
        <div className="mt-[120px] bg-SECONDARY_BG p-8 text-center">
          <div className="mb-4 text-xl font-semibold uppercase text-SECONDARY_COLOR">
            You are not authorized to access this page
          </div>

          <div className="mt-6 flex flex-row items-center justify-center space-x-6">
            {user && (
              <Button
                onClick={logoutHandler}
                className="border bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text text-transparent transition-opacity duration-150 ease-linear hover:opacity-80"
              >
                Logout
              </Button>
            )}

            <Button
              onClick={() => router.push("/")}
              className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
            >
              Back To Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackLayout;
