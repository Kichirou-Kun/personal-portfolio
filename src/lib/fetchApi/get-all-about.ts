import { fetchAboutSection } from "@utils/fetchApi";

export const getAllAboutSection = async () => {
  const about = await fetchAboutSection().then((data) => {
    return data[0];
  });
  return about;
};
