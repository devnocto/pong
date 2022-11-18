import { pong } from "protobuf";
import { useEffect } from "react";
import { useGameStore } from "../lib/store";

let socket: WebSocket;

export const useWebSocketConnection = () => {
  const updateConfigWithServerConfig = useGameStore((state) => state.updateConfigWithServerConfig);
  const updateWithServerState = useGameStore((state) => state.updateWithServerState);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? "";

    socket = new WebSocket(url);
    socket.binaryType = "arraybuffer";

    socket.onmessage = (event) => {
      const payload: ArrayBuffer = event.data;
      try {
        const response = pong.Response.decode(new Uint8Array(payload));

        switch (response.content) {
          case "config":
            updateConfigWithServerConfig(response.config as pong.GameConfig);
            break;
          case "stateUpdate":
            updateWithServerState(response.stateUpdate as pong.StateUpdate);
            break;
        }
      } catch (e) {
        return;
      }
    };

    return () => {
      socket.close();
    };
  }, [updateConfigWithServerConfig, updateWithServerState]);

  return socket;
};
