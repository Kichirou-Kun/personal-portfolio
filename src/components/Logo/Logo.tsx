import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { useUI } from "@context/UIContext/UIContext";
interface Props {
  className?: string;
  size?: "medium" | "small" | "large";
  href: "/" | "/admin" | string;
}
const Logo = ({ className, href, size = "medium" }: Props) => {
  const { setCloseSidebar, setCloseAdmin } = useUI();
  const closeSidebarHandler = () => {
    setCloseSidebar();
    setCloseAdmin();
  };
  return (
    <NextLink href={href}>
      <div
        onClick={closeSidebarHandler}
        className={clsx(
          "bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text font-bold text-transparent transition-opacity duration-150  ease-linear hover:opacity-80",
          {
            ["text-3xl"]: size === "small",
            ["text-3xl lg:text-4xl"]: size === "medium",
            ["text-3xl lg:text-4xl xl:text-5xl"]: size === "large",
          },
          className
        )}
      >
        Portfolio
      </div>
    </NextLink>
  );
};

export default Logo;
