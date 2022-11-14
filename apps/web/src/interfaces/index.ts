// Represents the data on the server and received using protobuf

export type Size = {
  width: number;
  height: number;
};

export type Point = {
  x: number;
  y: number;
};

export type Velocity = {
  vx: number;
  vy: number;
};

type Score = {
  value: number;
};

export type Ball = {
  point: Point;
  velocity: Velocity;
  radius: number;
};

export type Paddle = {
  point: Point;
  velocity: Velocity;
  size: Size;
  ay: number;
};

export interface GameConfig {
  state: number;
  ball: Ball;
  leftPaddle: Paddle;
  rightPaddle: Paddle;
  leftScore: Score;
  rightScore: Score;
  screenSize: Size;
}

export interface ScoreUpdate {
  leftScore: Score;
  rightScore: Score;
}

export type ObjectState = {
  position: Point;
  velocity: Velocity;
};

export type PlayerState = {
  lastRequest: number;
  state: ObjectState;
};

export interface StateUpdate {
  state: number;
  ball: ObjectState;
  leftPaddle: PlayerState;
  rightPaddle: PlayerState;
  score: ScoreUpdate;
}
