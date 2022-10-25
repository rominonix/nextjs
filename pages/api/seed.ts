import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";
import { User } from "../../models";
import { seedData } from "../../database/seed-data";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "Failed access" });
  }
  try {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(seedData.users);
    await db.disconnect();
    res.status(200).json({ message: "Successful Process" });
  } catch (error) {
    await db.disconnect();
    console.log(error);
    res.status(400).json({ message: "Bad Request" });
  }
}
