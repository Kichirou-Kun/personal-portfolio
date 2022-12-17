import Button from "@ui/Button";
import NextLink from "next/link";
import React from "react";

const NavMenuActions = () => {
  return (
    <div className="flex flex-row items-center space-x-6">
      <NextLink href={`/signin`}>
        <Button className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text text-transparent  transition-opacity duration-150 ease-linear hover:opacity-80">
          SignIn
        </Button>
      </NextLink>
      <NextLink href={`/signup`}>
        <Button className="bg-gradient-to-r  from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80">
          SignUp
        </Button>
      </NextLink>
    </div>
  );
};

export default NavMenuActions;
