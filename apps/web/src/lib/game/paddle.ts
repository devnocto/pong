import { Keymap } from "../constants/constants";
import { Paddle as PaddleConfig, PlayerState, Point, Size } from "../../interfaces";

// Contains the properties for a paddle in the game.
class Paddle {
  position: Point;
  size: Size;
  vy: number;
  ay: number;
  canvas: Size;
  color: string;
  prevY: number;
  targetY: number;
  prevV: number;
  targetV: number;
  lastUpdateTime: number;
  updateInterval: number;
  lastRequestNumber: number; // To keep track of each input sent to server
  serverLastProcessed: number; // Server returns lastRequestNumber that it processed
  unprocessedRequests: Map<number, number>; // Map<lastRequestNumber, position.y>

  constructor(paddle: PaddleConfig, canvas: Size) {
    this.position = paddle.point;
    this.size = paddle.size;
    this.vy = paddle.velocity.vy;
    this.ay = paddle.ay;
    this.canvas = canvas;
    this.color = "white";
    this.prevY = paddle.point.y;
    this.targetY = paddle.point.y;
    this.prevV = paddle.velocity.vy;
    this.targetV = paddle.velocity.vy;
    this.lastUpdateTime = 0;
    this.updateInterval = 1;
    this.lastRequestNumber = 0;
    this.unprocessedRequests = new Map<number, number>();
    this.serverLastProcessed = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }

  // Client side movement
  moveUp() {
    this.vy = -this.ay;
  }
  moveDown() {
    this.vy = this.ay;
  }
  stopUp() {
    if (this.vy < 0) {
      this.vy = 0;
    }
  }
  stopDown() {
    if (this.vy > 0) {
      this.vy = 0;
    }
  }

  update() {
    this.cleanProcessedInputs(); // Clean inputs server already processed
    this.interpolateEntity(); // Interpolate

    this.position.y += this.vy; // Add velocity to paddle

    // Boundaries
    // Top boundary
    if (this.position.y + this.vy < 0) {
      this.vy = 0;
      this.position.y = 0;
    }

    // Bottom boundary
    if (this.position.y + this.vy > this.canvas.height - this.size.height) {
      this.vy = 0;
      this.position.y = this.canvas.height - this.size.height;
    }

    // If the last request number is greater than 0 then input was sent to the server to process
    // so save the current position for the entered input.
    if (this.lastRequestNumber > 0) {
      this.unprocessedRequests.set(this.lastRequestNumber, Math.round(this.position.y));
    }
  }

  // Update the state with received server data for entity interpolation between the previous and target data
  updateState(player: PlayerState, lastUpdateTime: number, updateInterval: number) {
    this.lastUpdateTime = lastUpdateTime;
    this.updateInterval = updateInterval;
    this.serverLastProcessed = player.lastRequest;
    this.prevY = this.targetY;
    this.targetY = player.state.position.y;
    this.prevV = this.targetV;
    this.targetV = player.state.velocity.vy;
  }

  // Interpolate entity toward the target data saved from the server state update.
  interpolateEntity() {
    let elapsed = Date.now() - this.lastUpdateTime;
    this.position.y = this.prevY + elapsed * ((this.targetY - this.prevY) / this.updateInterval);
    this.vy = this.prevV + elapsed * ((this.targetV - this.prevV) / this.updateInterval);
  }

  // Predict the client input based on the inputs sent to the server
  clientPrediction(input: number): number {
    switch (input) {
      case Keymap.keydown.KeyW:
      case Keymap.keydown.ArrowUp:
        this.moveUp();
        break;
      case Keymap.keydown.KeyS:
      case Keymap.keydown.ArrowDown:
        this.moveDown();
        break;
      case Keymap.keyup.KeyW:
      case Keymap.keyup.ArrowUp:
        this.stopUp();
        break;
      case Keymap.keyup.KeyS:
      case Keymap.keyup.ArrowDown:
        this.stopDown();
        break;
    }

    // Increment the number of the last request sent to the server and return it.
    // This keeps track of how many unprocessed input requests are sent to the server.
    // It resets once the last processed input received from the server update states matches
    // the last request number.
    this.lastRequestNumber += 1;
    return this.lastRequestNumber;
  }

  // Deletes client copy of position data for each entered input up to and including the data
  // the server has already processed.
  cleanProcessedInputs() {
    // If there is unprocessed (by the server) input present then delete client copies up to
    // where the server has last processed.
    if (this.unprocessedRequests.size >= 1) {
      for (let i = 0; i <= this.serverLastProcessed; i++) {
        this.unprocessedRequests.delete(i);
      }

      // If there are no more unprocessed inputs, reset the last request number to 0
      if (this.unprocessedRequests.size === 0) {
        this.lastRequestNumber = 0;
      }
    }
  }
}

export default Paddle;
