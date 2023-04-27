import Head from "next/head";
import axios from "axios";

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
