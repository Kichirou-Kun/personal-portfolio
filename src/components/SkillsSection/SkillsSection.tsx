import Title from "@components/Title";
import { skills } from "@config/dummyDatas";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import NextImage from "next/legacy/image";
import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section className="bg-BODY_BG pt-32" id="skills">
      <Container>
        <Title title="skills" text="What I can Do" />
        <Grid container className="gap-6">
          {skills.map((skill) => (
            <Grid
              key={skill.id}
              item
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
            >
              <div className="flex flex-row items-center justify-between  rounded bg-SECONDARY_BG p-4">
                <motion.div
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="h-[50px] w-[50px]"
                >
                  <NextImage
                    src={skill.image}
                    alt="html"
                    width={50}
                    height={50}
                    priority
                    layout="fixed"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <Typography
                    variant="h6"
                    className="text-lg font-semibold uppercase text-SECONDARY_COLOR"
                  >
                    {skill.text}
                  </Typography>
                </motion.div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SkillsSection;
