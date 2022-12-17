import { useUI } from "@context/UIContext/UIContext";
import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  title: string;
  href: string;
}
const NavMenu = ({ title, href }: Props) => {
  const { setCloseSidebar, setCloseAdmin } = useUI();
  const router = useRouter();
  const isActive = router.asPath === href;
  const closeSidebarHandler = () => {
    setCloseSidebar();
    setCloseAdmin();
  };
  return (
    <NextLink href={href} legacyBehavior>
      <a
        onClick={closeSidebarHandler}
        className={clsx(
          "font-semibold uppercase leading-snug",
          isActive
            ? "font-semibold text-white"
            : "text-SECONDARY_COLOR transition-colors duration-150 ease-linear hover:text-white"
        )}
      >
        {title}
      </a>
    </NextLink>
  );
};

export default NavMenu;
