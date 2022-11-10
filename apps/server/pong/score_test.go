package pong

import "testing"

func TestIncrement(t *testing.T) {
	s := Score{Value: 5}
	s.Increment()
	if s.Value != 6 {
		t.Fatalf("score: value not incremented")
	}
}
