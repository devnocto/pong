import { useQuery, useQueryClient } from "@tanstack/react-query";
import { pong } from "protobuf";
import { useWebSocketConnection } from "../hooks/useWebSocketConnection";
import { fetchFromCache } from "../lib/api";
import { IconSpinner } from "./Icons";

const Game = () => {
  useWebSocketConnection();

  const queryClient = useQueryClient();
  const config = useQuery({
    queryKey: ["config"],
    queryFn: ({ queryKey }) => fetchFromCache<pong.IGame>(queryKey, queryClient),
  });

  if (config.isError) return <p className="text-gray-500 dark:text-gray-400">Error occurred</p>;

  if (config.isLoading) return <IconSpinner className="w-6 h-6 animate-spin mt-6 text-gray-500 dark:text-gray-400" />;

  return (
    <div>
      <p>{config.data.screenSize?.height}</p>
    </div>
  );
};

export default Game;
