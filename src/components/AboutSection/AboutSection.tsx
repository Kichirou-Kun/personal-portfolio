import Title from "@components/Title";
import { NEXT_IMAGE_QUALITY } from "@config/app";
import Container from "@ui/Container";
import Typography from "@ui/Typography";
import NextImage from "next/legacy/image";
import React from "react";
import { motion } from "framer-motion";
import { aboutDataType } from "src/types/dataTypes";
import { useWindowSize } from "react-use";

interface Props {
  about: aboutDataType;
}
const AboutSection = ({ about }: Props) => {
  const { width } = useWindowSize();
  return (
    <section className="overflow-x-hidden pt-32 " id="about">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          <div className="flex w-full flex-col justify-center lg:w-[55%]">
            <Title title="About" text="Who I Am" />
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography variant="h5" className="mb-3 text-white">
                {about?.text}
              </Typography>
              <Typography className="mb-6 text-lg text-SECONDARY_COLOR">
                {about?.description1}
              </Typography>
              <Typography className="R text-lg text-SECONDARY_COLOR">
                {about?.description2}
              </Typography>
            </motion.div>
          </div>
          <div className=" flex flex-1 flex-col items-center justify-center ">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex w-full flex-col items-center justify-center sm:h-[450px] lg:w-[500px]"
            >
              <NextImage
                priority
                src={about?.imageURL}
                width={width > 390 ? 450 : 320}
                height={width > 390 ? 450 : 320}
                layout="fixed"
                alt="profile image"
                className="rounded-md"
                objectFit="cover"
                quality={NEXT_IMAGE_QUALITY}
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
