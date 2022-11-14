// Enum for user input, corresponding with protobuf implementation
enum UserInput {
  Start,
  Pause,
  LeftUp,
  LeftDown,
  RightUp,
  RightDown,
  StopLeftUp,
  StopLeftDown,
  StopRightUp,
  StopRightDown,
  Reset,
}

// Maps the pressed & released keys with the respective user input
export const Keymap = {
  keydown: {
    KeyW: UserInput.LeftUp,
    KeyS: UserInput.LeftDown,
    ArrowUp: UserInput.RightUp,
    ArrowDown: UserInput.RightDown,
    KeyM: UserInput.Reset,
    KeyP: UserInput.Pause,
    KeyN: UserInput.Start,
  },
  keyup: {
    KeyW: UserInput.StopLeftUp,
    KeyS: UserInput.StopLeftDown,
    ArrowUp: UserInput.StopRightUp,
    ArrowDown: UserInput.StopRightDown,
  },
};
