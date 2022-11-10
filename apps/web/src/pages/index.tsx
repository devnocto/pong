import Head from "next/head";

export default function Home() {
  const connectSocket = () => {
    const url = process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? "";
    const socket = new WebSocket(url)
    socket.binaryType = "arraybuffer"
    socket.onmessage= (event) => {
      console.log(event)
    }
  }

  return (
    <div>
      <Head>
        <title>Pong UI</title>
        <meta name="description" content="Play pong game online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-content-center h-screen dark:bg-gray-900 text-center">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Pong</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Play pong online.</p>
          <button onClick={connectSocket} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start game
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
