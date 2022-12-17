import Logo from "@components/Logo";
import NavMenuList from "@components/NavMenuList";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@ui/Button";
import IconButton from "@ui/IconButton";
import React from "react";
import NextLink from "next/link";
import { useAuth } from "@context/AuthContext/AuthContext";
interface Props {
  onClose: () => void;
}
const Sidebar = ({ onClose }: Props) => {
  const { user, signout } = useAuth();
  const logoutHandler = () => {
    signout();
    onClose();
  };
  return (
    <aside className="flex h-full flex-col justify-between">
      <div className="flex flex-col">
        <header className="flex flex-row items-center justify-between  p-6">
          <Logo size="small" />
          <IconButton onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-SECONDARY_COLOR" />
          </IconButton>
        </header>
        <div className="p-6">
          <NavMenuList direction="column" />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6">
        {user && user ? (
          <>
            <Button
              onClick={logoutHandler}
              size="large"
              className="bg-gradient-to-r  from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <NextLink href={`/signin`} legacyBehavior>
              <a
                onClick={onClose}
                className="ease rounded border border-SECONDARY_COLOR bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text py-4 px-6 text-center font-bold text-transparent transition-opacity duration-150 hover:opacity-80"
              >
                SignIn
              </a>
            </NextLink>
            <NextLink href={"/signup"} legacyBehavior>
              <a
                onClick={onClose}
                className="rounded bg-gradient-to-r from-[#619BFD] to-[#A17CF9] py-4 px-6 text-center font-bold text-white  transition-opacity duration-150 ease-linear hover:opacity-90 "
              >
                SignUp
              </a>
            </NextLink>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
