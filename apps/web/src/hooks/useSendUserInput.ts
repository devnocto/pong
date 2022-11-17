import { pong } from "protobuf";
import { useCallback, useEffect } from "react";

// Maps the pressed & released keys with the respective user input
const Keymap = {
  keydown: {
    KeyW: pong.UserInput.LEFT_UP,
    KeyS: pong.UserInput.LEFT_DOWN,
    ArrowUp: pong.UserInput.RIGHT_UP,
    ArrowDown: pong.UserInput.RIGHT_DOWN,
    KeyM: pong.UserInput.RESET_GAME,
    KeyP: pong.UserInput.PAUSE_GAME,
    KeyN: pong.UserInput.START_GAME,
  },
  keyup: {
    KeyW: pong.UserInput.STOP_LEFT_UP,
    KeyS: pong.UserInput.STOP_LEFT_DOWN,
    ArrowUp: pong.UserInput.STOP_RIGHT_UP,
    ArrowDown: pong.UserInput.STOP_RIGHT_DOWN,
  },
};

// Handles logic for sending user input to the server for processing
const useSendUserInput = (socket: WebSocket) => {
  // For when the key is pressed down by player
  const sendPlayerInput = useCallback(
    (event: KeyboardEvent) => {
      if (socket.readyState !== WebSocket.OPEN) return;

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

          // Create binary message to send to the server and send it
          const message = pong.Message.create({
            userAction: { request: requestNumber, userInput: Keymap.keydown[key] },
          });
          socket.send(pong.Message.encode(message).finish());
          break;
      }
    },
    [socket]
  );

  // For when the key is released by player
  const sendPlayerInputStop = useCallback(
    (event: KeyboardEvent) => {
      if (socket.readyState !== WebSocket.OPEN) return;

      const key: string = event.code;
      switch (key) {
        case "KeyW":
        case "KeyS":
        case "ArrowUp":
        case "ArrowDown":
          // Defaults last request number, that identifies the movement input in a sequence, to 0
          let requestNumber = 0;

          // Create binary message to send to the server and send it
          const message = pong.Message.create({
            userAction: { request: requestNumber, userInput: Keymap.keyup[key] },
          });
          socket.send(pong.Message.encode(message).finish());
          break;
      }
    },
    [socket]
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
