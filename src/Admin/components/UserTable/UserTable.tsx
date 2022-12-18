import { useAuth } from "@context/AuthContext/AuthContext";
import Typography from "@ui/Typography";
import React from "react";

const UserTable = () => {
  const { user } = useAuth();

  return (
    <div className="mb-10 flex w-full flex-col">
      <Typography variant="h3" className="mb-2 text-SECONDARY_COLOR">
        Users
      </Typography>
      <div className="flex min-w-full  flex-col overflow-x-auto rounded bg-SECONDARY_BG p-4">
        <table className="min-w-full table-auto">
          <thead className=" text-center ">
            <tr>
              <th
                scope="col"
                className="hidden py-4 text-left text-lg  font-semibold text-white lg:flex"
              >
                No.
              </th>
              <th
                scope="col"
                className=" py-4 text-left text-lg font-semibold  text-white"
              >
                Name
              </th>
              <th
                scope="col"
                className=" py-4 text-left text-lg font-semibold  text-white"
              >
                Email
              </th>
            </tr>
          </thead>
          <tbody className=" text-center">
            {user && (
              <tr className="border-b border-white">
                <td className="text-md hidden whitespace-nowrap py-4  font-medium text-SECONDARY_COLOR lg:flex">
                  1.
                </td>
                <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                  {user.id}
                </td>
                <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                  {user.email}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
