import { fetchUsers } from "@utils/fetchApi";

export const getAllUsers = async () => {
  const user = await fetchUsers().then((data) => {
    return data;
  });
  return user;
};
