import { NextApiRequest, NextApiResponse } from "next";
import { Repository } from "@/models/Repository";

const GET = (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.status(200).send("get repo");
};

export default GET;
