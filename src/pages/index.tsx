import FrontLayout from "@common/FrontLayout";
import AboutSection from "@components/AboutSection";
import BaseSeo from "@components/BaseSeo";
import ContactSection from "@components/ContactSection";
import HeroBanner from "@components/HeroBanner";
import ProjectsSectioin from "@components/ProjectsSection/ProjectsSectioin";
import SkillsSection from "@components/SkillsSection";

import { InferGetStaticPropsType } from "next";
import React from "react";

export const getStaticProps = async () => {
  return {
    props: {
      products: [],
    },
  };
};
const HomePage = () => {
  return (
    <>
      <BaseSeo />
      <HeroBanner />
      <AboutSection />
      <SkillsSection />
      <ProjectsSectioin />
      <ContactSection />
    </>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
