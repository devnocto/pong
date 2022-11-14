import { QueryClient } from "@tanstack/react-query";

export const fetchFromCache = <T>(queryKey: string[], queryClient: QueryClient) => {
  const data = queryClient.getQueryData(queryKey) as T | undefined;
  if (data === undefined) {
    throw new TypeError("data is undefined");
  }
  return data;
};
