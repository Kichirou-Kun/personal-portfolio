import { NEXT_IMAGE_QUALITY } from "@config/app";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import React from "react";
import profile from "../../../public/assets/profile/profile-image.jpeg";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="pt-60">
      <Container>
        <Grid container className="gap-6">
          <Grid item className="col-span-12 lg:col-span-6">
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
                  Aung Nyein Htet
                </span>
              </Typography>
              <Typography
                variant="h1"
                className="mt-6 bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text  text-transparent"
              >
                A Front-End Web Developer
              </Typography>
              <Typography className="mt-4 text-lg  text-SECONDARY_COLOR">
                I'm a front-end developer specializing in building (and
                occasionally designing) exceptional digital
                experiences.Currently,I'm focused on building responsive
                front-end web applications while learning back-end technologies.
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
          </Grid>
          <Grid
            item
            className="col-span-12 flex flex-col items-center justify-center lg:col-span-6"
          >
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <NextImage
                src={profile}
                width={450}
                height={450}
                layout="fixed"
                alt="profile image"
                className="rounded-full"
                priority
                quality={NEXT_IMAGE_QUALITY}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroBanner;
