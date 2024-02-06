import { NextApiRequest, NextApiResponse } from "next";

const POST = (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.status(200).send("hello from signup");
};

export default POST;
