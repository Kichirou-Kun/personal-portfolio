import Container from "@ui/Container";
import React from "react";
import { userContactType } from "src/types/dataTypes";
interface Props {
  messages: userContactType[];
}
const ContactMessage = ({ messages }: Props) => {
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
                  Phone
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
              {messages &&
                messages.map((message) => (
                  <tr key={message?.id} className="border-white">
                    <td className="text-md whitespace-nowrap py-4  text-SECONDARY_COLOR">
                      {message?.name}
                    </td>
                    <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                      {message?.phone}
                    </td>
                    <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                      {message?.email}
                    </td>
                    <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                      {message?.subject}
                    </td>
                    <td className="text-md whitespace-nowrap  py-4 text-SECONDARY_COLOR">
                      {message?.message}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default ContactMessage;
