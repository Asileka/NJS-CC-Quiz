import Head from "next/head";

export default function Home() {
  interface quiz {
    id: number;
    name: string;
    question1: string;
    question2: string;
    question3: string;
  }
  return (
    <>
      <Head>
        <title>Ekaterina Tech Test</title>
      </Head>
      <main>
        <h1 className="text-6xl text-black font-semibold">Quizzes List</h1>
      </main>
    </>
  );
}
