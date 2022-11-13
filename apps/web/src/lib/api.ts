import { QueryClient } from "@tanstack/react-query";

export const fetchFromCache = async <T,>(queryKey: string[], queryClient: QueryClient) => {
  const data = (await queryClient.getQueryData(queryKey)) as T | undefined;
  if (data === undefined) {
    throw new TypeError("data is undefined");
  }
  return data;
};