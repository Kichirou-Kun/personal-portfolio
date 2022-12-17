import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import React from "react";
interface Props {
  onClick?: () => void;
}
const UserTable = ({ onClick }: Props) => {
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
              <th
                scope="col"
                className=" py-4 text-left text-lg font-semibold  text-white"
              >
                Role
              </th>
              <th
                scope="col"
                className="py-4 text-left text-lg font-semibold  text-white"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" text-center">
            <tr className="border-b border-white">
              <td className="text-md hidden whitespace-nowrap py-4  font-medium text-SECONDARY_COLOR lg:flex">
                1.
              </td>
              <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                Mark
              </td>
              <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                mark@gmail.com
              </td>
              <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                User
              </td>
              <td className="text-md flex flex-row items-center justify-center space-x-4 whitespace-nowrap py-4 text-SECONDARY_COLOR">
                <IconButton
                  className="flex flex-col items-center justify-center"
                  onClick={onClick}
                >
                  <PencilIcon className="h-6 w-6" />
                </IconButton>
                <IconButton className="flex flex-col items-center justify-center">
                  <TrashIcon className="h-6 w-6 " />
                </IconButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
