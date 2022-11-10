package pong

import "vastnebula.com/pong/pb"

// Paddle is a paddle in the pong game.
type Paddle struct {
	Point
	Velocity
	Size
	Ay int32
}

// ToProto converts the Paddle struct to a protocol buffer struct.
func (p *Paddle) ToProto() *pb.Paddle {
	return &pb.Paddle{
		Point:    p.Point.ToProto(),
		Velocity: p.Velocity.ToProto(),
		Size:     p.Size.ToProto(),
		Ay:       p.Ay,
	}
}

const (
	InitPaddleGap          = 35.0
	InitPaddleWidth        = 10.0
	InitPaddleHeight       = 80.0
	InitPaddleAcceleration = 8.0
)

// MoveUp changes the velocity in the y axis so that the paddle moves up.
func (p *Paddle) MoveUp() {
	p.Vy -= p.Ay
}

// MoveDown changes the velocity in the y axis so that the paddle moves down.
func (p *Paddle) MoveDown() {
	p.Vy += p.Ay
}

// StopUp removes the velocity in the y axis so that the paddle does not move up.
func (p *Paddle) StopUp() {
	if p.Vy < 0 {
		p.Vy = 0
	}
}

// StopDown removes the velocity in the y axis so that the paddle does not move down.
func (p *Paddle) StopDown() {
	if p.Vy > 0 {
		p.Vy = 0
	}
}

// Update changes the state of the paddle. It also has collision detection logic for the paddle.
func (p *Paddle) Update() {
	// Add velocity to paddle
	p.Y += p.Vy

	// Boundaries
	// Top boundary
	if p.Y+p.Vy < 0 {
		p.Vy = 0
		p.Y = 0
	}

	// Bottom boundary
	if p.Y+p.Vy > InitScreenHeight-p.Height {
		p.Vy = 0
		p.Y = InitScreenHeight - p.Height
	}
}
