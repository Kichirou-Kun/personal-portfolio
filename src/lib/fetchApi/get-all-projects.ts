import { fetchProjectsSection } from "@utils/fetchApi";

export const getAllProjectsSection = async () => {
  const projects = await fetchProjectsSection().then((data) => {
    return data[0];
  });
  return projects;
};
