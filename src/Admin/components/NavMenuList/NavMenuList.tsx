import { ADMIN_AUTHS } from "@config/paths";
import Stack from "@ui/Stack";
import clsx from "clsx";
import React from "react";
import NavMenu from "../NavMenu/NavMenu";
interface Props {
  direction?: "row" | "column";
}
const NavMenuList = ({ direction = "row" }: Props) => {
  return (
    <Stack
      className={clsx({
        ["space-x-6"]: direction === "row",
        ["space-y-6"]: direction === "column",
      })}
      direction={direction}
    >
      <NavMenu title="HERO" href={ADMIN_AUTHS.HERO} />
      <NavMenu title="ABOUT" href={ADMIN_AUTHS.ABOUT} />
      <NavMenu title="SKILLS" href={ADMIN_AUTHS.SKILLS} />
      <NavMenu title="PROJECTS" href={ADMIN_AUTHS.PROJECTS} />
      <NavMenu title="CONTACT" href={ADMIN_AUTHS.CONTACT} />
    </Stack>
  );
};

export default NavMenuList;
