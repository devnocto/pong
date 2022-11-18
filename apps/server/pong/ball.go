package pong

import "math/rand"

// ball holds the data for a ball in the pong game.
type ball struct {
	X         int32
	Y         int32
	Vx        int32
	Vy        int32
	direction int32
	savedVx   int32
	savedVy   int32
}

// newBall creates a new ball at the center of the screen.
func newBall() *ball {
	return &ball{
		X:         InitScreenWidth / 2,
		Y:         InitScreenHeight / 2,
		direction: InitBallDirection,
	}
}

// Edge represents the edges of the ball. Top and Bottom are y coordinates while Left and Right are x.
type Edge struct {
	Top    int32
	Bottom int32
	Left   int32
	Right  int32
}

// update changes the state of the ball. It also has collision detection logic for the ball.
func (b *ball) update(leftPaddle *paddle, rightPaddle *paddle, leftScore *score, rightScore *score) {
	// Add velocity to ball
	b.X += b.Vx
	b.Y += b.Vy

	bEdge := Edge{
		Top:    b.Y - InitBallRadius + b.Vy,
		Bottom: b.Y + InitBallRadius + b.Vy,
		Left:   b.X - InitBallRadius + b.Vx,
		Right:  b.X + InitBallRadius + b.Vx,
	}

	// Boundaries
	// Top and bottom boundaries
	if bEdge.Bottom > InitScreenHeight || bEdge.Top < 0 {
		b.Vy = -b.Vy // Ball bounces off
	}

	// Left and right boundaries
	if bEdge.Right > InitScreenWidth || bEdge.Left < 0 {
		// Update score
		if bEdge.Right > InitRightPaddleX {
			leftScore.increment()
		} else {
			rightScore.increment()
		}
		b.resetPosition()
		b.addMotion()
		b.switchDirection()
	}

	// Right paddle
	if bEdge.Right > InitRightPaddleX && bEdge.Left < InitRightPaddleX+InitPaddleWidth {
		if bEdge.Bottom > rightPaddle.Y && bEdge.Top < rightPaddle.Y+InitPaddleHeight {
			b.Vx = -b.Vx // Ball bounces off
		}
	}

	// Left paddle
	if bEdge.Left < InitLeftPaddleX+InitPaddleWidth && bEdge.Right > InitLeftPaddleX {
		if bEdge.Bottom > leftPaddle.Y && bEdge.Top < leftPaddle.Y+InitPaddleHeight {
			b.Vx = -b.Vx // Ball bounces off
		}
	}
}

// resetPosition sets the position of the ball to the center of the screen and the velocity to 0.
func (b *ball) resetPosition() {
	b.Vx = 0
	b.Vy = 0

	// Reset ball position
	b.X = InitScreenWidth / 2
	b.Y = InitScreenHeight / 2
}

// addMotion gives the ball velocity in both the x and y direction.
func (b *ball) addMotion() {
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

// pauseMotion saves the current velocity of the ball and sets the velocity to 0.
func (b *ball) pauseMotion() {
	b.savedVx = b.Vx
	b.savedVy = b.Vy
	b.Vx = 0
	b.Vy = 0
}

// resumeMotion restores the current velocity of the ball from the saved velocity.
func (b *ball) resumeMotion() {
	b.Vx = b.savedVx
	b.Vy = b.savedVy
}

// switchDirection switches the direction of the ball to either 1 (right) or -1 (left).
// The direction switches to the opposite of the currently set direction.
// The initial Vx of the ball must be positive when using this function.
func (b *ball) switchDirection() {
	b.direction = -b.direction
	b.Vx *= b.direction
}
