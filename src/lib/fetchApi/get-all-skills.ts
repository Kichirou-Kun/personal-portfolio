import { fetchSkillsSection } from "@utils/fetchApi";

export const getAllSkillsSection = async () => {
  const skills = await fetchSkillsSection().then((data) => {
    return data;
  });
  return skills;
};
