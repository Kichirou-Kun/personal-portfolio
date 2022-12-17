import NavMenu from "@components/NavMenu/NavMenu";
import { PATHS } from "@config/paths";
import Stack from "@ui/Stack";
import clsx from "clsx";
import React from "react";

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
      <NavMenu title="HOME" href={PATHS.HOME} />
      {direction === "column" && <span className="border border-gray-700" />}
      <NavMenu title="ABOUT" href={PATHS.ABOUT} />
      {direction === "column" && <span className="border border-gray-700" />}
      <NavMenu title="SKILLS" href={PATHS.SKILLS} />
      {direction === "column" && <span className="border border-gray-700" />}
      <NavMenu title="PROJECTS" href={PATHS.PROJECTS} />
      {direction === "column" && <span className="border border-gray-700" />}
      <NavMenu title="CONTACT" href={PATHS.CONTACT} />
    </Stack>
  );
};

export default NavMenuList;
