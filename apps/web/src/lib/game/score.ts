// Contains the value of each score in the game and the position of the score on the canvas
class Score {
  x: number;
  y: number;
  value: number;

  constructor(x: number, y: number, value: number) {
    this.x = x;
    this.y = y;
    this.value = value;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.font = "60px sans";
    ctx.fillText(this.value.toString(), this.x, this.y);
  }

  // Updates the value of the score
  updateState(value: number) {
    this.value = value;
  }
}

export default Score;
