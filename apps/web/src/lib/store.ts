import { pong } from "protobuf";
import create from "zustand";

type State = {
  config?: pong.GameConfig;
  game: pong.StateUpdate;
  serverState: pong.StateUpdate;
  lastUpdateTime: number;
  updateInterval: number;
  updateConfigWithServerConfig: (config: pong.GameConfig) => void;
  updateWithServerState: (update: pong.StateUpdate) => void;
  updateGame: () => void;
};

export const useGameStore = create<State>()((set, get) => ({
  game: pong.StateUpdate.create(),
  serverState: pong.StateUpdate.create(),
  lastUpdateTime: Date.now(),
  updateInterval: 0,
  updateConfigWithServerConfig: (config) => set({ config }),
  updateWithServerState: (update) =>
    set((state) => {
      const now = Date.now();
      return { serverState: update, lastUpdateTime: now, updateInterval: now - state.lastUpdateTime };
    }),
  updateGame: () => {
    const target = get().serverState;
    if (target.gameState !== pong.GameState.PLAY_STATE) set({ game: target });

    const elapsed = Date.now() - get().lastUpdateTime; // Time since last received update from server
    const interval = get().updateInterval;
    let current = get().game;

    // Game State
    current.gameState = target.gameState;

    // Scores
    current.leftScore = target.leftScore;
    current.rightScore = target.rightScore;

    // Ball - with interpolation
    // Calculates the distance of the current coordinates and the target coordinates
    const xDiff = target.ballX - current.ballX;
    const yDiff = target.ballY + current.ballY; // y-axis inverted from cartesian
    const positionDiff = Math.sqrt(Math.pow(xDiff, 2) - Math.pow(yDiff, 2));

    // If the target position is close enough then interpolate, else teleport the entity to the target position.
    // This can occur when a goal is scored and position of the ball is reset to the center.
    if (positionDiff < 50) {
      current.ballX = current.ballX + elapsed * (xDiff / interval);
      current.ballY = current.ballY + elapsed * ((target.ballY - current.ballY) / interval);
    } else {
      current.ballX = target.ballX;
      current.ballY = target.ballY;
    }

    // Paddles - with interpolation
    current.leftPaddleY = current.leftPaddleY + elapsed * ((target.leftPaddleY - current.leftPaddleY) / interval);
    current.rightPaddleY = current.rightPaddleY + elapsed * ((target.rightPaddleY - current.rightPaddleY) / interval);

    set({ game: current });
  },
}));
