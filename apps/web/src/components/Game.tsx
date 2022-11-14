import { useQuery, useQueryClient } from "@tanstack/react-query";
import { pong } from "protobuf";
import { useWebSocketConnection } from "../hooks/useWebSocketConnection";
import { fetchFromCache } from "../lib/api";
import GameScreen from "./GameScreen";
import { IconSpinner } from "./Icons";

const Game = () => {
  const socket = useWebSocketConnection();

  const queryClient = useQueryClient();
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["config"],
    queryFn: ({ queryKey }) => fetchFromCache<pong.IGame>(queryKey, queryClient),
  });

  if (isError) return <p className="text-gray-500 dark:text-gray-400">Error occurred</p>;

  if (isLoading) return <IconSpinner className="w-6 h-6 animate-spin mt-6 text-gray-500 dark:text-gray-400" />;

  return isSuccess && <GameScreen socket={socket} config={data} />;
};

export default Game;
