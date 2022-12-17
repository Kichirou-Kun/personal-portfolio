import NavMenuList from "@admin/components/NavMenuList";
import Logo from "@components/Logo";
import { useUI } from "@context/UIContext/UIContext";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "@ui/Button";
import Container from "@ui/Container";
import IconButton from "@ui/IconButton";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { setOpenAdmin } = useUI();
  return (
    <div className=" py-10">
      <Container className="flex flex-row items-center justify-between">
        <Logo href="/admin" />

        <div className="hidden flex-row items-center space-x-6 lg:flex">
          <NavMenuList />

          <Button className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80">
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
