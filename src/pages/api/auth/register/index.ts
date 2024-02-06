import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/models/User";

const POST = (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.status(200).send("hello from signup");
};

export default POST;
