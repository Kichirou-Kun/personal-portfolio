import React from "react";
import clsx from "clsx";
import Typography from "@ui/Typography";
import { motion } from "framer-motion";
interface Props {
  className?: string;
  title: string;
  text: string;
}
const Title = ({ title, text, className }: Props) => {
  return (
    <>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={clsx("text-SECONDARY_DARK mb-4  font-semibold", className)}
      >
        <Typography
          variant="h5"
          className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text uppercase text-transparent"
        >
          {title}
        </Typography>
        <Typography
          variant="h2"
          className="font-bold capitalize text-SECONDARY_COLOR"
        >
          {text}
        </Typography>
      </motion.div>
    </>
  );
};

export default Title;
