import Head from "next/head";
import { useState } from "react";
import BtnPrimary from "../components/BtnPrimary";
import Game from "../components/Game";

export default function Home() {
  const [start, setStart] = useState(false);

  return (
    <>
      <Head>
        <title>Pong UI</title>
        <meta name="description" content="Play pong game online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-content-center h-screen dark:bg-gray-900">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Pong
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Play pong online.
          </p>
          {!start ? <BtnPrimary label="Start game" onClick={() => setStart(true)} /> : <Game />}
        </div>
      </main>
    </>
  );
}
