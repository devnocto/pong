package pong

import "testing"

func TestIncrement(t *testing.T) {
	s := score{Value: 5}
	s.increment()
	if s.Value != 6 {
		t.Fatalf("score: value not incremented")
	}
}
