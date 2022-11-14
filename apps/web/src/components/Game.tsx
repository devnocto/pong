import { useQuery, useQueryClient } from "@tanstack/react-query";
import { pong } from "protobuf";
import { useEffect } from "react";
import { useWebSocketConnection } from "../hooks/useWebSocketConnection";
import { PongError } from "../interfaces";
import { fetchFromCache } from "../lib/api";
import { IconSpinner } from "./Icons";

type Props = {
  setModalError: (error: PongError) => void;
};

const Game = ({ setModalError }: Props) => {
  useWebSocketConnection();

  const queryClient = useQueryClient();
  const config = useQuery({
    queryKey: ["config"],
    queryFn: async ({ queryKey }) => await fetchFromCache<pong.IGame>(queryKey, queryClient),
  });

  // Set error in modal
  useEffect(() => {
    if (config.isError) setModalError(PongError.DataError);
  }, [config.isError, setModalError]);

  if (config.isError) {
    return <p className="text-gray-500">Error occurred</p>;
  }

  if (config.isLoading) return <IconSpinner className="w-6 h-6 animate-spin mt-6 text-gray-500 dark:text-gray-400" />;

  return (
    <div>
      <p>{config.data.screenSize?.height}</p>
    </div>
  );
};

export default Game;
