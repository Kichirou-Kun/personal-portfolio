import FrontLayout from "@common/FrontLayout";
import AboutSection from "@components/AboutSection";
import BaseSeo from "@components/BaseSeo";
import ContactSection from "@components/ContactSection";
import HeroBanner from "@components/HeroBanner";
import ProjectsSectioin from "@components/ProjectsSection/ProjectsSectioin";
import SkillsSection from "@components/SkillsSection";
import { getAllAboutSection } from "@lib/fetchApi/get-all-about";
import { getAllContactSection } from "@lib/fetchApi/get-all-contact";
import { getAllHeroBanner } from "@lib/fetchApi/get-all-hero-banner";
import { getAllProjectsSection } from "@lib/fetchApi/get-all-projects";
import { getAllSkillsSection } from "@lib/fetchApi/get-all-skills";

import { InferGetStaticPropsType } from "next";
import React from "react";
export const getStaticProps = async () => {
  const heroBanners: any = await getAllHeroBanner();
  const about: any = await getAllAboutSection();
  const skills: any = await getAllSkillsSection();
  const projects: any = await getAllProjectsSection();
  const contact: any = await getAllContactSection();

  return {
    props: {
      heros: heroBanners,
      contact,
      skills,
      projects,
      about,
    },
    revalidate: 60,
  };
};
const HomePage = ({
  heros,
  contact,
  skills,
  projects,
  about,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <BaseSeo />
      {heros && <HeroBanner banner={heros} />}
      {about && <AboutSection about={about} />}
      {skills && <SkillsSection skills={skills} />}
      {projects && <ProjectsSectioin projects={projects} />}
      {contact && <ContactSection contact={contact} />}
    </>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
