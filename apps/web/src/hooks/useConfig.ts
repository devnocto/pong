import { useQuery, useQueryClient } from "@tanstack/react-query";
import { pong } from "protobuf";
import { fetchFromCache } from "../lib/api";

export const useConfig = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["config"],
    queryFn: ({ queryKey }) => fetchFromCache<pong.IGame>(queryKey, queryClient),
  });
};
