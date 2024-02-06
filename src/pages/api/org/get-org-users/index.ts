import { NextApiRequest, NextApiResponse } from "next";
import { Organization } from "@/models/Organization";

const GET = (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.status(200).send("get org repos");
};

export default GET;
