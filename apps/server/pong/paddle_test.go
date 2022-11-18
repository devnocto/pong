package pong

import "testing"

func TestMovement(t *testing.T) {
	p := paddle{Y: InitScreenHeight / 2, Ay: InitPaddleAcceleration}
	p.moveUp()
	p.update()
	if p.Y != 232 {
		t.Fatalf("paddle: move up failed")
	}
	p.stopUp()
	p.moveDown()
	p.update()
	if p.Y != 240 {
		t.Fatalf("paddle: move down failed")
	}
}
