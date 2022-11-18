package pong

const PaddleBottomLimitY = InitScreenHeight - InitPaddleHeight

// paddle is a paddle in the pong game.
type paddle struct {
	Y  int32
	Vy int32
	Ay int32
}

// moveUp changes the velocity in the y axis so that the paddle moves up.
func (p *paddle) moveUp() {
	p.Vy -= p.Ay
}

// moveDown changes the velocity in the y axis so that the paddle moves down.
func (p *paddle) moveDown() {
	p.Vy += p.Ay
}

// stopUp removes the velocity in the y axis so that the paddle does not move up.
func (p *paddle) stopUp() {
	if p.Vy < 0 {
		p.Vy = 0
	}
}

// stopDown removes the velocity in the y axis so that the paddle does not move down.
func (p *paddle) stopDown() {
	if p.Vy > 0 {
		p.Vy = 0
	}
}

// update changes the state of the paddle. It also has collision detection logic for the paddle.
func (p *paddle) update() {
	// Add velocity to paddle
	p.Y += p.Vy

	// Boundaries
	// Top boundary
	if p.Y+p.Vy < 0 {
		p.Vy = 0
		p.Y = 0
	}

	// Bottom boundary
	if p.Y+p.Vy > PaddleBottomLimitY {
		p.Vy = 0
		p.Y = PaddleBottomLimitY
	}
}
