import { useAuth } from "@context/AuthContext/AuthContext";
import Avatar from "@ui/Avatar";
import Button from "@ui/Button";
import NextLink from "next/link";
import React from "react";

const NavMenuActions = () => {
  const { user, signout } = useAuth();
  return (
    <div className="flex flex-row items-center space-x-6">
      {user && user ? (
        <>
          <Avatar>{user.email[0].toUpperCase()}</Avatar>
          <Button
            onClick={signout}
            className="bg-gradient-to-r  from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
          >
            logout
          </Button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default NavMenuActions;
