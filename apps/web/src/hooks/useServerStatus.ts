import { useQuery } from "@tanstack/react-query";

export const useServerStatus = () => {
  return useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      const url = process.env.NEXT_PUBLIC_SERVER_HEALTHCHECK_URL;
      if (!url) throw new Error("healthcheck url not present");
      const response = await fetch(url);
      if (!response.ok) throw new Error("healthcheck not ok");
      return response.ok;
    },
    staleTime: 0,
  });
};
