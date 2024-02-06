import { NextApiRequest, NextApiResponse } from "next";

const GET = (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.status(200).send("hello from signin");
};

export default GET;
