import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/router";
export default function QuizByID(props) {
  const router = useRouter();
  const { quiz } = props;
  return (
    <>
      <main>
        <h1 className="text-6xl text-black font-semibold">Quizzes List</h1>
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.params;
  const food = await prisma.quiz.findUnique({ where: { id: parseInt(id) } });
  return {
    props: {
      food,
    },
  };
}
