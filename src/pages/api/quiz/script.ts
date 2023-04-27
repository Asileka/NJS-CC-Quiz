import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const quiz = await prisma.quizzes.create({
    data: {
      name: "Animals questions",
      question1: "Are lions carnivores?",
      question2: "Is salmon a freshwater fish?",
      question3: "Do frogs hybernate?",
    },
  });
  console.log(quiz);

  res.status(200).json(quiz);
}

async function main() {
  const quiz = await prisma.quizzes.create({
    data: {
      name: "Animals questiona",
      question1: "Are lions carnivores?",
      question2: "Is salmon a freshwater fish?",
      question3: "Do frogs hybernate?",
    },
  });
  console.log(quiz);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
