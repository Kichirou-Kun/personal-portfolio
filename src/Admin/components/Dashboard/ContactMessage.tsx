import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Container from "@ui/Container";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import React from "react";

const ContactMessage = () => {
  return (
    <div className="rounded bg-SECONDARY_BG p-6">
      <Container>
        <div className="flex w-full flex-col">
          <table className="w-full">
            <thead className="border-b ">
              <tr>
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
                  Subject
                </th>
                <th
                  scope="col"
                  className=" py-4 text-left text-lg font-semibold  text-white"
                >
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-white">
                <td className="text-md whitespace-nowrap py-4  text-SECONDARY_COLOR">
                  Mark
                </td>
                <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                  mark@gmail.com
                </td>
                <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  velit numquam reiciendis explicabo. Ullam quam et doloremque
                </td>
                <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  velit numquam reiciendis explicabo. Ullam quam et doloremque
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default ContactMessage;
