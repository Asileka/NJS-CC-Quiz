import Head from "next/head";
import axios from "axios";
import Link from "next/link";
interface quiz {
  id: number;
  name: string;
  question1: string;
  question2: string;
  question3: string;
}

interface PageProps {
  quizzes: quiz[];
}

export default function Home(props: PageProps) {
  return (
    <>
      <Head>
        <title>Ekaterina Tech Test </title>
      </Head>
      <main>
        <h1 className="text-6xl text-black font-semibold">
          Quizzes List {props.quizzes[0].name}
        </h1>
        <button>Create Quiz</button>
        <div>
          {props.quizzes.map((quiz) => (
            <div key={quiz.id}>
              <Link href={`/quiz/${quiz.id}`}>
                <p>{quiz.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/quiz/getQuizzes");
  return {
    props: {
      quizzes: response.data,
    },
  };
}
