import { pong } from "protobuf";
import { GameConfig } from "./store";

const COLOR = "white";
const TEXT_GAP = 100;

type DrawState = {
  ballX: number;
  ballY: number;
  gameState: pong.GameState;
  leftPaddleY: number;
  leftScore: number;
  rightPaddleY: number;
  rightScore: number;
};

// Draws the game at a given state using the given config.
export const drawGame = (ctx: CanvasRenderingContext2D, config: GameConfig, state: DrawState) => {
  // Values
  const halfScreenWidth = config.screenWidth / 2;
  const halfScreenHeight = config.screenHeight / 2;

  // Clear canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Paddles
  ctx.fillStyle = COLOR;
  ctx.fillRect(config.leftPaddleX, state.leftPaddleY, config.paddleWidth, config.paddleHeight);
  ctx.fillRect(config.rightPaddleX, state.rightPaddleY, config.paddleWidth, config.paddleHeight);

  // Ball
  ctx.beginPath();
  ctx.arc(state.ballX, state.ballY, config.ballRadius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = COLOR;
  ctx.fill();

  // Scores
  ctx.font = "60px sans";
  const textY = 75;
  ctx.fillText(state.leftScore.toString(), halfScreenWidth - TEXT_GAP, textY);
  ctx.fillText(state.rightScore.toString(), halfScreenWidth + TEXT_GAP - 35, textY);

  // Display UI Information on canvas based on the state of the game
  switch (state.gameState) {
    case pong.GameState.MENU_STATE:
      ctx.fillText("New Game", (config.screenWidth - 260) / 2, halfScreenHeight);
      ctx.font = "36px sans";
      ctx.fillText("Press n to start", (config.screenWidth - 212) / 2, halfScreenHeight + 60);
      break;
    case pong.GameState.PAUSE_STATE:
      ctx.fillText("Game Paused", (config.screenWidth - 324) / 2, halfScreenHeight);
      ctx.font = "36px sans";
      ctx.fillText("Press p to continue", (config.screenWidth - 260) / 2, halfScreenHeight + 60);
      break;
    case pong.GameState.STOP_STATE:
      const winner = state.leftScore > state.rightScore ? "2" : "1"; // Determines the winner
      ctx.fillText(`Player ${winner} Wins`, (config.screenWidth - 324) / 2, halfScreenHeight);
      ctx.font = "36px sans";
      ctx.fillText("Press m to return to menu", (config.screenWidth - 360) / 2, halfScreenHeight + 60);
      break;
  }
};
