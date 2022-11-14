import { useQuery, useQueryClient } from "@tanstack/react-query";
import { pong } from "protobuf";
import { fetchFromCache } from "../lib/api";

type StateUpdateCache = {
  stateUpdate: pong.IStateUpdate;
  timestamp: number;
}[];

export const useStateUpdate = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["stateUpdate"],
    queryFn: ({ queryKey }) => fetchFromCache<StateUpdateCache>(queryKey, queryClient),
  });
};
