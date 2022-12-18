import { fetchContactSection } from "@utils/fetchApi";

export const getAllContactSection = async () => {
  const contact = await fetchContactSection().then((data) => {
    return data[0];
  });
  return contact;
};
