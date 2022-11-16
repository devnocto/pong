import { pong } from "protobuf";
import { useEffect } from "react";
import { useGameStateStore } from "../lib/store";

let socket: WebSocket;

export const useWebSocketConnection = () => {
  const updateConfigWithServerConfig = useGameStateStore((state) => state.updateConfigWithServerConfig);
  const updateWithServerState = useGameStateStore((state) => state.updateWithServerState);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? "";

    socket = new WebSocket(url);
    socket.binaryType = "arraybuffer";

    socket.onmessage = (event) => {
      const payload: ArrayBuffer = event.data;
      const message = pong.Message.decode(new Uint8Array(payload));

      switch (message.content) {
        case "config":
          updateConfigWithServerConfig({
            ballRadius: message.config?.ball?.radius ?? 0,
            leftPaddleX: message.config?.leftPaddle?.point?.x ?? 0,
            paddleHeight: message.config?.leftPaddle?.size?.height ?? 0,
            paddleWidth: message.config?.leftPaddle?.size?.width ?? 0,
            rightPaddleX: message.config?.rightPaddle?.point?.x ?? 0,
            screenHeight: message.config?.screenSize?.height ?? 0,
            screenWidth: message.config?.screenSize?.width ?? 0,
          });
          break;
        case "stateUpdate":
          updateWithServerState({
            ballVx: message.stateUpdate?.ball?.velocity?.vx ?? 0,
            ballVy: message.stateUpdate?.ball?.velocity?.vy ?? 0,
            ballX: message.stateUpdate?.ball?.position?.x ?? 0,
            ballY: message.stateUpdate?.ball?.position?.y ?? 0,
            gameState: message.stateUpdate?.state ?? 0,
            leftPaddleVy: message.stateUpdate?.leftPaddle?.state?.velocity?.vy ?? 0,
            leftPaddleY: message.stateUpdate?.leftPaddle?.state?.position?.y ?? 0,
            leftScore: message.stateUpdate?.score?.leftScore?.value ?? 0,
            rightPaddleVy: message.stateUpdate?.rightPaddle?.state?.velocity?.vy ?? 0,
            rightPaddleY: message.stateUpdate?.rightPaddle?.state?.position?.y ?? 0,
            rightScore: message.stateUpdate?.score?.rightScore?.value ?? 0,
          });
          break;
      }
    };

    return () => {
      socket.close();
    };
  }, [updateConfigWithServerConfig, updateWithServerState]);

  return socket;
};
