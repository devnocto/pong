import { Ball as BallConfig, ObjectState, Point, Velocity } from "../../interfaces";
import Paddle from "./paddle";

type BallUpdate = {
  leftPaddle: Paddle;
  rightPaddle: Paddle;
};

// Contains the properties for a ball in the game.
class Ball {
  radius: number;
  position: Point;
  velocity: Velocity;
  color: string;
  canvasHeight: number; // Used for defining boundaries
  prevPos: Point;
  targetPos: Point;
  prevV: Velocity;
  targetV: Velocity;
  lastUpdateTime: number;
  updateInterval: number;

  constructor(ball: BallConfig, canvasHeight: number) {
    this.radius = ball.radius;
    this.color = "white";
    this.position = ball.point;
    this.velocity = ball.velocity;
    this.canvasHeight = canvasHeight;
    this.prevPos = ball.point;
    this.targetPos = ball.point;
    this.prevV = ball.velocity;
    this.targetV = ball.velocity;
    this.lastUpdateTime = 0;
    this.updateInterval = 1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update({ leftPaddle, rightPaddle }: BallUpdate) {
    this.interpolateEntity(); // Interpolate

    // Add velocity to ball
    this.position.x += this.velocity.vx;
    this.position.y += this.velocity.vy;

    const ballEdge = {
      top: this.position.y - this.radius + this.velocity.vy,
      bottom: this.position.y + this.radius + this.velocity.vy,
      left: this.position.x - this.radius + this.velocity.vx,
      right: this.position.x + this.radius + this.velocity.vx,
    };

    // Boundaries
    // Top and bottom boundaries
    if (ballEdge.bottom > this.canvasHeight || ballEdge.top < 0) {
      this.velocity.vy = -this.velocity.vy; // Ball bounces off
    }
    // Right paddle
    if (ballEdge.right > rightPaddle.position.x && ballEdge.left < rightPaddle.position.x + rightPaddle.size.width) {
      if (ballEdge.bottom > rightPaddle.position.y && ballEdge.top < rightPaddle.position.y + rightPaddle.size.height) {
        this.velocity.vx = -this.velocity.vx; // Ball bounces off
      }
    }
    // Left paddle
    if (ballEdge.left < leftPaddle.position.x + leftPaddle.size.width && ballEdge.right > leftPaddle.position.x) {
      if (ballEdge.bottom > leftPaddle.position.y && ballEdge.top < leftPaddle.position.y + leftPaddle.size.height) {
        this.velocity.vx = -this.velocity.vx; // Ball bounces off
      }
    }
  }

  // Update the state with server data for entity interpolation between the previous and target data
  updateState(state: ObjectState, lastUpdateTime: number, updateInterval: number) {
    // Last update time and interval from the server
    this.lastUpdateTime = lastUpdateTime;
    this.updateInterval = updateInterval;

    // Coordinate data
    this.prevPos = this.targetPos; // Previous position
    this.targetPos = state.position; // Target position

    // Velocity data
    this.prevV = this.targetV; // Previous velocity
    this.targetV = state.velocity; // Target velocity
  }

  // Interpolate entity toward the target data saved from the server state update.
  interpolateEntity() {
    let elapsed = Date.now() - this.lastUpdateTime; // Time since last received update from server

    // Calculates the distance of the current ball coordinates and the target ball coordinates
    let xDiff = this.targetPos.x - this.position.x;
    let yDiff = this.targetPos.y + this.position.y; // y-axis inverted from cartesian
    let positionDiff = Math.sqrt(Math.pow(xDiff, 2) - Math.pow(yDiff, 2));

    // If the target position of the ball is close enough then interpolate, else teleport the ball to the
    // target position. This occurs when a goal is scored and position of the ball is reset to the center.
    if (positionDiff < 50) {
      this.position.x = this.prevPos.x + elapsed * ((this.targetPos.x - this.prevPos.x) / this.updateInterval);
      this.position.y = this.prevPos.y + elapsed * ((this.targetPos.y - this.prevPos.y) / this.updateInterval);
      this.velocity.vx = this.prevV.vx + elapsed * ((this.targetV.vx - this.prevV.vx) / this.updateInterval);
      this.velocity.vy = this.prevV.vy + elapsed * ((this.targetV.vy - this.prevV.vy) / this.updateInterval);
    } else {
      this.position = this.targetPos;
      this.velocity = this.targetV;
    }
  }
}

export default Ball;
