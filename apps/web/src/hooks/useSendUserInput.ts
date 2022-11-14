import { pong } from "protobuf";
import { useCallback, useEffect } from "react";
import { Keymap } from "../lib/constants/constants";
import Paddle from "../lib/game/paddle";

// Handles logic for sending user input to the server for processing
const useSendUserInput = (socket: WebSocket, leftPaddle: Paddle, rightPaddle: Paddle) => {
  // For when the key is pressed down by player
  const sendPlayerInput = useCallback(
    (event: KeyboardEvent) => {
      const key: string = event.code;
      switch (key) {
        case "KeyW":
        case "KeyS":
        case "ArrowUp":
        case "ArrowDown":
        case "KeyM":
        case "KeyP":
        case "KeyN":
          // Defaults last request number, that identifies the movement input in a sequence, to 0
          let requestNumber = 0;

          // Handle the entered movement input and get a request number to identify the input
          // for the corresponding paddle
          if (key === "KeyW" || key === "KeyS") {
            requestNumber = leftPaddle.clientPrediction(Keymap.keydown[key]);
          } else if (key === "ArrowUp" || key === "ArrowDown") {
            requestNumber = rightPaddle.clientPrediction(Keymap.keydown[key]);
          }

          // Create binary message to send to the server and send it
          const message = pong.Message.create({
            userAction: { request: requestNumber, userInput: Keymap.keydown[key] },
          });
          socket.send(pong.Message.encode(message).finish());
          break;
      }
    },
    [leftPaddle, rightPaddle, socket]
  );

  // For when the key is released by player
  const sendPlayerInputStop = useCallback(
    (event: KeyboardEvent) => {
      const key: string = event.code;
      switch (key) {
        case "KeyW":
        case "KeyS":
        case "ArrowUp":
        case "ArrowDown":
          // Defaults last request number, that identifies the movement input in a sequence, to 0
          let requestNumber = 0;

          // Handle the entered movement input and get a request number to identify the input
          // for the corresponding paddle
          if (key === "KeyW" || key === "KeyS") {
            requestNumber = leftPaddle.clientPrediction(Keymap.keyup[key]);
          } else if (key === "ArrowUp" || key === "ArrowDown") {
            requestNumber = rightPaddle.clientPrediction(Keymap.keyup[key]);
          }

          // Create binary message to send to the server and send it
          const message = pong.Message.create({
            userAction: { request: requestNumber, userInput: Keymap.keyup[key] },
          });
          console.log("stop", key);
          socket.send(pong.Message.encode(message).finish());
          break;
      }
    },
    [leftPaddle, rightPaddle, socket]
  );

  useEffect(() => {
    // Add event listener for player input
    document.addEventListener("keydown", sendPlayerInput);
    document.addEventListener("keyup", sendPlayerInputStop);

    // Cleanup event listener
    return () => {
      document.removeEventListener("keydown", sendPlayerInput);
      document.removeEventListener("keyup", sendPlayerInputStop);
    };
  }, [sendPlayerInput, sendPlayerInputStop]);
};

export default useSendUserInput;
