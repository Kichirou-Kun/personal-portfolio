import { fetchProjectsSection } from "@utils/fetchApi";

export const getAllProjectsSection = async () => {
  const projects = await fetchProjectsSection().then((data) => {
    return data;
  });
  return projects;
};
