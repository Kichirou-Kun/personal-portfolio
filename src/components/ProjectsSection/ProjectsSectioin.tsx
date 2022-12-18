import Title from "@components/Title";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { projectDataType } from "src/types/dataTypes";

interface Props {
  projects: projectDataType;
}
const ProjectsSectioin = ({ projects }: Props) => {
  return (
    <section className="overflow-x-hidden pt-32 " id="projects">
      <Container>
        <Title title="projects" text="What I've Build" />
        <Grid container>
          <Grid item className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="group relative h-[400px] w-full cursor-pointer overflow-hidden rounded-md"
            >
              <div className="absolute top-0 right-0 bottom-0 left-0 z-20 h-[500px] w-full scale-0 bg-black bg-opacity-40 transition-all duration-150 ease-linear group-hover:scale-100" />
              <NextImage
                src={projects?.imageURL}
                className="object-cover"
                priority
                layout="fill"
                alt="projects"
              />
              <div className="absolute left-[50%] top-[50%] z-40  -translate-x-[50%] -translate-y-[50%] scale-0 rounded bg-black  bg-opacity-80 p-6 text-center transition-all duration-200 ease-linear group-hover:scale-110">
                <Typography variant="h3" className="text-white ">
                  {projects?.app_name}
                </Typography>
                <Typography variant="h4" className="mt-2 text-white">
                  {projects?.main_technology}
                </Typography>

                <div className="mt-4 flex flex-row items-center justify-center space-x-4">
                  <NextLink href={projects?.github_link} target="_blank">
                    <Button className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:bg-opacity-90">
                      Github
                    </Button>
                  </NextLink>
                  <NextLink href={projects?.demo_link} target="_blank">
                    <Button className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:bg-opacity-90">
                      Demo
                    </Button>
                  </NextLink>
                </div>
              </div>
            </motion.div>
            <Typography variant="h4" className="mt-2 text-SECONDARY_COLOR">
              {projects?.all_technologies}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProjectsSectioin;
