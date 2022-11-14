import { pong } from "protobuf";

// Maps the pressed & released keys with the respective user input
export const Keymap = {
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
