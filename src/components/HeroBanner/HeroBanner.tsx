import { NEXT_IMAGE_QUALITY } from "@config/app";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Typography from "@ui/Typography";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { HeroDataType } from "src/types/dataTypes";
import { useWindowSize } from "react-use";

interface Props {
  banner: HeroDataType;
}
const HeroBanner = ({ banner }: Props) => {
  const { width } = useWindowSize();
  return (
    <section className="overflow-x-hidden pt-60">
      <Container>
        <div className="flex flex-col justify-between  gap-6 lg:flex-row">
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h6" className="text-SECONDARY_COLOR">
                LET'S BUILD SOMETHING TOGETHRE
              </Typography>
              <Typography
                variant="h1"
                className="mt-2  text-5xl font-bold text-white"
              >
                Hi, I'm{" "}
                <span className=" bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text text-transparent">
                  {" "}
                  {banner?.name}
                </span>
              </Typography>
              <Typography
                variant="h1"
                className="mt-6 bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text  text-transparent"
              >
                {banner?.position}
              </Typography>
              <Typography className="mt-4 text-lg  text-SECONDARY_COLOR">
                {banner?.description}
              </Typography>
              <NextLink href={`/`} download>
                <Button
                  size="large"
                  className="mt-6 bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:bg-opacity-90"
                >
                  Download CV
                </Button>
              </NextLink>
            </motion.div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className=" flex w-full flex-col items-center justify-center sm:h-[450px] lg:w-[500px]"
            >
              <NextImage
                src={banner?.imageURL}
                width={width > 390 ? 450 : 320}
                height={width > 390 ? 450 : 320}
                layout="fixed"
                alt="profile image"
                className="h-full w-full rounded-full"
                priority
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

export default HeroBanner;
