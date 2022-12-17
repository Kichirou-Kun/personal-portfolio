// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@database/connect";
import { getUsers, postUser } from "@database/controller";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  method: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );
  const { method } = req;
  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;
    case "PUT":
      res.status(200).json({ method, name: "PUT Request" });
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE Request" });
      break;
    default:
      res.setHeader("Allow", ["GET,POST,PUT,DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
