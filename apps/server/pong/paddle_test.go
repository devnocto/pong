package pong

import "testing"

func TestMovement(t *testing.T) {
	p := Paddle{Point: Point{X: 0, Y: InitScreenHeight / 2}, Ay: InitPaddleAcceleration}
	p.MoveUp()
	p.Update()
	if p.Y != 232 {
		t.Fatalf("paddle: move up failed")
	}
	p.StopUp()
	p.MoveDown()
	p.Update()
	if p.Y != 240 {
		t.Fatalf("paddle: move down failed")
	}
}
