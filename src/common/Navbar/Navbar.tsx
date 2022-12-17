import Logo from "@components/Logo";
import NavMenuActions from "@components/NavMenuActions";
import NavMenuList from "@components/NavMenuList";
import { WINDOW_SCROLL_SIZE } from "@config/app";
import { useUI } from "@context/UIContext/UIContext";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Container from "@ui/Container";
import IconButton from "@ui/IconButton";
import clsx from "clsx";
import React from "react";
import { useWindowScroll } from "react-use";
import { motion } from "framer-motion";
interface Props {
  transparent?: boolean;
}
const Navbar = ({ transparent = false }: Props) => {
  const { setOpenSidebar } = useUI();
  const { y } = useWindowScroll();
  return (
    <div
      className={clsx(
        "bg-BODY_BG py-10",
        y > WINDOW_SCROLL_SIZE &&
          "shadow-xl transition-shadow duration-200 ease-in-out"
      )}
    >
      <Container>
        <div className="flex flex-row items-center justify-between">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Logo />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex"
          >
            <NavMenuList />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex"
          >
            <NavMenuActions />
          </motion.div>

          <div className="flex lg:hidden">
            <IconButton onClick={setOpenSidebar}>
              <Bars3Icon className="h-8 w-8 text-SECONDARY_COLOR" />
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
