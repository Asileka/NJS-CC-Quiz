import React from "react";
import { PrismaClient } from "@prisma/client";

interface quiz {
  id: number;
  name: string;
  question1: string;
  question2: string;
  question3: string;
}

interface PageProps {
  quiz: quiz;
}

const prisma = new PrismaClient();

export default function QuizByID(props: PageProps) {
  return (
    <>
      <main>
        <h1 className="text-6xl text-black font-semibold">{props.quiz.name}</h1>
        <div>
          <h3>Question 1</h3>
          <p>{props.quiz.question1}</p>
          <div>
            <input type="radio" value="Yes" name="yesno1" /> Yes
            <input type="radio" value="No" name="yesno1" /> No
          </div>
        </div>
        <div>
          <h3>Question 2</h3>
          <p>{props.quiz.question2}</p>
          <div>
            <input type="radio" value="Yes" name="yesno1" /> Yes
            <input type="radio" value="No" name="yesno1" /> No
          </div>
        </div>
        <div>
          <h3>Question 3</h3>
          <p>{props.quiz.question3}</p>
          <div>
            <input type="radio" value="Yes" name="yesno1" /> Yes
            <input type="radio" value="No" name="yesno1" /> No
          </div>
        </div>
        <button>Submit</button>
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
