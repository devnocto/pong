import { useQueryClient } from "@tanstack/react-query";
import { pong } from "protobuf";
import { useEffect } from "react";

export const useWebSocketConnection = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? "";

    const socket = new WebSocket(url);
    socket.binaryType = "arraybuffer";

    socket.onmessage = (event) => {
      const payload: ArrayBuffer = event.data;
      const message = pong.Message.decode(new Uint8Array(payload));

      switch (message.content) {
        case "config":
          queryClient.invalidateQueries([message.content]);
          queryClient.setQueryData([message.content], message.config);
          break;
        case "stateUpdate":
          queryClient.setQueryData([message.content], (oldData: any) => {
            return Array.isArray(oldData) ? oldData.push(message.stateUpdate) : [oldData];
          });
          break;
      }
    };

    return () => {
      socket.close();
    };
  }, [queryClient]);
};
