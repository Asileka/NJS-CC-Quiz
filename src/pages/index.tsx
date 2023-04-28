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
      <main className="flex items-start justify-center h-screen">
        <div className="text-center h-56 grid grid-cols-1 gap-4 content-center">
          <h1 className="text-3xl font-bold">Quizzes List</h1>
          <Link href={`/create`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Quiz
            </button>
          </Link>
          <div>
            {props.quizzes.map((quiz) => (
              <div key={quiz.id}>
                <Link href={`/quiz/${quiz.id}`}>
                  <p className="font-bold underline">{quiz.name}</p>
                </Link>
              </div>
            ))}
          </div>
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
