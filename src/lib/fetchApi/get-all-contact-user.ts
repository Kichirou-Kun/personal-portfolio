import { fetchUserContact } from "@utils/fetchApi";

export const getAllUserContact = async () => {
  const contact = await fetchUserContact().then((data) => {
    return data;
  });
  return contact;
};
