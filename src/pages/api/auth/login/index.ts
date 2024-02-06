import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/models/User";

const GET = (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.status(200).send("hello from signin");
};

export default GET;
