import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  {
    try {
      const { name, question1, question2, question3 } = req.body;
      console.log(req.body);
      const quiz = await prisma.quizzes.create({
        data: {
          name: name,
          question1: question1,
          question2: question2,
          question3: question3,
        },
      });
      res.status(200).json(quiz);
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: "Could not create your quiz" });
    }
  }
}
