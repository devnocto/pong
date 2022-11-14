import { GameConfig, Size, StateUpdate } from "../../interfaces";
import Ball from "./ball";
import Paddle from "./paddle";
import Score from "./score";

// Enum for game state, corresponding with protobuf implementation
enum State {
  Menu,
  Play,
  Pause,
  Stop,
}

// Contains the properties for the game and handles most of the game logic
class Pong {
  state: number;
  ball: Ball;
  leftPaddle: Paddle;
  rightPaddle: Paddle;
  leftScore: Score;
  rightScore: Score;
  screenSize: Size;

  constructor(gameConfig: GameConfig) {
    this.state = gameConfig.state;
    this.ball = new Ball(gameConfig.ball, gameConfig.screenSize.height);
    this.leftPaddle = new Paddle(gameConfig.leftPaddle, gameConfig.screenSize);
    this.rightPaddle = new Paddle(gameConfig.rightPaddle, gameConfig.screenSize);
    this.screenSize = gameConfig.screenSize;

    // To position the score on the canvas
    const textGap = 100;
    const textPos = {
      lx: gameConfig.screenSize.width / 2 - textGap,
      rx: gameConfig.screenSize.width / 2 + textGap - 35,
      y: 75,
    };
    this.leftScore = new Score(textPos.lx, textPos.y, gameConfig.leftScore.value);
    this.rightScore = new Score(textPos.rx, textPos.y, gameConfig.rightScore.value);
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Paddles
    this.leftPaddle.draw(ctx);
    this.rightPaddle.draw(ctx);

    // Ball
    this.ball.draw(ctx);

    // Scores
    this.leftScore.draw(ctx);
    this.rightScore.draw(ctx);

    // Display UI Information on canvas based on the state of the game
    switch (this.state) {
      case State.Menu:
        ctx.fillText("New Game", (this.screenSize.width - 260) / 2, this.screenSize.height / 2);
        ctx.font = "36px sans";
        ctx.fillText("Press n to start", (this.screenSize.width - 212) / 2, this.screenSize.height / 2 + 60);
        break;
      case State.Pause:
        ctx.fillText("Game Paused", (this.screenSize.width - 324) / 2, this.screenSize.height / 2);
        ctx.font = "36px sans";
        ctx.fillText("Press p to continue", (this.screenSize.width - 260) / 2, this.screenSize.height / 2 + 60);
        break;
      case State.Stop:
        const winner = this.leftScore.value > this.rightScore.value ? "2" : "1"; // Determines the winner
        ctx.fillText(`Player ${winner} Wins`, (this.screenSize.width - 324) / 2, this.screenSize.height / 2);
        ctx.font = "36px sans";
        ctx.fillText("Press m to return to menu", (this.screenSize.width - 360) / 2, this.screenSize.height / 2 + 60);
        break;
    }
  }

  // Update ball and paddles
  update() {
    if (this.state === State.Play) {
      this.ball.update({ leftPaddle: this.leftPaddle, rightPaddle: this.rightPaddle });
      this.rightPaddle.update();
      this.leftPaddle.update();
    }
  }

  // Receives a server state update and updates the other game objects with it
  updateState(stateUpdate: StateUpdate, lastUpdateTime: number, updateInterval: number) {
    this.state = stateUpdate.state; // Game state
    this.leftScore.updateState(stateUpdate.score.leftScore.value);
    this.rightScore.updateState(stateUpdate.score.rightScore.value);
    this.ball.updateState(stateUpdate.ball, lastUpdateTime, updateInterval);
    this.leftPaddle.updateState(stateUpdate.leftPaddle, lastUpdateTime, updateInterval);
    this.rightPaddle.updateState(stateUpdate.rightPaddle, lastUpdateTime, updateInterval);
  }
}

export default Pong;
