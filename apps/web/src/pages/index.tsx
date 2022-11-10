import { Dialog, Transition } from '@headlessui/react';
import Head from "next/head";
import { Fragment, useState } from 'react';
import IconSpinner from '../components/IconSpinner';

enum PongErrors {
  None = 'None',
  WebSocketTypeError = 'Websocket URL not valid',
  WebSocketConnectionError = 'Sever connection error',
}

export default function Home() {
  let [isLoading, setIsLoading] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [pongError, setPongError] = useState(PongErrors.None);

  const closeModal = () => {
    setIsOpen(false);
  };

  const connectSocket = () => {
    setIsLoading(true);

    const url = process.env.NEXT_PUBLIC_WEBSOCKET_URL;
    if (!url) {
      setPongError(PongErrors.WebSocketTypeError);
      setIsOpen(true);
      return;
    }

    const socket = new WebSocket(url);
    socket.binaryType = "arraybuffer";

    socket.onopen = (event) => {
      setIsLoading(false);
      setIsOpen(false);
    };

    socket.onerror = (event) => {
      setIsLoading(false);
      setPongError(PongErrors.WebSocketConnectionError);
      setIsOpen(true);
    };

    socket.onmessage = (event) => {
      const payload: ArrayBuffer = event.data;
      console.log(payload);
    };
  };

  return (
    <div>
      <Head>
        <title>Pong UI</title>
        <meta name="description" content="Play pong game online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-content-center h-screen dark:bg-gray-900">
        <div className='flex flex-col items-center'>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Pong</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Play pong online.</p>
          <div>
            <button onClick={connectSocket} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Start game
              </span>
            </button>
          </div>
          {isLoading && <IconSpinner className='w-6 h-6 animate-spin mt-6 text-gray-500 dark:text-gray-400'/>}
        </div>
      </main>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Error</Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{pongError}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
                      onClick={closeModal}
                    >
                    Continue
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
