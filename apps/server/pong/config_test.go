package pong

import "testing"

func TestCenter(t *testing.T) {
	s := Size{Width: 100, Height: 100}
	p := s.Center()
	if p.X != 50 && p.Y != 50 {
		t.Fatalf("config: failed to get center")
	}
}
