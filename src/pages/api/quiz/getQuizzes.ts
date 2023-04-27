import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  {
    try {
      const quizzes = await prisma.quizzes.findMany();
      res.status(200).json(quizzes);
    } catch (err) {
      console.error(err);
      res.status(403).json({ error: "Error occured" });
    }
  }
}
