import { useWebSocketConnection } from "../hooks/useWebSocketConnection";
import { useGameStore } from "../lib/store";
import GameScreen from "./GameScreen";
import { IconSpinner } from "./Icons";

const Game = () => {
  const socket = useWebSocketConnection();
  const config = useGameStore((state) => state.config);

  if (!config) return <IconSpinner className="w-6 h-6 animate-spin mt-6 text-gray-500 dark:text-gray-400" />;

  return <GameScreen socket={socket} config={config} />;
};

export default Game;
