import React from "react";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";

const prisma = new PrismaClient();
export default function QuizByID(props) {
  return (
    <>
      <main>
        <h1 className="text-6xl text-black font-semibold">{props.quiz.name}</h1>
        <h3>Question 1</h3>
        <p>{props.quiz.question1}</p>
        <div>
          <input type="radio" value="Yes" name="yesno1" /> Yes
          <input type="radio" value="No" name="yesno1" /> No
        </div>
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.params;
  const quiz = await prisma.quizzes.findUnique({ where: { id: parseInt(id) } });
  return {
    props: {
      quiz,
    },
  };
}
