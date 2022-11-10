package pong

import (
	"math/rand"

	"vastnebula.com/pong/pb"
)

// Ball holds the data for a ball in the pong game.
type Ball struct {
	Point
	Velocity
	Radius    int32
	direction int32
	saved     Velocity
}

// NewBall creates a new ball at the center of the screen with a direction to the right.
func NewBall() *Ball {
	s := Size{Width: InitScreenWidth, Height: InitScreenHeight}
	return &Ball{
		Point:     s.Center(),
		Radius:    InitBallRadius,
		direction: 1,
	}
}

// ToProto converts the Ball struct to a protocol buffer struct.
func (b *Ball) ToProto() *pb.Ball {
	return &pb.Ball{
		Point:    b.Point.ToProto(),
		Velocity: b.Velocity.ToProto(),
		Radius:   b.Radius,
	}
}

// Edge represents the edges of the ball. Top and Bottom are y coordinates while Left and Right are x.
type Edge struct {
	Top    int32
	Bottom int32
	Left   int32
	Right  int32
}

const InitBallRadius = 8
const MaxScore = 10

// Update changes the state of the ball. It also has collision detection logic for the ball.
func (b *Ball) Update(leftPaddle *Paddle, rightPaddle *Paddle, leftScore *Score, rightScore *Score) {
	// Add velocity to ball
	b.X += b.Vx
	b.Y += b.Vy

	bEdge := Edge{
		Top:    b.Y - b.Radius + b.Vy,
		Bottom: b.Y + b.Radius + b.Vy,
		Left:   b.X - b.Radius + b.Vx,
		Right:  b.X + b.Radius + b.Vx,
	}

	// Boundaries
	// Top and bottom boundaries
	if bEdge.Bottom > InitScreenHeight || bEdge.Top < 0 {
		b.Vy = -b.Vy // Ball bounces off
	}

	// Left and right boundaries
	if bEdge.Right > InitScreenWidth || bEdge.Left < 0 {
		// Update score
		if bEdge.Right > rightPaddle.X {
			leftScore.Increment()
		} else {
			rightScore.Increment()
		}
		b.ResetPosition()
		b.AddMotion()
		b.switchDirection()
	}

	// Right paddle
	if bEdge.Right > rightPaddle.X && bEdge.Left < rightPaddle.X+rightPaddle.Width {
		if bEdge.Bottom > rightPaddle.Y && bEdge.Top < rightPaddle.Y+rightPaddle.Height {
			b.Vx = -b.Vx // Ball bounces off
		}
	}

	// Left paddle
	if bEdge.Left < leftPaddle.X+leftPaddle.Width && bEdge.Right > leftPaddle.X {
		if bEdge.Bottom > leftPaddle.Y && bEdge.Top < leftPaddle.Y+leftPaddle.Height {
			b.Vx = -b.Vx // Ball bounces off
		}
	}
}

// ResetPosition sets the position of the ball to the center of the screen and the velocity to 0.
func (b *Ball) ResetPosition() {
	b.Vx = 0
	b.Vy = 0

	// Reset ball position
	b.X = InitScreenWidth / 2
	b.Y = InitScreenHeight / 2
}

// AddMotion gives the ball velocity in both the x and y direction.
func (b *Ball) AddMotion() {
	b.Vx = 5

	// Random velocity between min and max
	max := 4
	min := -4
	b.Vy = int32(rand.Intn(max-min) + min)

	// Prevent horizontal
	for b.Vy == 0 {
		b.Vy = int32(rand.Intn(max-min) + min)
	}
}

// PauseMotion saves the current velocity of the ball and sets the velocity to 0.
func (b *Ball) PauseMotion() {
	b.saved = b.Velocity
	b.Velocity.Vx = 0
	b.Velocity.Vy = 0
}

// ResumeMotion restores the current velocity of the ball from the saved velocity.
func (b *Ball) ResumeMotion() {
	b.Velocity = b.saved
}

// switchDirection switches the direction of the ball to either 1 (right) or -1 (left).
// The direction switches to the opposite of the currently set direction.
// The initial Vx of the ball must be positive when using this function.
func (b *Ball) switchDirection() {
	b.direction = -b.direction
	b.Vx *= b.direction
}
