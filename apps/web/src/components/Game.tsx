import { useConfig } from "../hooks/useConfig";
import { useWebSocketConnection } from "../hooks/useWebSocketConnection";
import GameScreen from "./GameScreen";
import { IconSpinner } from "./Icons";

const Game = () => {
  const socket = useWebSocketConnection();

  const { data, isError, isLoading, isSuccess } = useConfig();

  if (isError) return <p className="text-gray-500 dark:text-gray-400">Error occurred</p>;

  if (isLoading) return <IconSpinner className="w-6 h-6 animate-spin mt-6 text-gray-500 dark:text-gray-400" />;

  return isSuccess && <GameScreen socket={socket} config={data} />;
};

export default Game;
