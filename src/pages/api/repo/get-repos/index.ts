import { NextApiRequest, NextApiResponse } from "next";

const GET = (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.status(200).send("get repos");
};

export default GET;
