import { fetchHeroBanner } from "@utils/fetchApi";

export const getAllHeroBanner = async () => {
  const heros = await fetchHeroBanner().then((data) => {
    return data[0];
  });
  return heros || null;
};
