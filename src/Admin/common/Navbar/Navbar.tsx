import NavMenuList from "@admin/components/NavMenuList";
import Logo from "@components/Logo";
import { useAuth } from "@context/AuthContext/AuthContext";
import { useUI } from "@context/UIContext/UIContext";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "@ui/Button";
import Container from "@ui/Container";
import IconButton from "@ui/IconButton";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { setOpenAdmin } = useUI();
  const { signout } = useAuth();
  const router = useRouter();
  const logoutHandler = () => {
    signout();
    router.push("/");
  };
  return (
    <div className=" py-10">
      <Container className="flex flex-row items-center justify-between">
        <Logo />

        <div className="hidden flex-row items-center space-x-6 lg:flex">
          <NavMenuList />

          <Button
            onClick={logoutHandler}
            className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
          >
            Logout
          </Button>
        </div>
        <div className="flex lg:hidden">
          <IconButton onClick={setOpenAdmin}>
            <Bars3Icon className="h-8 w-8 text-SECONDARY_COLOR" />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
