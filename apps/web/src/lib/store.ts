import { pong } from "protobuf";
import create from "zustand";

export type GameConfig = {
  ballRadius: number;
  leftPaddleX: number;
  paddleHeight: number;
  paddleWidth: number;
  rightPaddleX: number;
  screenHeight: number;
  screenWidth: number;
};

export type GameUpdate = {
  ballVx: number;
  ballVy: number;
  ballX: number;
  ballY: number;
  gameState: pong.GameState;
  leftPaddleVy: number;
  leftPaddleY: number;
  leftScore: number;
  rightPaddleVy: number;
  rightPaddleY: number;
  rightScore: number;
};

type GameState = {
  config?: GameConfig;
  game: GameUpdate;
  updateConfigWithServerConfig: (config: GameConfig) => void;
  updateWithServerState: (state: GameUpdate) => void;
};

export const useGameStateStore = create<GameState>()((set) => ({
  game: {
    ballVx: 0,
    ballVy: 0,
    ballX: 0,
    ballY: 0,
    gameState: pong.GameState.MENU_STATE,
    leftPaddleVy: 0,
    leftPaddleY: 0,
    leftScore: 0,
    rightPaddleVy: 0,
    rightPaddleY: 0,
    rightScore: 0,
  },
  updateConfigWithServerConfig: (config) => set({ config }),
  updateWithServerState: (state) => set({ game: state }),
}));
