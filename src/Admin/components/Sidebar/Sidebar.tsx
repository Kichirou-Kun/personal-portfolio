import Logo from "@components/Logo";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@ui/Button";
import IconButton from "@ui/IconButton";
import React from "react";
import NavMenuList from "../NavMenuList";
import { useAuth } from "@context/AuthContext/AuthContext";
import { useRouter } from "next/router";
interface Props {
  onClose: () => void;
}
const Sidebar = ({ onClose }: Props) => {
  const { signout } = useAuth();
  const router = useRouter();
  const logoutHandler = () => {
    signout();
    onClose();
    router.push("/");
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
      <div className="w-full p-6">
        <Button
          onClick={logoutHandler}
          size="large"
          className=" w-full bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
        >
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
