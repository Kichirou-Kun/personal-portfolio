import Title from "@components/Title";
import { NEXT_IMAGE_QUALITY } from "@config/app";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import NextImage from "next/legacy/image";
import React from "react";
import about from "../../../public/assets/about/about.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="pt-32" id="about">
      <Container>
        <Grid container className="gap-10 lg:gap-6">
          <Grid item className="col-span-12 lg:col-span-6">
            <Title title="About" text="Who I Am" />
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Typography variant="h5" className="mb-3 text-white">
                // I Am Not Your Normal Developer
              </Typography>
              <Typography className="mb-6 text-lg text-SECONDARY_COLOR">
                I have spent the last 3years in the Shwe Than Lwin Media Co.,Ltd
                as a translator.I started interseted in programming. in 2020 I
                started learning with HTML CSS Javascript from Msquare
                Programming youtube channel.
              </Typography>
              <Typography className="text-lg text-SECONDARY_COLOR">
                Fascinated with how intricate programming can be I was quickly
                drawn to learn more.I am now spending my time building projects
                with React JS,NextJs and new technologies
              </Typography>
            </motion.div>
          </Grid>
          <Grid
            item
            className="col-span-12 flex flex-col items-center justify-center lg:col-span-6"
          >
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="overflow-hidden rounded-md border-8"
            >
              <NextImage
                priority
                src={about}
                alt="about"
                layout="fixed"
                width={400}
                height={500}
                objectFit="cover"
                quality={NEXT_IMAGE_QUALITY}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutSection;
