import React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import Link from "next/link";
interface quizProps {
  addQuizName: string;
  addQuizQuestion1: string;
  addQuizQuestion2: string;
  addQuizQuestion3: string;
}

interface FormRef {
  addQuizName: HTMLInputElement;
}

export default function CreateNewQuiz() {
  const formRef = useRef<HTMLFormElement>();

  async function addNewQuiz() {
    const {
      addQuizName,
      addQuizQuestion1,
      addQuizQuestion2,
      addQuizQuestion3,
    } = formRef.current;

    const name = addQuizName.value;
    const question1 = addQuizQuestion1.value;
    const question2 = addQuizQuestion2.value;
    const question3 = addQuizQuestion3.value;

    await axios.post("/api/quiz/create", {
      name,
      question1,
      question2,
      question3,
    });
    window.location.reload();
  }
  return (
    <>
      <main>
        <Link href={`/`}>
          <h4>To the main page</h4>
        </Link>
        <h1 className="text-6xl text-black font-semibold">New Quiz</h1>
        <form ref={formRef}>
          <label>Name</label>
          <div>
            <input name="addQuizName" type="text" />
          </div>
          <label>Question 1</label>
          <div>
            <input name="addQuizQuestion1" type="text" />
          </div>
          <label>Question 2</label>
          <div>
            <input name="addQuizQuestion2" type="text" />
          </div>
          <label>Question 3</label>
          <div>
            <input name="addQuizQuestion3" type="text" />
          </div>
        </form>
        <button onClick={() => addNewQuiz()}>Add</button>
      </main>
    </>
  );
}
